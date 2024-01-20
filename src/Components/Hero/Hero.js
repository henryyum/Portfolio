import React from "react";
import "./Hero.css";

export default function Hero(props) {
  const handleDownload = () => {
    window.location.href = "/Resume2024.pdf";
  };

  const handleEmail = () => {
    const email = "henry.yum1993@hotmail.com";
    const mailToLink = `mailto:${email}`;

    window.location.href = mailToLink;
  };
  return (
    <div className="Hero">
      <div className="Hero-Left">
        <div className="Hero-User-Left">
          <h4>Hi, my name is</h4>
          <h1>Henry Yum</h1>
          <h2>Front-End React Developer</h2>
          <p>
            I am a Front-End Developer based in Melbourne Australia. I am
            passionate about working on every aspect of web development, from
            the user interface to the server logic.
          </p>
        </div>

        <div className="Hero-Social-Wrapper">
          <a href="https://www.linkedin.com/in/henry-yum-1b357b13a/">
            <img
              className="Social-Icon"
              src="/images/linkedin.png"
              alt=""
            ></img>
          </a>
          <a href="https://github.com/henryyum">
            <img
              className="Social-Icon"
              src="/images/github-sign.png"
              alt=""
            ></img>
          </a>
        </div>

        <div className="Hero-Btn-Wrapper">
          <button onClick={handleDownload} id="Hero-Btn1">
            Download CV
          </button>
          <button onClick={handleEmail}>Contact Me</button>
        </div>
      </div>

      <div className="Hero-Img-Wrapper">
        <img className="Hero-Img" src="/images/img1.jpeg" alt=""></img>
      </div>
    </div>
  );
}
