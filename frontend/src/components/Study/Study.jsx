import { Link } from "react-router-dom";

import "./Study.css";

function Study() {
  // TODO (TiraWeb & @faahir): html code comes after the return statement
  return (
    <div className="container">
      <h3>Start Your Learning Journey</h3>
      <h1>Choose The Grade You Study ?</h1>
      <div className="grades">
        <div className="grade">
          <a href="#grade-6">
            <img src="assets/img_study/grade_6.png"></img>
          </a>
          <div className="grade6">
            <h2>Grade 6</h2>

            <p>
              Education is not <br />
              preparation for <br />
              life education is <br />
              life itself <br />
              —John Dewey.
            </p>
          </div>
        </div>
        <div className="grade">
          <a href="#grade-7">
            <img src="assets/img_study/grade_7.png"></img>
          </a>

          <div className="grade7">
            <h2>Grade 7</h2>

            <p>
              Instructions ends in <br />
              school, but education <br />
              ends only with life. <br />
              -Fedrick Robertson.
            </p>
          </div>
        </div>
      </div>

      <div className="grades">
        <div className="grade">
          <a href="#grade-8">
            <img src="assets/img_study/grade_8.png"></img>
          </a>

          <div className="grade8">
            <h2>Grade 8</h2>

            <p>
              An investment in <br />
              knowledge pays <br />
              the best interest." <br />
              -Benjamin Frankin.
            </p>
          </div>
        </div>

        <div className="grade">
          <a href="#grade-9">
            <img src="assets/img_study/grade_9.png"></img>
          </a>

          <div className="grade9">
            <h2>Grade 9</h2>

            <p>
              The wholepurpose of <br />
              education is to turn <br />
              mirrors into windows. <br />
              —Sydney J. Harris.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Study;
