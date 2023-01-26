import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import { Link, Outlet } from "react-router-dom";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import "./NewsFeed.css";

function NewsFeed(userId) {
  const [data, setData] = useState([]);
  const [fetched, changeFetch] = useState(false);

  // get the news when the component mounts
  useEffect(() => {
    fetch("https://api.newscatcherapi.com/v2/search?q=kids+educational", {
      method: "GET",
      headers: {
        "x-api-key": "GDg9gfg_5A5cfcXygLOmWJiTD2xwuOHX31Nh6L0SjTs",
      },
    })
      .then((jsonObj) => {
        return jsonObj.json();
      })
      .then((tempData) => {
        setData(tempData.articles);
      })
      .catch(() => changeFetch(!fetched));
  }, [fetched]);
  return (
    <div className="news">
      <Link to={"../"}>
        <BsArrowLeftCircleFill className="back__button" />
      </Link>
      {/* All the news */}
      {data?.map((news) => {
        return (
          <div className="news__item">
            <h3>{news.title}</h3>
            <a href={news.link} target="_blank">
              {news.summary}
            </a>
            <p>{news.author}</p>
          </div>
        );
      })}
    </div>
  );
}

export default NewsFeed;
