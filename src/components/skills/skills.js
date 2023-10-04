import React from 'react';
import './skills.css';
import WEBDeveloper from '../../images/webdeveloper.png';
import Android from '../../images/androiddeveloper.png';
import Software from '../../images/software developer.png'
import AppDesign from '../../images/resume.jpg';

const skills = () => {
  return (
    <div>
      <section id='skills'>
        <span className="skillTitle">What I do</span>     
        <span className="skillDescription">
"Skilled and passionate software developer and web designer, dedicated to crafting innovative code and design solutions that captivate users. I thrive on creative challenges, adding a touch of uniqueness to every project for an irresistibly attractive portfolio."</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={WEBDeveloper} alt="WEBDeveloper" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Web Developement </h2>
                    <p>Experienced web developer creating seamless, user-friendly websites.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={Android} alt="Android" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Android Developement</h2>
                    <p>Experienced Android developer crafting top-notch mobile apps.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={Software} alt="Software" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Software Developement</h2>
                    <p>Seasoned software developer, transforming ideas into robust solutions.</p>
                </div>
            </div>
            <div className="skillBar">
                <a href='https://drive.google.com/file/d/1OcC87aBStnZH4eHFb6FZzBATSkkYLTcL/view?usp=sharing' target='_blank'><img src={AppDesign} alt="AppDesign" className="skillBarImg" /></a>
                <div className="skillBarText">
                    <h2>Resume</h2>
                    <p>Click on the image to know more about me</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default skills
