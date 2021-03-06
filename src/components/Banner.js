import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">Joseph Edwards</h1>
      <h3>
      {/* <span>Sales Engineer, Writer, Music Guru</span><br />
      <span>Licensed Producer, Broker & Caregiver</span> */}
      <span>Student</span>
        {/* <br/>
        Let's
        <a className="smoothscroll" href="#about">
          {" "}
          start scrolling
        </a>{" "}
        and learn more
        <a className="smoothscroll" href="#about">
          {" "}
          about me
        </a>. */}
      </h3>
      <SocialLinks /> 
      <hr />
    </div>
  </div>
);

export default Banner;
