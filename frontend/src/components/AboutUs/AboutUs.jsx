import "./Aboutus.css";

function AboutUs() {
  return (
    <div className="about_us">
      <section className="pg_1">
        <div className="container">
          <div className="container_back"></div>
          <div class="about">ABOUT US</div>

          <div className="para_1">
            <h1>We Are From Asoka Vidyalaya !</h1>
            <p>
              We are young developers from colombo Asoka Vidyalaya. Our team is
              made up of experienced developers who are passionate about using
              technology to make a difference.
            </p>
          </div>
        </div>
      </section>

      <section className="pg_2">
        {/* second scroll page */}

        <div className="about_us_2">
          <h1>Our Team</h1>

          <div className="avatar">
            <img
              src="/src/assets/about_img/avatar1.png"
              alt="Avatar"
              class="avatar"
            ></img>
            <div className="person">
              <h3>Daniru Ayuka</h3>
              <h4>
                Am 15 year old young developer and I have gone through
                <br />
                bunch of programming languages and programming tool
                <br />
                and I did a major work for this project as covering the
                <br />
                javascript section.
              </h4>
            </div>
          </div>

          <div className="avatar">
            <img
              src="/src/assets/about_img/avatar2.png"
              alt="Avatar"
              class="avatar"
            ></img>
            <div className="person">
              <h3>Muhammed Faahir</h3>
              <h4>
                Am 15 years old and a member of Merge Conflicts and
                <br />
                I have gone trough few programming languages and
                <br />
                I covered some HTML and CSS parts in this project. <br />
              </h4>
            </div>
          </div>

          <div className="avatar">
            <img
              src="/src/assets/about_img/avatar3.png"
              alt="Avatar"
              class="avatar"
            ></img>
            <div className="person">
              <h3>Nethnu Bullathsinhala</h3>
              <h4>
                Am 15 years old and another member of Merge Conflicts team
                <br />
                and I have gone through some backend stuffs and game
                <br />
                development. I did almost everything on backend regarding this
                project.
                <br />
              </h4>
            </div>
          </div>

          <div className="avatar">
            <img
              src="/src/assets/about_img/avatar4.png"
              alt="Avatar"
              class="avatar"
            ></img>
            <div className="person">
              <h3>Tiran Pankaja</h3>
              <h4>
                Am 15 years old and another member of Merge Conflicts team
                <br />
                I have gone through few programming languages and
                <br />I took a part in this project as a UI (User Interface)
                designer.
                <br />
              </h4>
            </div>
          </div>

          <div className="avatar">
            <img
              src="/src/assets/about_img/avatar5.png"
              alt="Avatar"
              class="avatar"
            ></img>
            <div className="person">
              <h3>Senuja Illangakoon</h3>
              <h4>
                Am 15 years old too As well as a member of Merge Conflicts
                <br />
                team. I have a knowledge on programming and never tried on,
                <br />
                So I did some deisigning and giving ideas to team members as
                <br />
              </h4>
            </div>
          </div>
        </div>
      </section>

      <div className="about_us_3">
        <div className="explanation">
          <h3 className="falcon">About Us</h3>
          <p>
            As the members of the team Merge conflicts, our mission is to create
            innovative software solutions that simplify everyday tasks and
            improve productivity. Our team is made up of experienced developers
            who are passionate about using technology to make a difference.
          </p>
        </div>
        <div className="email">
          <h5>Contact Us :</h5>
          <p>
            Email : <a href="#email"> mergeconflict@gmail.com </a>
          </p>

          <div className="contact">
            <p>
              Contact No : <a href="#contact"> +94 712345678</a>
            </p>
          </div>
        </div>
        {/* <div className="copy">
          <h6>
            © All Right Reserved by.
            <br /> Merge Conflict{" "}
          </h6>
        </div> */}
      </div>
    </div>
  );
}

export default AboutUs;
