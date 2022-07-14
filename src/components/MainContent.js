import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./style.css";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons"

export default function MainContent() {
  return (
    <div className="info-container">
      <div className="info__name">
        <h1>Zack Le</h1>
      </div>
      <div className="info__job--title">
        <h3>Frontend Developer</h3>
      </div>
      <div className="info__website">
        <a href="https://zuckuu.github.io/Advance-Portfolio/">Portfolio</a>
      </div>
      <div className="btn-wrapper">
        <a className="btn-link1" href="mailto:entbit12@gmail.com">
          <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
          Email
        </a>
        <a
          className="btn-link2"
          href="https://www.linkedin.com/in/thang-le-519ab6209/"
        >
        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
          LinkedIn
        </a>
      </div>
      <div className="info__des">
        <h2 className="info__des--about">About Me</h2>
        <p className="info__des--para">
          I am 19 year-old, who is currently attending University of Houston. My
          career as a frontend software engineer just started and I am excited
          to explore the world of web-building. I have experiences with some
          projects and game-making with HTML, CSS, and JAVA. I am currently
          learning more languages to sharpen my skills.
        </p>
        <h2 className="info__des--about">Interest</h2>
        <p className="info__des--para">
          Foodie, Gundamn, Model-kits, Games, Entrepreneur, Fitness, Tennis,
          Legos.
        </p>
      </div>
    </div>
  );
}
