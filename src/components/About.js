import React from "react";
import { FaCloudDownload } from "react-icons/lib/fa";

import profilePic from "../assets/images/joseph.jpg";
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
        Lorem ipsum dolor amet cliche fanny pack messenger bag pork belly kinfolk, keytar crucifix deep v cardigan beard kale chips. Locavore snackwave umami hot chicken hexagon leggings swag vexillologist pok pok. Intelligentsia etsy tacos, occupy DIY trust fund truffaut adaptogen migas meggings before they sold out hoodie. Fam pabst la croix sriracha lo-fi cloud bread, cred tumblr woke narwhal photo booth ethical shoreditch raclette. Gluten-free ethical street art kitsch deep v wayfarers cloud bread letterpress squid celiac 90's asymmetrical freegan ennui vexillologist. Meh +1 cloud bread air plant cred, single-origin coffee tattooed distillery. Snackwave synth everyday carry, drinking vinegar bitters readymade humblebrag vexillologist vape salvia chicharrones.
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
