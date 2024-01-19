import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Header.css";

export default function Header(props) {
  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setHamburgerIsOpen((prevState) => !prevState);
  };

  return (
    <div className="Header">
      <a href="a">
        <img className="Header-Logo" src="./images/valknut.png" alt="" />
      </a>

      <div className="header-hamburger">
        <img
          className="header-hamburger-icon"
          onClick={toggleIsOpen}
          src="/images/hamburger.png"
          alt=""
        />
        {hamburgerIsOpen && (
          <div className="header-hamburgerMenu">
            <nav>
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
              <Link to="about" smooth={true} duration={500}>
                About
              </Link>
              <Link to="projects" smooth={true} duration={500}>
                Projects
              </Link>
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>

      <ul className="Header-Nav">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
