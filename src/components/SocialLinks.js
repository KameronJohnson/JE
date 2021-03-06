import React from "react";
import {
  FaTwitter,
  // FaLinkedin,
  FaEnvelope
} from "react-icons/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
    {/* <li>
      <a href="https://twitter.com/JDE_live" target="_blank">
        <FaTwitter />
      </a>
    </li> */}
    {/* <li>
      <a href="https://www.linkedin.com/in/JDELive/" target="_blank">
        <FaLinkedin />
      </a>
    </li> */}
    <li>
      <a href="mailto:mail@josephedwards.life">
        <FaEnvelope />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
