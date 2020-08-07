import React from "react";

const Education = () => (
  <div className="row education">
    <div className="three columns header-col">
      <h1>
        <span>Education</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>University of Oregon</h3>
          <p className="info">
            B.S. Business Administration 
            <span>&bull;</span>
            Focus on Entrepreneurship
            {/* <span>&bull;</span>
            <em className="date">June 2008</em> */}
            <br />
            
            B.S. Political Science
            <span>&bull;</span>
            Focus on Game Theory and Organizational Behavior
            {/* <span>&bull;</span>
            <em className="date">June 2008</em> */}
            <br />
            Southern Oregon University
            <span>&bull;</span>
            Post-Baccalaureate Accounting Certificate Expected Spring 2021
          </p>

        </div>
      </div>

      {/* <div className="row item">
        <div className="twelve columns">
          <h3>School of Cool Designers</h3>
          <p className="info">
            B.A. Degree in Graphic Design
            <span>&bull;</span>
            <em className="date">March 2003</em>
          </p>

          <p>
          Irony offal succulents, raclette flannel green juice hell of woke. Beard fixie post-ironic tacos swag offal. Church-key swag twee raclette subway tile tbh pok pok tattooed shaman williamsburg PBR&B. Ramps stumptown drinking vinegar slow-carb chicharrones tumblr hexagon pug hell of cronut la croix franzen. Snackwave unicorn four loko, keffiyeh letterpress bitters edison bulb.
          </p>
        </div>
      </div> */}
    </div>
  </div>
);

export default Education;
