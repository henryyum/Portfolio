import React from "react";
import "./About.css";

export default function About(props) {
  return (
    <div className="About">
      <div className="About-Img-Wrapper">
        <img className="About-Img" src="./images/forest2.jpg" alt=""></img>
      </div>

      <div className="About-Info">
        <div className="About-Intro">
          <h4>My Intro</h4>
          <h1>About Me</h1>
        </div>
        <p>
          I'm a passionate and self-taught Front-End Developer residing in
          Melbourne Australia. Specializing in HTML, CSS, JavaScript and React.
          Skilled in creating responsive and interactive, user-friendly websites
          and applications through clean and efficient code. Aiming to continue
          learning, growing and to gain experience in the world of technology.
        </p>

        <div className="About-Social-Wrapper">
          <div className="About-Social-Parent">
            <div>
              <img
                className="About-Social"
                src="/images/telephone.png"
                alt=""
              ></img>
            </div>

            <div className="About-Social-Container">
              <h4>Call Me:</h4>
              <p>0433208345</p>
            </div>
          </div>

          <div className="About-Social-Parent">
            <div>
              <img className="About-Social" src="/images/mail.png" alt=""></img>
            </div>

            <div className="About-Social-Container">
              <h4>Email:</h4>
              <p>henry.yum1993@hotmail.com</p>
            </div>
          </div>
        </div>

        <h4>Tech Stack:</h4>
        <div className="About-Tech-Stack">
          <img className="Tech-Icon" src="/images/html-5.png" alt=""></img>
          <img className="Tech-Icon" src="/images/css-3.png" alt=""></img>
          <img className="Tech-Icon" src="/images/js.png" alt=""></img>
          <img className="Tech-Icon" src="/images/physics.png" alt=""></img>
          <img className="Tech-Icon" src="/images/typescript.png" alt=""></img>
          <img
            className="Tech-Icon"
            src="/images/tailwind-css-icon.png"
            alt=""
          ></img>
          <img className="Tech-Icon" src="/images/github.png" alt=""></img>
        </div>
      </div>
    </div>
  );
}
