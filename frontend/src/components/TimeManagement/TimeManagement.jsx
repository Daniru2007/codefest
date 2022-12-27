import { useState, useEffect, useLayoutEffect } from "react";

function TimeManagement() {
  const [data, setData] = useState({});
  const fetchJson = () => {
    return fetch("database/users.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
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
  }, [data]);
  return <div>user: {data?.["0001"]?.["name"] || "not loaded yet"}</div>;
}

export default TimeManagement;
