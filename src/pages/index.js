import React from "react";
import Link from "gatsby-link";

import "../assets/css/main.css";

import Header from "../components/Header";
import About from "../components/About";
import SkillsSection from "../components/SkillsSection";
import Resume from "../components/Resume";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const IndexPage = () => (
  <div>
    <Header />
    <About />
    <SkillsSection />
    <Resume />
    <Portfolio />
    <Testimonials />
    <Footer />
  </div>
);

export default IndexPage;
