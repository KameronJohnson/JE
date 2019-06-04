import React from "react";

const Work = () => (
  <div className="row work">
    <div className="three columns header-col">
      <h1>
        <span>Work</span>
      </h1>
    </div>
    
    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>Roffman Real Estate Investments</h3>
          <p className="info">
            Broker
            <span>&bull;</span>
            <em className="date">2016-2017</em>
          </p>
          <ul className="work-list">
            <li>Organic business procurement: research regarding best use of existing assets and land development opportunities, prospect meetings, and proposal initiation</li>
            <li>Provide clients alternative forms of financing within real estate risk management arena, including construction development and property management liabilities </li>
          </ul>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>XDimensional Technologies</h3>
          <p className="info">
            Sales Representative
            <span>&bull;</span>
            <em className="date">2014-2015</em>
          </p>
          <ul className="work-list">
            <li> Analyze and refine internal/external business process workflows with executive, analytical, marketing, and QA teams, in support of client needs-based reporting</li>
            <li>Advance procedural efficiencies with development of communication templates</li>
          </ul>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>Beecher Carlson</h3>
          <p className="info">
            Assistant Vice President
            <span>&bull;</span>
            <em className="date">2011-2014</em>
          </p>
          <ul className="work-list">
            <li>Arrange new business meetings for executives and coworkers alike, ultimately resulting in over $250,000 of new revenue</li>
            <li>Ensure completion of all client account underwriting and marketing tasks to highest ethical standards, in compliance with all applicable laws, regulations, policies, and procedures </li>
          </ul>
        </div>
      </div>      
    </div>
  </div>
);

export default Work;
