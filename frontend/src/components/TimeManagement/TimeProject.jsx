import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./TimeProject.css";

function TimeProject() {
  let navigate = useNavigate();
  const userId = 1;
  const [data, setData] = useState({});
  const [projectInfo, setProjectInfo] = useState({
    name: "exam",
    days: 0,
    time: [0, 0],
    subjects: [{ name: "subject", val: 0 }],
  });
  const [subjectTime, setSubjectTime] = useState([
    { name: "subject", val: 0, time: 0 },
  ]);

  const onSubjectNameChange = (e) => {
    let id = parseInt(e.target.id);
    const subjects = projectInfo["subjects"];
    subjects[id] = { name: `${e.target.value}`, val: subjects[id]["val"] };
    setProjectInfo({
      ...projectInfo,
      subjects: [...subjects],
    });
  };

  const onNameChange = (e) => {
    setProjectInfo({
      ...projectInfo,
      name: e.target.value,
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
    fetch(`http://localhost:3000/users/${userId}`)
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setData(responseData);
        let projects = responseData["projects"];
        let len = responseData["projects"].length + 1;
        let project = { ...projectInfo };
        project["id"] = Number(len);
        project["subjects"] = subjectTime;
        projects.push({ ...project });

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
          .then((data) => {
            navigate(`./${data["projects"].slice(-1)[0].id}`);
          })
          .catch((error) => {
            console.log(error);
          });
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

  const ChangeSubjectTime = () => {
    let subjects = [...projectInfo["subjects"]];
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
        (projectInfo?.["days"] *
          (Number(projectInfo?.["time"][0]) +
            Number(projectInfo?.["time"][1]) / 60))
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

  useEffect(() => {
    ChangeSubjectTime();
  }, [projectInfo]);

  return (
    <div className="project__add">
      <label className="project__name">
        Name{" "}
        <input
          type="text"
          value={projectInfo["name"]}
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
            <p>{subjectTime?.[key]?.time}</p>
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
