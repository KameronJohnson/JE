import React from "react";
import { FaRegHandshake, FaBusinessTime, FaChartPie, FaPenFancy, FaLifeRing, FaPeopleCarry } from "react-icons/fa";

const SkillsSection = () => (
  <section id="skills-section">
    <div className="row">
      <h2>Skills</h2>
    </div>
    <div className="row">
      <div className="six columns">
        <div className="skills-box">
          <div className="icon-container">
            <FaBusinessTime size={70}/>
          </div>
          <h3>Business Development</h3>
          <div className="skills-desc">
            <ul>
              <li>Highly Developed Presentation Skills</li>
              <li>Workflow-Process Management</li>
              <li>Proven Ability To Negotiate & Close The Deal</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="six columns">
        <div className="skills-box">
          <div className="icon-container">
            <FaRegHandshake size={70}/>
          </div>
          <h3>Interpersonal Communication</h3>
            <div className="skills-desc">
              <ul>
                <li>Cold Call Phone Master</li>
                <li>Trained Template Writer</li>
                <li>Problem Solving In High Stress Environments</li>
              </ul>
          </div>
        </div>
      </div>      
    </div>
    <div className="row">
      <div className="six columns">
        <div className="skills-box">
          <div className="icon-container">
            <FaChartPie size={70}/>
          </div>
          <h3>Diverse Business Acumen</h3>
          <div className="skills-desc">
            <ul>
              <li>Advanced Agency Management & CRM Systems User</li>
              <li>Proficiency in Microsoft, Apple, & Linux Frameworks</li>
              <li>Marketing, Research, & Social Media Strategy Implementation</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="six columns">
        <div className="skills-box">
          <div className="icon-container">
            <FaLifeRing size={70}/>
          </div>
          <h3>Building C-Suite Relationships</h3>
          <div className="skills-desc">
            <ul>
              <li>Unique Approach To Gaining Access</li>
              <li>Immediate Interest Generation</li>
              <li>Quick To Learn Company Specific Leadership Roles</li>
            </ul>
          </div>
        </div>
      </div>
    </div>    
    <div className="row">
      <div className="six columns">
        <div className="skills-box">
          <div className="icon-container">
            <FaPeopleCarry size={70}/>
          </div>
          <h3>Team Building</h3>
            <div className="skills-desc">
              <ul>
                <li>Flexible & Creative Needs Based Approach</li>
                <li>Passion For Bringing Entertainment & Sense of Humor to Workplace</li>
                <li>Equally Respecting All Coworkers & Clients At All Levels</li>
              </ul>
          </div>
        </div>
      </div>   
      {/* <div className="six columns">
        <div className="skills-box">
          <div className="icon-container">
            <FaPenFancy size={70}/>
          </div>
          <h3>Underwriting</h3>
            <div className="skills-desc">
              <ul>
                <li>Aligning Client Technical Needs With Products & Services</li>
                <li>Analyzing All 3rd Party-Vendor Agreements & Subsequent Risks</li>
                <li>Confirmation Of Core Competencies, Exisiting and Future Potential Barriers To Entry, & Competitor Landscape</li>
              </ul>
          </div>
        </div>
      </div>       */}
    </div>       
  </section>
);

export default SkillsSection;
