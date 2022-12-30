import "./TimeProjectItem.css";
import { useParams } from "react-router-dom";
import { useState, useEffect, useLayoutEffect } from "react";

function TimeProjectItem() {
  const userId = 1;
  const { id } = useParams();
  const [data, setData] = useState({});
  const [project, setProject] = useState({ subjects: [] });

  const onNameChange = (e) => {
    setProject({
      ...project,
      name: e.target.value,
    });
  };

  const addSubjects = (e) => {
    let subjects = project?.["subjects"] ? project["subjects"] : [];
    subjects.push({ name: "new subject", val: 0 });
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
            <br />
          </div>
        );
      })}
      <button onClick={addSubjects}>Add +</button>
      <button onClick={saveData}>Save</button>
    </div>
  );
}

export default TimeProjectItem;
