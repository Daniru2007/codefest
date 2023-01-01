import "./TimeProjectItem.css";
import { useParams } from "react-router-dom";
import { useState, useEffect, useLayoutEffect } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

function TimeProjectItem() {
  const userId = 1;
  const { id } = useParams();

  const [chartData, setChartData] = useState([]);
  const [data, setData] = useState({});
  const [project, setProject] = useState({
    name: "",
    days: 0,
    time: [0, 0],
    subjects: [{ name: "subject", val: 10 }],
  });
  const [colors, setColors] = useState([]);
  const [time, setTime] = useState([10, 1, 0]);
  const [stop, setStop] = useState(true);

  // TODO color generator which returns color array to useLayoutEffect and adding colors on project changes
  const randomColorGenerator = (amount) => {
    let colorsTemp = [];
    for (let i = 0; i < amount; i++) {
      colorsTemp.push("#" + Math.floor(Math.random() * 16777215).toString(16));
    }
    return colorsTemp;
  };

  const onNameChange = (e) => {
    setProject({
      ...project,
      name: e.target.value,
    });
  };

  const addSubjects = (e) => {
    let subjects = project?.["subjects"] ? project["subjects"] : [];
    subjects.push({ name: "new subject", val: 0 });
    let colorsTemp = [...colors];
    colorsTemp.push("#" + Math.floor(Math.random() * 16777215).toString(16));
    setColors(colorsTemp);
    setProject({
      ...project,
      subjects: [...subjects],
    });
  };

  const onSubjectValueChange = (e) => {
    let parsedVal = parseInt(e.target.value ? e.target.value : "0");
    let id = parseInt(e.target.id);
    const subjects = project["subjects"];
    subjects[id] = { name: subjects[id]["name"], val: parsedVal };
    setProject({
      ...project,
      subjects: [...subjects],
    });
  };

  // this calls when some information is changed
  const onInfoChange = (e) => {
    let days = project["days"];
    let hours = project["time"][0];
    let mins = project["time"][1];
    let parsedVal = parseInt(e.target.value ? e.target.value : "0");
    switch (e.target.id) {
      case "days":
        if (!(parsedVal > 366)) days = parsedVal;
        break;
      case "hours":
        if (!(parsedVal > 24)) hours = parsedVal;
        break;
      case "mins":
        if (!(parsedVal > 59)) mins = parsedVal;
        break;
    }
    // updating the data
    setProject({
      ...project,
      days: `${days}`,
      time: [`${hours}`, `${mins}`],
    });
  };

  const onSubjectNameChange = (e) => {
    let id = parseInt(e.target.id);
    const subjects = project["subjects"];
    subjects[id] = { name: `${e.target.value}`, val: subjects[id]["val"] };
    setProject({
      ...project,
      subjects: [...subjects],
    });
  };

  // reading the database
  const fetchJson = () => {
    fetch(`http://localhost:3000/users/${userId}`)
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setData(responseData);
        let proj = responseData["projects"].filter((project) => {
          if (project["id"] === Number(id)) {
            return project;
          }
        })[0];
        setProject({ ...proj });
        setColors(randomColorGenerator(proj["subjects"].length));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useLayoutEffect(() => {
    fetchJson();
  }, []);

  const saveData = (e) => {
    fetch(`http://localhost:3000/users/${userId}`)
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setData(responseData);

        let proj = responseData["projects"].filter((project) => {
          if (project["id"] === Number(id)) {
            return project;
          }
        })[0];
        let ind = responseData["projects"].indexOf(proj);
        responseData["projects"][ind] = project;

        fetch(`http://localhost:3000/users/${userId}`, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(responseData),
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {})
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    let subjects = [...project["subjects"]];
    let sum = 0;
    let chartDataTemp = [];
    for (let i = 0; i < subjects.length; i++) {
      const subject = subjects[i];
      sum += subject.val;
    }
    for (let i = 0; i < subjects.length; i++) {
      const subject = subjects[i];
      chartDataTemp.push({
        name: subject.name,
        val: Math.round((subject.val / sum) * 100),
        // val: Math.round(subject.val),
        fill: colors[i],
      });
    }
    setChartData(chartDataTemp);
  }, [project]);

  useEffect(() => {
    if (!stop) {
      let timeout = setInterval(() => {
        if (time[2] <= 0) {
          if (time[1] <= 0) {
            setTime([time[0] - 1, 59, 59]);
          } else {
            setTime([time[0], time[1] - 1, 59]);
          }
        } else {
          setTime([time[0], time[1], time[2] - 1]);
        }
      }, 1000);
      return () => clearInterval(timeout);
    }
  });

  const startTimer = (key) => {
    let hours = Number(
      (
        (chartData?.[key]?.val / 1000) *
        (project?.["days"] * (project?.["time"][0] + project?.["time"][1] / 60))
      ).toFixed(1)
    );
    let minutes = (hours - Math.floor(hours)).toFixed(1) * 60;
    hours = Math.floor(hours);
    setTime([hours, minutes, 0]);
  };

  return (
    <div>
      <label>
        Name{" "}
        <input
          type="text"
          value={project?.["name"]}
          id="name"
          max={366}
          onChange={onNameChange}
        />
      </label>
      <br />
      <label>
        How many days?{" "}
        <input
          type="number"
          value={project?.["days"]}
          id="days"
          max={366}
          onChange={onInfoChange}
        />
      </label>
      <br />
      How much time do you study per day?{" "}
      <label>
        hours:
        <input
          type="number"
          id="hours"
          min="1"
          max="24"
          value={project?.["time"]?.[0]}
          onChange={onInfoChange}
        />
      </label>
      <label>
        minutes:
        <input
          type="number"
          id="mins"
          min="1"
          max="24"
          value={project?.["time"]?.[1]}
          onChange={onInfoChange}
        />
      </label>
      <br />
      <br />
      difficulty
      <br />
      {project?.["subjects"]?.map((subject) => {
        const key = project.subjects.indexOf(subject);
        return (
          <div className="subject" key={key}>
            <label>
              <input
                type="text"
                value={subject.name}
                id={key}
                onChange={onSubjectNameChange}
              />
              <input
                type="range"
                id={key}
                value={subject.val}
                min={0}
                max={100}
                onChange={onSubjectValueChange}
              />
              {subject.val}%
            </label>
            <button onClick={() => startTimer(key)}>start Timer</button>
            <p>
              hours:{" "}
              {(
                (chartData?.[key]?.val / 1000) *
                (project?.["days"] *
                  (project?.["time"][0] + project?.["time"][1] / 60))
              ).toFixed(1)}
            </p>
            <br />
          </div>
        );
      })}
      <button onClick={addSubjects}>Add +</button>
      <button onClick={saveData}>Save</button>
      <div style={{ width: "50vw", height: "50vh" }}>
        <ResponsiveContainer>
          <PieChart width={730} height={500}>
            <Pie
              data={chartData}
              fill="#8884d8"
              dataKey="val"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
            />
            <Legend />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <h1>
        {time[0].toLocaleString("en-US", { minimumIntegerDigits: 2 })}:
        {time[1].toLocaleString("en-US", { minimumIntegerDigits: 2 })}:
        {time[2].toLocaleString("en-US", { minimumIntegerDigits: 2 })}
      </h1>
      <button onClick={() => setStop(!stop)}>{stop ? "start" : "stop"}</button>
    </div>
  );
}

export default TimeProjectItem;
