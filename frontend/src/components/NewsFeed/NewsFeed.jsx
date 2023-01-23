import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./NewsFeed.css";

function NewsFeed(userId) {
  const [data, setData] = useState([]);
  const [fetched, changeFetch] = useState(false);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=education&from=2022-12-23&sortBy=publishedAt&apiKey=aae5b1de3d1a4775b4f71d76940fa38d"
    )
      .then((jsonObj) => {
        return jsonObj.json();
      })
      .then((tempData) => {
        console.log(tempData);
        setData(tempData.articles);
      })
      .catch(() => changeFetch(!fetched));
  }, [fetched]);
  return (
    <div>
      {data?.map((news) => {
        return <h1>{news.title}</h1>;
      })}
    </div>
  );
}

export default NewsFeed;
