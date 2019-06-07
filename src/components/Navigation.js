import React from "react";
import SocialLinks from "./SocialLinks";

const isCurrent = (anchor, pathname) => (
  pathname.endsWith(anchor)
  ? 'current'
  : ''
)
class Navigation extends React.Component {
  state = {
    pathname: '#home'
  }
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({pathname: window.location.href});
    })
  }
  render() {
    const { pathname = '' } = this.state
    return (
    <nav id="nav-wrap">
      <a className="mobile-btn" href="#nav-wrap" />
      <ul id="nav" className="nav">
        <li className={isCurrent('#home', pathname)}>
          <a className="smoothscroll" href="#home">
            Home
          </a>
        </li>
        <li className={isCurrent('#about', pathname)}>
          <a className="smoothscroll" href="#about">
            About
          </a>
        </li>
        <li className={isCurrent('#skills-section', pathname)}>
          <a className="smoothscroll" href="#skills-section">
            Skills
          </a>
        </li>
        <li className={isCurrent('#resume', pathname)}>
          <a className="smoothscroll" href="#resume">
            Resume
          </a>
        </li>
        <li className={isCurrent('#portfolio', pathname)}>
          <a className="smoothscroll" href="#portfolio">
            Portfolio
          </a>
        </li>
      </ul>
      <div className="social-desktop">
        <SocialLinks />
      </div>
    </nav>
  )}
};

export default Navigation;
