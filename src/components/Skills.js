import React from "react";

const Skills = () => (
  <div className="row skill">
    <div className="three columns header-col">
      <h1>
        <span>Skills</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="skills-container">
        <div className="skills-left">
          <ul>
            <li>Workflow-process management</li>
            <li>Interpersonal communication</li>
            <li>Problem solving in high stress environments</li>
            <li>Diverse business acumen</li>
          </ul>
        </div>
        <div className="skills-right">
          <ul>
            <li>Highly disciplined</li>
            <li>Team player</li>
            <li>Microsoft, Apple, & Linux</li>
            <li>Agency management systems</li>
          </ul>
        </div>
      </div>

      <div className="bars">
        <ul className="skills">
          <li>
            <span className="bar-expand photoshop" />
            <em>Photoshop</em>
          </li>
          <li>
            <span className="bar-expand illustrator" />
            <em>Illustrator</em>
          </li>
          <li>
            <span className="bar-expand wordpress" />
            <em>Wordpress</em>
          </li>
          <li>
            <span className="bar-expand css" />
            <em>CSS</em>
          </li>
          <li>
            <span className="bar-expand html5" />
            <em>HTML5</em>
          </li>
          <li>
            <span className="bar-expand nodejs" />
            <em>Nodejs</em>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Skills;
