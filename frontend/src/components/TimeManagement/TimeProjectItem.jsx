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
  RadialBarChart,
  RadialBar,
} from "recharts";

import { FaHourglassStart } from "react-icons/fa";
import { AiFillPauseCircle } from "react-icons/ai";
import { AiFillPlayCircle } from "react-icons/ai";

function TimeProjectItem() {
  const userId = 1;
  const { id } = useParams();

  const [chartData, setChartData] = useState([]);
  const [data, setData] = useState({});
  const [project, setProject] = useState({
    name: "",
    days: 0,
    time: [0, 0],
    subjects: [{ name: "subject", val: 0, time: 0 }],
  });

  const [subjectTime, setSubjectTime] = useState([
    { name: "subject", val: 0, time: 0 },
  ]);
  const [colors, setColors] = useState([]);
  const [time, setTime] = useState([0, 0, 0]);
  const [stop, setStop] = useState(true);
  const [currentSubjectId, setCurrentSubjectId] = useState(0);
  const [progress, setProgress] = useState([1, 1]);

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
        setSubjectTime(proj.subjects);
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

  const ChangeSubjectTime = () => {
    let subjects = [...project["subjects"]];
    let sum = 0;
    let subjectTimeTemp = [];
    for (let i = 0; i < subjects.length; i++) {
      const subject = subjects[i];
      sum += subject.val;
    }
    for (let i = 0; i < subjects.length; i++) {
      const subject = subjects[i];
      let time = (
        (subject.val / sum) *
        (project?.["days"] *
          (Number(project?.["time"][0]) + Number(project?.["time"][1]) / 60))
      ).toFixed(1);
      if (time === "NaN") time = 0;
      subjectTimeTemp.push({
        name: subject.name,
        val: subject.val,
        time: time,
      });
    }
    setSubjectTime(subjectTimeTemp);
  };

  // useEffect(() => {
  //   ChangeSubjectTime();
  // }, [project]);

  const updateSubjectTime = (hours, minutes) => {
    let projectTemp = { ...project };
    projectTemp.subjects[currentSubjectId].time =
      Number(hours) + Number(minutes / 60);
    setProject(projectTemp);
  };

  useEffect(() => {
    let hours = 0;
    let minutes = 0;
    if (!stop && !(time[0] === 0)) {
      let timeout = setInterval(() => {
        if (time[2] <= 0) {
          if (time[1] <= 0) {
            setTime([time[0] - 1, 59, 59]);
            updateSubjectTime(time[0] - 1, 59);
          } else {
            setTime([time[0], time[1] - 1, 59]);
            updateSubjectTime(time[0], time[1] - 1);
          }
        } else {
          setTime([time[0], time[1], time[2] - 1]);
        }
      }, 1000);
      return () => clearInterval(timeout);
    }
  });

  const startTimer = (key) => {
    let hours = Number(subjectTime[key].time);
    let minutes = (hours - Math.floor(hours)) * 60;
    hours = Math.floor(hours);
    setTime([hours, minutes, 59]);
    setCurrentSubjectId(key);
  };

  useEffect(() => {
    let totalTime =
      project?.["days"] *
      (Number(project?.["time"][0]) + Number(project?.["time"][1]) / 60);
    let currentTime = 0;
    for (let i = 0; i < project["subjects"].length; i++) {
      const subject = project["subjects"][i];
      currentTime += Number(subject.time);
    }
    setProgress([1 - currentTime / totalTime, 1]);
  }, [project]);

  return (
    <div className="projectItem">
      <div className="details">
        <h1 className="projectItem__name">{project?.["name"]}</h1>
        <h2 className="projectItem__days">Days: {project?.["days"]}</h2>
        <h2 className="projectItem__time">
          hours: {project?.["time"]?.[0]} minutes: {project?.["time"]?.[1]}
        </h2>
        <br />
        <h2 className="projectItem__difficulty">Difficulty</h2>
        {project?.["subjects"]?.map((subject) => {
          const key = project.subjects.indexOf(subject);
          return (
            <div className="subject" key={key}>
              <span className="projectItem__subject__name">
                {subject.name}{" "}
              </span>
              <progress
                type="range"
                id={key}
                value={subject.val}
                min={0}
                max={100}
                onChange={onSubjectValueChange}
              />
              <span style={{ color: "rgb(75, 82, 109)" }}>
                {" "}
                {subject.val}%{" "}
              </span>

              <button onClick={() => startTimer(key)} className="start__timer">
                <FaHourglassStart />
              </button>
              <p style={{ color: "rgb(75, 60, 100)" }}>
                hours: {Number(project?.subjects?.[key]?.time)?.toFixed(1)}
              </p>
              <br />
            </div>
          );
        })}
      </div>
      <div className="display">
        {/* <div className="progressbar">
          <div
            className="progressbar__red"
            style={{ width: `${progress[1] * 400}px` }}
          ></div>
          <div
            className="progressbar__green"
            style={{ width: `${progress[0] * 400}px` }}
          ></div>
        </div> */}

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

        <progress
          type="range"
          value={progress[0]}
          min={0}
          max={progress[1]}
          onChange={onSubjectValueChange}
          style={{ width: "600px", height: "30px" }}
        />
        <h1 style={{ color: "#717cb4" }}>
          {time[0].toLocaleString("en-US", { minimumIntegerDigits: 2 })}:
          {time[1].toLocaleString("en-US", { minimumIntegerDigits: 2 })}:
          {time[2].toLocaleString("en-US", { minimumIntegerDigits: 2 })}
        </h1>
        <button
          onClick={() => setStop(!stop)}
          style={{ background: "none", border: "none" }}
          className="play__pause__button"
        >
          {stop ? <AiFillPlayCircle /> : <AiFillPauseCircle />}
        </button>
      </div>
    </div>
  );
}

export default TimeProjectItem;
