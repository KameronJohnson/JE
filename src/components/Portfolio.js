import React from "react";
import { FaPlus, FaTag } from "react-icons/fa";

import Building from "../assets/images/portfolio/building.jpg";
import BuildingModal from "../assets/images/portfolio/modals/m-building.jpg";
import EdwardsDetails from "../assets/documents/EdwardsDetails-12-2019.pdf";

import BusinessDevelopment from "../assets/images/portfolio/businessdevelopment.jpg";
import BusinessDevelopmentModal from "../assets/images/portfolio/modals/m-businessdevelopment.jpg";
import BusinessDevelopmentDetails from "../assets/documents/BusinessDevelopmentDetails.pdf";

import Caregiver from "../assets/images/portfolio/caregiver.jpg";
import CaregiverModal from "../assets/images/portfolio/modals/m-caregiver.jpg";
import CaregivingDetails from "../assets/documents/CaregivingDetails.pdf";

import Other from "../assets/images/portfolio/other.jpg";
import OtherModal from "../assets/images/portfolio/modals/m-other.jpg";
import OtherDetails from "../assets/documents/Post.pdf";
import DiscussionBoardSubmissions from "../assets/documents/DiscussionBoardSubmissions.pdf";


const Portfolio = () => (
  <section id="portfolio">
    <div className="row">
      <div className="twelve columns collapsed">
        <h1>My Portfolio</h1>

        <div
          id="portfolio-wrapper"
          className="bgrid-quarters s-bgrid-thirds cf"
        >
          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-01" title="">
                <img alt="" src={Building} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>State of Oregon</h5>
                    <p>Agencies & Systems</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-02" title="">
                <img alt="" src={BusinessDevelopment} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Business Development</h5>
                    <p>Managing the Process</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-03" title="">
                <img alt="" src={Caregiver} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Caregiving</h5>
                    <p>Make an Impact</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-04" title="">
                <img alt="" src={Other} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Other</h5>
                    {/* <p>Just For Men</p> */}
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>

      <div id="modal-01" className="popup-modal mfp-hide">
        <img
          className="scale-with-grid deady"
          src={BuildingModal}
          alt=""
        />

        <div className="description-box">
          <h4>Licenses & Degrees Held</h4>
          <p>
          Division of Financial Regulation Producer,  Real Estate Agency Broker, Department of Human Services OHCC Enhanced Caregiver, and University of Oregon Multiple Degree Holder
          </p>
          {/* <span className="categories">
            <FaTag /> Branding, Webdesign
          </span> */}
        </div>

        <div className="link-box">
          <a href={EdwardsDetails} target="_blank">Details</a>
          <a href="#portfolio" className="popup-modal-dismiss">Close</a>
        </div>
      </div>

      <div id="modal-02" className="popup-modal mfp-hide">
        <img
          className="scale-with-grid"
          src={BusinessDevelopmentModal}
          alt=""
        />

        <div className="description-box">
          <h4>Close the Deal!</h4>
          <p>
          Given the passion to invest in the strengths of people, my ethos evolves from the initial unique discovery of respective client/stakeholder, friend, or coworker needs. Using this foundation, we can best develop and deploy innovative strategies, products, and services that strengthen brand awareness, build operational resilience, and further balance sheet flexibility.
          </p>
        </div>

        <div className="link-box">
          <a href={BusinessDevelopmentDetails} target="_blank">Details</a>
          <a href="#portfolio" className="popup-modal-dismiss">Close</a>
        </div>
      </div>

      <div id="modal-03" className="popup-modal mfp-hide">
        <img
          className="scale-with-grid"
          src={CaregiverModal}
          alt=""
        />

        <div className="description-box">
          <h4>Create a Match</h4>
          <p>
          Understanding the constraints of existing free market barriers to entry facing each patient suffering an illness, caregiving trade channels are administered via established government, public charity, and various private not-for-profit and for-profit mechanisms.  All serve enormously important purposes.  Volunteer time to find an organization of choice and understand the scalable, positive impact a provider's one hour of care a month can have on the overall sustainability of the U.S. healthcare system.
          </p>
          {/* <span className="categories">
            <FaTag />Branding
          </span> */}
        </div>

        <div className="link-box">
          <a href={CaregivingDetails} target="_blank">Details</a>
          <a href="#portfolio" className="popup-modal-dismiss">Close</a>
        </div>
      </div>

      <div id="modal-04" className="popup-modal mfp-hide">
        <img
          className="scale-with-grid"
          src={OtherModal}
          alt=""
        />

        <div className="description-box">
          {/* <h4>More Coming Soon</h4> */}
          <h4><a target="_blank" href={DiscussionBoardSubmissions}>Discussion Board Submissions</a></h4>
          {/* <p>
            Please check back shortly for updates...
          </p> */}
          {/* <span className="categories">
            <FaTag />Photography
          </span> */}
        </div>

        <div className="link-box">
          <a href={OtherDetails}>Details</a>
          <a href="#portfolio" className="popup-modal-dismiss">Close</a>
        </div>
      </div>

    </div>
  </section>
);

export default Portfolio;
