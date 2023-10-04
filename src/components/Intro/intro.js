import React from "react";
import "./intro.css";
import bg from '../../images/profilePic.png';
import { Link } from "react-scroll";
import btnImg from '../../images/hireme.png'

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">I'm <span className="introName">
          Nishant</span><br />Chemical Engineer</span>
          <p className="introPara">Chemical Engineer Turned Software Sorcerer: Bridging Two Worlds</p>
          <Link to="your-target-section" spy={true} smooth={true} offset={-50} duration={500}>
            <button className="btn">
              <img src={btnImg} alt="Hire Me" className="btnImg" />Hire Me
            </button>
          </Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
