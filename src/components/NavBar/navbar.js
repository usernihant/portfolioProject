import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../../images/MainLogo.png";
import contactImg from "../../images/contact.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <FontAwesomeIcon icon={faBars} className="mobMenu" onClick={() => setShowMenu(!showMenu)} />
      <img src={logo} alt="Logo" className="logo" />
      <div className="desktopMenu">
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">
          Home
        </Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">
          About
        </Link>
        <Link activeClass="active" to="project" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">
        Projects
        </Link>
        <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">
          Portfolio
        </Link>
        <Link activeClass="active" to="clients" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">
          Careers
        </Link>
      </div>
      <button className="desktopMenuBtn" onClick={() => {
        document.getElementById('contacts').scrollIntoView({ behavior: 'smooth' });
      }}>
        <img src={contactImg} alt="" className="desktopMenuImg" />
        Contact Me
      </button>
      <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>
          Home
        </Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>
          About
        </Link>
        <Link activeClass="active" to="project" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>
        Projects
        </Link>
        <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>
          Portfolio
        </Link>
        <Link activeClass="active" to="clients" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>
          Clients
        </Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>
          Careers
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
