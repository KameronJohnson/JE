import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">Joseph Edwards</h1>
      <h3>
      <span>Sales Engineer, Writer, Music Guru</span><br />
      <span>Licensed Producer, Broker & Caregiver</span>
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
      <hr />
      {/* <SocialLinks /> */}
    </div>
  </div>
);

export default Banner;
