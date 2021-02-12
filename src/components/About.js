import React from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import joeVideo from "../assets/video/joe.mp4";

import profilePic from "../assets/images/joseph3.jpg";
import edwardsResume from "../assets/documents/EdwardsResume.pdf";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>
        <p>
        Inspired to continue expanding my base of knowledge, I remain open to new challenges and opportunities to align my wide-ranging skill-set with your institution’s mission, vision, and goals.
        </p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>Joseph Edwards</span>
              <span>
                <br /> Bend, OR
              </span>
              <br />
              <span><a href="mailto:mail@josephedwards.life">mail@josephedwards.life</a></span>
            </p>
          </div>
          <div className="columns download">
            <p>
              <a href={edwardsResume} target="_blank" className="button">
                <FaCloudDownloadAlt /> Download Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* <div className="row">
        <div className="video-container">
            <video controls disablePictureInPicture controlsList="nodownload">
            <source src={joeVideo} type="video/mp4" />
            </video>
        </div>
    </div> */}
 
  </section>
);

export default About;
