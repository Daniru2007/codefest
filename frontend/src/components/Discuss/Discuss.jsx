import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { db, app } from "./Firebase";
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { IoSend } from "react-icons/io5";
import { BsArrowLeftCircleFill } from "react-icons/bs";

import "./Discuss.css";

function Discuss() {
  const [data, setData] = useState([]);
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const getMessages = async () => {
    onSnapshot(
      query(collection(db, "discussion"), orderBy("timestamp", "desc")),
      (querySnapshot) => {
        let tempData = [];
        querySnapshot.forEach((doc) => {
          tempData.push(doc.data());
        });
        tempData.reverse();
        setData([...tempData]);
      }
    );
  };
  const addMessages = async (e) => {
    e.preventDefault();
    if (message === "") return;
    await addDoc(collection(db, "discussion"), {
      user: userName,
      message: message,
      timestamp: serverTimestamp(),
    });
    setMessage("");
  };
  useEffect(() => {
    getMessages();
  }, []);

  return (
    <div className="discuss">
      <Link to={"../"}>
        <BsArrowLeftCircleFill className="back__button" />
      </Link>
      <div className="discuss__messages">
        {data.map((msg, ind) => {
          return (
            <div className="discuss__message" key={ind}>
              <p className="message__user">{msg.user}</p>
              <p className="message__content">{msg.message}</p>
            </div>
          );
        })}
      </div>
      <form className="msgSender">
        <input
          className="msgSender__user"
          type="text"
          value={userName}
          placeholder="username"
          onChange={(e) => setUserName(e.target.value)}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "90vw",
          }}
        >
          <input
            type={"text"}
            className="msgSender__content"
            value={message}
            placeholder="type your message..."
            onChange={(e) => setMessage(e.target.value)}
            onResize={() => {}}
          />
          <button
            className="msgSender__btn"
            type="submit"
            onClick={addMessages}
          >
            <IoSend />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Discuss;
