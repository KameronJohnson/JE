import React from "react";

import XDimLogo from "../assets/images/xdim.png";
import MmLogo from "../assets/images/mm.jpg";
import BeecherLogo from "../assets/images/beecher.jpg";
import HubLogo from "../assets/images/hub.png";

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
          <div className="info">
            <div className="position">Broker</div>
              <span>&bull;</span>
              <em className="date">2016-2017</em>
              <span>&bull;</span>
              Portland, OR
          </div>
          <ul className="work-list">
            <li>Organic business procurement: research regarding best use of existing assets and land development opportunities, prospect meetings, and proposal initiation</li>
            <li>Provide clients alternative forms of financing within real estate risk management arena, including construction development and property management liabilities</li>
          </ul>
        </div>
      </div>

      <hr></hr>
      <div className="row item">
        <div className="twelve columns">
          <div className="work-title">
            <h3>HUB International Northwest</h3>
            <a href="https://www.hubinternational.com/" target="_blank">
              <img className="work-logo" src={HubLogo} />
            </a>
          </div>
          <div className="info">
            <div className="position">Producer</div>
              <span>&bull;</span>
              <em className="date">2015-2016</em>
              <span>&bull;</span>
              Lake Oswego, OR
          </div>
          <ul className="work-list">
            <li>Develop scalable solutions for customers across varying industries and business segments; ensure continued brand growth, profitability, and overall operational stability</li>
            <li>Manage cyber risk and corporate wellness educational seminar in partnership with HUB New York City, HUB Pacific Northwest, and Portland State University Business Accelerator</li>
          </ul>
        </div>
      </div>

      <hr></hr>
      <div className="row item">
        <div className="twelve columns">
          <div className="work-title">
            <h3>XDimensional Technologies</h3>
            <a href="https://www.xdti.com/" target="_blank">
              <img className="work-logo" src={XDimLogo} />
            </a>
          </div>
          <div className="info">
            <div className="position">Sales Representative</div>
            <span>&bull;</span>
            <em className="date">2014-2015</em>
            <span>&bull;</span>
            Brea, CA
          </div>
          <ul className="work-list">
            <li> Analyze and refine internal/external business process workflows with executive, analytical, marketing, and QA teams, in support of client needs-based reporting</li>
            <li>Advance procedural efficiencies with development of communication templates</li>
          </ul>
        </div>
      </div>

      <hr></hr>
      <div className="row item">
        <div className="twelve columns">
          <div className="work-title">
            <h3>Beecher Carlson</h3>
            <a href="https://www.beechercarlson.com/" target="_blank">
              <img className="work-logo beecher" src={BeecherLogo} />
            </a>
          </div>
          <div className="info"> 
            <div className="position">Assistant Vice President</div>
            <span>&bull;</span>
            <em className="date">2011-2014</em>
            <span>&bull;</span>
            Santa Ana, CA
          </div>
          <ul className="work-list">
            <li>Arrange new business meetings for executives and coworkers alike, ultimately resulting in over $250,000 of new revenue</li>
            <li>Ensure completion of all client account underwriting and marketing tasks to highest ethical standards, in compliance with all applicable laws, regulations, policies, and procedures </li>
          </ul>
        </div>
      </div>

      <hr></hr>
      <div className="row item">
        <div className="twelve columns">
          <div className="work-title">
            <h3>Marcus & Millichap</h3>
            <a href="https://www.marcusmillichap.com/" target="_blank">
              <img className="work-logo" src={MmLogo} />
            </a>
          </div>
          <div className="info">
            <div className="position">Broker</div>
            <span>&bull;</span>
            <em className="date">2008-2009</em>
            <span>&bull;</span>
            Portland, OR
          </div>
          <ul className="work-list">
            <li>Facilitate acquisition and disposition of client investment properties utilizing intricate CRM system, multi-tiered marketing strategies, and presentations outlining current and pro-forma comparative financial analyses</li>
            <li>Close and manage over $7,000,000 of exclusive client listings in historically difficult economic recession</li>
          </ul>
        </div>
      </div>      
    </div>
  </div>
);

export default Work;
