import { useState, useEffect, useLayoutEffect } from "react";
import { Link, Outlet } from "react-router-dom";

function TimeManagement() {
  const userId = 1;
  // store the data
  const [data, setData] = useState({});

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
    fetchJson(`http://localhost:3000/users/${userId}`);
  }, []);
  useEffect(() => {
    const timeout = setInterval(() => {
      fetchJson();
    }, 10000);
    return () => clearInterval(timeout);
  }, [data]);
  return (
    <div className="time">
      <Link to={`./project/`}>Add</Link>
      {data?.["projects"]?.map((project) => {
        return (
          <Link to={`./project/${project.id}`} key={project.id}>
            <h1>{project.name}</h1>
          </Link>
        );
      })}
    </div>
  );
}

export default TimeManagement;
