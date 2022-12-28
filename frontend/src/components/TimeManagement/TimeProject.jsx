import { useState } from "react";
import "./TimeProject.css";

function TimeProject() {
  const [projectInfo, setProjectInfo] = useState({
    days: 0,
    time: [0, 0],
    subjects: {
      subject: 0,
    },
  });

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
      <label>
        subject
        <input type="range" min={0} max={100} />
      </label>
      <br />
      <button>Add</button>
    </div>
  );
}

export default TimeProject;
