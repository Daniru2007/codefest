import { Link } from "react-router-dom";

import { BsFillArrowRightCircleFill, BsArrowRightCircle } from "react-icons/bs";

import "./Study.css";

function Study() {
  // TODO (TiraWeb & @faahir): html code comes after the return statement
  return (
    <div className="study__main">
      <div className="topback">
        <h2>Start your learning journey from here</h2>
        <p
          className="home-main__para"
          style={{
            color: "rgb(255, 255, 255)",
            marginLeft: "30px",
            marginRight: "30px",
            marginTop: "1px",
            maxWidth: "555px",
            fontSize: "20px",
            width: "350px",
          }}
        >
          Learning doesn’t stop, but it does have a start, we hope
        </p>
        <a
          className="link"
          style={{
            margin: "10px 30px",
            weight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h4 style={{ display: "inline-block" }}>Take me through!</h4>
          <BsFillArrowRightCircleFill className="link__icon" />
        </a>
      </div>
      <div className="topper"></div>
      <div className="fullbody">
        <h2
          style={{
            position: "absolute",
            left: "30%",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></h2>
        <h2
          style={{
            position: "absolute",
            left: "40%",
            alignItems: "center",
            justifyContent: "center",
            top: "730px",
          }}
        >
          study in{" "}
        </h2>
        <button
          style={{
            position: "absolute",
            width: "400px",
            height: "400px",
            background: "#0F111A",
            borderRadius: "40px",
            left: "130px",
            top: "950px",
            fontSize: "54px",
            color: "aliceblue",
          }}
        >
          Grade 6
        </button>
        <h2
          style={{
            position: "absolute",
            left: "20px",
            alignItems: "center",
            justifyContent: "center",
            top: "1400px",
          }}
        >
          Believe you can and you're halfway there{" "}
        </h2>
        <button
          style={{
            position: "absolute",
            width: "400px",
            height: "400px",
            background: "#0F111A",
            borderRadius: "40px",
            right: "150px",
            top: "950px",
            fontSize: "54px",
            color: "aliceblue",
          }}
        >
          Grade 7
        </button>
        <h2
          style={{
            position: "absolute",
            right: "20px",
            alignItems: "center",
            justifyContent: "center",
            top: "1400px",
          }}
        >
          Everyone fails at something, so don’t stop trying{" "}
        </h2>
        <button
          style={{
            position: "absolute",
            width: "400px",
            height: "400px",
            background: "#0F111A",
            borderRadius: "40px",
            left: "130px",
            top: "1550px",
            fontSize: "54px",
            color: "aliceblue",
          }}
        >
          Grade 8
        </button>
        <h2
          style={{
            position: "absolute",
            left: "20px",
            alignItems: "center",
            justifyContent: "center",
            top: "2000px",
          }}
        >
          {" "}
          Act as if what you do makes a difference. It does{" "}
        </h2>
        <button
          style={{
            position: "absolute",
            width: "400px",
            height: "400px",
            background: "#0F111A",
            borderRadius: "40px",
            right: "150px",
            top: "1550px",
            fontSize: "54px",
            color: "aliceblue",
          }}
        >
          Grade 9
        </button>
        <h2
          style={{
            position: "absolute",
            right: "20px",
            alignItems: "center",
            justifyContent: "center",
            top: "2000px",
          }}
        >
          Believe you can and you're halfway there{" "}
        </h2>
      </div>
    </div>
  );
}

export default Study;
