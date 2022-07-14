import React from "react";
import './style.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import {faInstagram} from "@fortawesome/free-brands-svg-icons"
 
export default function SocialList() {
  return (
    <div className="social-wrapper">
      <ul className="social-list">
        <li className="social-link">
          <a href="https://github.com/Zuckuu" >
            <FontAwesomeIcon icon={faGithub} ></FontAwesomeIcon>
            </a>
        </li>
        <li className="social-link">
            <a href="https://www.instagram.com/cheekyzacken/"><FontAwesomeIcon icon={faInstagram} ></FontAwesomeIcon></a>
        </li>
      </ul>
    </div>
  );
}
