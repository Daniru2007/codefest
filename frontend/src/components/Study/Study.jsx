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
        <Link
          to={"./6"}
          className="grade"
          style={{
            position: "absolute",
            width: "400px",
            height: "400px",
            borderRadius: "40px",
            left: "130px",
            top: "950px",
            fontSize: "54px",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Grade 6
        </Link>
        <h2
          style={{
            position: "absolute",
            left: "20px",
            alignItems: "center",
            justifyContent: "center",
            top: "1400px",
            textAlign: "center",
            fontSize: "25px",
          }}
        >
          Believe you can and you're halfway there{" "}
        </h2>
        <Link
          to={"./7"}
          className="grade"
          style={{
            position: "absolute",
            width: "400px",
            height: "400px",
            borderRadius: "40px",
            right: "150px",
            top: "950px",
            fontSize: "54px",

            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Grade 7
        </Link>
        <h2
          style={{
            position: "absolute",
            fontSize: "25px",
            right: "20px",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
            top: "1400px",
          }}
        >
          Everyone fails at something, so don’t stop trying{" "}
        </h2>
        <Link
          to={"./8"}
          className="grade"
          style={{
            position: "absolute",
            width: "400px",
            height: "400px",
            textDecoration: "none",
            borderRadius: "40px",
            left: "130px",
            top: "1550px",
            fontSize: "54px",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Grade 8
        </Link>
        <h2
          style={{
            position: "absolute",
            textAlign: "center",
            left: "20px",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "25px",
            top: "2000px",
          }}
        >
          {" "}
          Act as if what you do makes a difference. It does{" "}
        </h2>
        <Link
          to={"./9"}
          className="grade"
          style={{
            position: "absolute",
            width: "400px",
            height: "400px",
            borderRadius: "40px",
            textDecoration: "none",
            right: "150px",
            top: "1550px",
            fontSize: "54px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Grade 9
        </Link>
        <h2
          style={{
            position: "absolute",
            right: "20px",
            alignItems: "center",
            justifyContent: "center",
            top: "2000px",
            fontSize: "25px",
            textAlign: "center",
          }}
        >
          Believe you can and you're halfway there{" "}
        </h2>
      </div>
    </div>
  );
}

export default Study;
