import { Link } from "react-router-dom";

import "./Study.css";

function Study() {
  // TODO (TiraWeb & @faahir): html code comes after the return statement
  return (
    <div className="container">
      <h3>Start Your Learning Journey</h3>
      <h1>Choose The Grade You Study</h1>
      <div className="grades">
        <div className="grade">
          <a href="#study">
            <img src="assets/img_study/grade_6.png"></img>
          </a>
          <div className="grade6">
            <h2>Grade 6</h2>

            <p>
              Education is not <br />
              preparation for life; <br />
              education is life itself. <br />
              —John Dewey
            </p>
          </div>
        </div>
        <div className="grade">
          <a href="#study">
            <img src="assets/img_study/grade_8.png"></img>
          </a>

          <div className="grade8">
            <h2>Grade 8</h2>

            <p>
              An investment in <br />
              knowledge pays the <br />
              best interest." <br />
              —Benjamin Franklin.
            </p>
          </div>
        </div>
      </div>
      <div className="grades">
        <div className="grade">
          <a href="#study">
            <img src="assets/img_study/grade_7.png"></img>
          </a>

          <div className="grade7">
            <h2>Grade 7</h2>

            <p>
              Education is not <br />
              preparation for life; <br />
              education is life itself. <br />
              —John Dewey
            </p>
          </div>
        </div>

        <div className="grade">
          <a href="#study">
            <img src="assets/img_study/grade_9.png"></img>
          </a>

          <div className="grade9">
            <h2>Grade 9</h2>

            <p>
              An investment in <br />
              knowledge pays the <br />
              best interest." <br />
              —Benjamin Franklin.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Study;
