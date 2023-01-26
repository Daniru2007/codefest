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
                She has seen this scene before. It had come to her in
                <br />
                dreams many times before. She had to pinch herself to
                <br />
                make sure it wasn't a dream again. She has seen this <br />
                scene before.
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
                She has seen this scene before. It had come to her in
                <br />
                dreams many times before. She had to pinch herself to
                <br />
                make sure it wasn't a dream again. She has seen this <br />
                scene before.
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
              <h3>Nethnu bullathsinhala</h3>
              <h4>
                She has seen this scene before. It had come to her in
                <br />
                dreams many times before. She had to pinch herself to
                <br />
                make sure it wasn't a dream again. She has seen this <br />
                scene before.
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
                She is in this scene ands It had come to her in
                <br />
                dreams many times before. She had to pinch herself to
                <br />
                make sure it wasn't a dream again. She has seen this <br />
                scene before.
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
                She has seen this scene before. It had come to her in
                <br />
                dreams many times before. She had to pinch herself to
                <br />
                make sure it wasn't a dream again. She has seen this <br />
                scene before.
              </h4>
            </div>
          </div>
        </div>
      </section>

      <div className="about_us_3">
        <div className="explanation">
          <h3 className="falcon">About Us</h3>
          <p>
            Generating random paragraphs can be an excellent way for writers to
            get their creative flow going at the beginning of the day. The
            writer has no idea what topic the random paragraph will be about
            when it appears. This forces the writer to use creativity to
            complete one of three common writing challenges. The writer can use
            the paragraph as the first one of a short story and build upon it. A
            second option is to use the random paragraph somewhere in a short
            story they create. The third option is to have the random paragraph
            be the ending paragraph in a short story. No matter which of these
            challenges is undertaken, the writer is forced to use creativity to
            incorporate the paragraph into their writing. Generating random
            paragraphs can be an excellent way for writers to get their creative
            flow going at the beginning of the day. The writer has no idea what
            topic the random paragraph will be about when it appears.
          </p>
        </div>
        <div className="email">
          <h5>Contact Us :</h5>
          <p>
            Email : <a href="#email"> username@gmail.com </a>
          </p>

          <div className="contact">
            <p>
              Contact No : <a href="#contact"> +94 74xxxxxxx</a>
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
