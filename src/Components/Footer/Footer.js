import React from "react";
import "./Footer.css";

export default function Footer(props) {
  return (
    <div className="Footer">
      <img className="Footer-Logo" src="./images/valknut.png" alt="" />
      <p>Social Links:</p>
      <ul>
        <a href="https://www.linkedin.com/in/henry-yum-1b357b13a/">
          <img className="Footer-Icon" src="/images/linkedin.png" alt=""></img>
        </a>
        <a href="https://github.com/henryyum">
          <img
            className="Footer-Icon"
            src="/images/githubdark.png"
            alt=""
          ></img>
        </a>
      </ul>

      <div className="Copyright">
        <p>
          © Copyright 2023. Made by{" "}
          <span className="Footer-Style">Henry Yum</span>
        </p>
      </div>
    </div>
  );
}
