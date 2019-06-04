import React from "react";
import {
  FaTwitter,
  FaLinkedin
} from "react-icons/lib/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href="https://twitter.com/JDE_live" target="_blank">
        <FaTwitter />
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/JDELive/" target="_blank">
        <FaLinkedin />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
