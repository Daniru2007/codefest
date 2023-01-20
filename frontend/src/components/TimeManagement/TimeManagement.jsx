import { useState, useEffect, useLayoutEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { AiFillPlusCircle } from "react-icons/ai";
import "./TimeManagement.css";

function TimeManagement() {
  const userId = 1;
  // store the data
  const [data, setData] = useState({});
  const [changed, setChanged] = useState(true);

  // reading the database
  const fetchJson = () => {
    fetch(`http://localhost:3000/users/${userId}`)
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
  useLayoutEffect(() => {
    fetchJson();
  }, []);
  useEffect(() => {
    const timeout = setInterval(() => {
      fetchJson();
    }, 10000);
    return () => clearInterval(timeout);
  }, [data, changed]);

  const deleteProject = (ind) => {
    let tempData = { ...data };
    let projects = tempData["projects"];
    console.log(ind);
    projects.splice(ind, 1);

    fetch(`http://localhost:3000/users/${userId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tempData),
    })
      .then((response) => {
        setChanged(!changed);
        return response.json();
      })
      .then((data) => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="project__timer">
      <Link className="time__add" to={`./project/`}>
        Add {AiFillPlusCircle}
      </Link>
      <div
        className={`projects ${data?.["projects"]?.length !== 0 ? "show" : ""}`}
      >
        {data?.["projects"]?.map((project, index) => {
          return (
            <div className="project" key={project.id}>
              <Link
                to={`./project/${project.id}`}
                className="project__link"
                key={project.id}
              >
                <h1>{project.name}</h1>
              </Link>
              <button
                className="delete__button"
                onClick={() => deleteProject(index)}
              >
                <MdDelete className="delete__icon" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TimeManagement;
