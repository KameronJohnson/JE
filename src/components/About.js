import React from "react";
import { FaCloudDownload } from "react-icons/lib/fa";

import profilePic from "../assets/images/joseph.jpg";
import edwardsResume from "../assets/documents/EdwardsResume3.pdf";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>
        <p>
        In 2018 I relocated to Bend, Oregon for a period of reflection, after a successful career in Business Development. This time provided the opportunity to contract with multiple mobile applications while performing various care-giving duties at local organizations. I am rejuvenated and seeking new challenges with a creative and stable company. I am excited to align my wide-ranging skill-set with your growth needs. 
        </p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>Joseph Edwards</span>
              <br />
              <span>
                PO Box 1062
                <br /> Bend, OR 97709
              </span>
              <br />
              <span><a href="mailto:mail@josephedwards.life">mail@josephedwards.life</a></span>
            </p>
          </div>
          <div className="columns download">
            <p>
              <a href={edwardsResume} target="_blank" className="button">
                <FaCloudDownload /> Download Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
