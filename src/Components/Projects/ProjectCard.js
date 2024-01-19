import React from "react";
import "./ProjectCard.css";

export default function Card({
  image,
  projectName,
  projectDescription,
  projectLanguage1,
  projectLanguage2,
  projectLanguage3,
  projectBtn1,
  projectBtn2,
  projectBtnLink1,
  projectBtnLink2,
  imageLink,
}) {
  return (
    <div className="project-card">
      <div>
        <a href={imageLink}>
          <img className="project-image" src={image} alt="" />
        </a>
      </div>

      <div className="project-right">
        <h4>{projectName}</h4>
        <p>{projectDescription}</p>
        <ul className="project-language-wrapper">
          <li className="project-language">{projectLanguage1}</li>
          <li className="project-language">{projectLanguage2}</li>
          <li className="project-language">{projectLanguage3}</li>
        </ul>

        <div className="project-icon-wrapper">
          <a href={projectBtnLink1} className="project-icon-link">
            {projectBtn1}{" "}
            <img
              className="project-icon"
              src="/images/github-sign.png"
              alt=""
            />
          </a>
          <a href={projectBtnLink2} className="project-icon-link">
            {projectBtn2}{" "}
            <img className="project-icon" src="/images/share.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
