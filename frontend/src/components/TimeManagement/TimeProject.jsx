import { useState } from "react";
import "./TimeProject.css";

function TimeProject() {
  const [data, setData] = useState({});
  const [projectInfo, setProjectInfo] = useState({
    days: 0,
    time: [0, 0],
    subjects: [
      { name: "science", val: 90 },
      { name: "maths", val: 60 },
      { name: "sinhala", val: 80 },
      { name: "history", val: 40 },
    ],
  });

  const onSubjectNameChange = (e) => {
    let id = parseInt(e.target.id);
    const subjects = projectInfo["subjects"];
    subjects[id] = { name: `${e.target.value}`, val: subjects[id]["val"] };
    setProjectInfo({
      ...projectInfo,
      subjects: [...subjects],
    });
  };

  const addSubjects = (e) => {
    let subjects = projectInfo["subjects"];
    subjects.push({ name: "new subject", val: 0 });
    setProjectInfo({
      ...projectInfo,
      subjects: [...subjects],
    });
  };

  const saveData = (e) => {
    fetch("http://localhost:3000/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });

    fetch("http://localhost:3000/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onSubjectValueChange = (e) => {
    let parsedVal = parseInt(e.target.value ? e.target.value : "0");
    let id = parseInt(e.target.id);
    const subjects = projectInfo["subjects"];
    subjects[id] = { name: subjects[id]["name"], val: parsedVal };
    setProjectInfo({
      ...projectInfo,
      subjects: [...subjects],
    });
  };

  // this calls when some information is changed
  const onInfoChange = (e) => {
    let days = projectInfo["days"];
    let hours = projectInfo["time"][0];
    let mins = projectInfo["time"][1];
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
    setProjectInfo({
      ...projectInfo,
      days: `${days}`,
      time: [`${hours}`, `${mins}`],
    });
  };
  return (
    <div>
      <label>
        How many days?{" "}
        <input
          type="number"
          value={projectInfo["days"]}
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
          value={projectInfo["time"][0]}
          onChange={onInfoChange}
        />
        minutes:
        <input
          type="number"
          id="mins"
          min="1"
          max="24"
          value={projectInfo["time"][1]}
          onChange={onInfoChange}
        />
      </label>
      <br />
      <br />
      difficulty
      <br />
      {projectInfo["subjects"].map((subject) => {
        const key = projectInfo.subjects.indexOf(subject);
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

export default TimeProject;
