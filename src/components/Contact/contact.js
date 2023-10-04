import React, { useRef, useState } from 'react'
import './contact.css';
import Walmart from '../../images/walmart.png';
import Amazon from '../../images/amazon.jpg';
import Facebook from '../../images/facebook.png';
import Flipkart from '../../images/flipkart.jfif';
import FacebookIcon from '../../images/facebookicon.png';
import TwitterIcon from '../../images/twittericon.png';
import LinkedinIcon from '../../images/linkedinicon.png';
import InstagramIcon from '../../images/instagram.avif';
import GitHubIcon from '../../images/githubicon.png';
import HackerRankIcon from '../../images/hackerrankicon.png';
import LeetCodeIcon from '../../images/leetcodeicon.png';
import GFGIcon from '../../images/geekforgeekicon.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const [nameRequired, setNameRequired] = useState(true);
  const [emailRequired, setEmailRequired] = useState(true);
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_oo25yea', 'template_pk3yjnt', form.current, 'FkjQ74gwshOd3vj08')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert("Email sent");
          }, (error) => {
              console.log(error.text);
          });
      };

      const handleNameChange = (e) => {
        if (e.target.value) {
          setNameRequired(false);
        } else {
          setNameRequired(true);
        }
      };
      
      const handleEmailChange = (e) => {
        if (e.target.value) {
          setEmailRequired(false);
        } else {
          setEmailRequired(true);
        }
      };
  return (
    <section id="contactPage">
        <div id="clients">
            <h1 className="contactPageTitle">
                My Dream Companies
            </h1>
            <p className="clientDesc">
            My dream is to work in the software industry, contributing my skills and expertise to a prestigious international company, because I believe that being a part of such an organization would allow me to innovate, collaborate with the best minds in the field, and create cutting-edge solutions that have a global impact
            </p>
            <div className="clientImgs">
                <img src={Walmart} alt="client" className="clientImg" />
                <img src={Facebook} alt="client" className="clientImg" />
                <img src={Flipkart} alt="client" className="clientImg" />
                <img src={Amazon} alt="client" className="clientImg" />
            </div>
        </div>
        <div id="contacts">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your name" name="your_name" required={nameRequired} onChange={handleNameChange}/>
          <input type="email" className="email" placeholder="Your Email" name="your_email" required={emailRequired} onChange={handleEmailChange} />
          <textarea className="msg" name="message" rows="5" placeholder="Your message"></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
          <div className="connectWith">
            Connect with me on following links
          </div>
                <div className="links">
                    <a href="https://www.facebook.com/profile.php?id=100004806490239"  target='_blank'><img src={FacebookIcon} alt="facebook" className="link" /></a>
                    <a href="https://twitter.com/Nishant935980"  target='_blank'><img src={TwitterIcon} alt="twitter" className="link" /></a>
                    <a href="https://linkedin.com/in/nishant-puri-4b0b9318a"  target='_blank'><img src={LinkedinIcon} alt="linkedin" className="link" /></a>
                    <a href="https://www.instagram.com/nish_ant_puri/"  target='_blank'><img src={InstagramIcon} alt="instagram" className="link" /></a>
                    <a href="https://github.com/nishant096"  target='_blank'><img src={GitHubIcon} alt="github" className="link" /></a>
                    <a href="https://www.hackerrank.com/usernihant"  target='_blank'><img src={HackerRankIcon} alt="hackerrank" className="link" /></a>
                    <a href="https://leetcode.com/NishantPuri/"  target='_blank'><img src={LeetCodeIcon} alt="leetcode" className="link" /></a>
                    <a href="https://auth.geeksforgeeks.org/invite/5qomlpq5/"  target='_blank'><img src={GFGIcon} alt="gfg" className="link" /></a>
                </div>
            </form>
        </div>
    </section>
  );
}

export default Contact
