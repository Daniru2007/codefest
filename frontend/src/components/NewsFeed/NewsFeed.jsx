import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import { Link, Outlet } from "react-router-dom";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import "./NewsFeed.css";

function NewsFeed(userId) {
  const [data, setData] = useState([]);
  const [fetched, changeFetch] = useState(false);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=educational+for+kids&from=2022-12-23&sortBy=publishedAt&apiKey=aae5b1de3d1a4775b4f71d76940fa38d"
    )
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
      {data?.map((news) => {
        return (
          <div className="news__item">
            <h3>{news.title}</h3>
            <img src={news.urlToImage} alt="" />
            <a href={news.url} target="_blank">
              {news.content}
            </a>
            <p>{news.author}</p>
          </div>
        );
      })}
    </div>
  );
}

export default NewsFeed;
