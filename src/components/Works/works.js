import React from 'react'
import './works.css';
import Portfolio1 from '../../images/portfolio1.jpg';
import Portfolio2 from '../../images/portfolio2.jpg';
import Portfolio3 from '../../images/portfolio3.avif';
import Portfolio4 from '../../images/portfolio4.avif';
import Portfolio5 from '../../images/portfolio5.avif';
import Portfolio6 from '../../images/portfolio6.avif';

const works = () => {
  return (
    <section id='works'>
        <h2 className='worksTitle'>My Portfolio</h2>
        <span className="worksDesc">I'm a dedicated software enthusiast with an unwavering passion for crafting cutting-edge web solutions, seamlessly blends creativity and code to transform ideas into captivating digital experiences.</span>

        <div className="worksImgs">
            <img src={Portfolio1} alt="Portfolio1" className="worksImg" />
            <img src={Portfolio2} alt="Portfolio2" className="worksImg" />
            <img src={Portfolio3} alt="Portfolio3" className="worksImg" />
            <img src={Portfolio4} alt="Portfolio4" className="worksImg" />
            <img src={Portfolio5} alt="Portfolio5" className="worksImg" />
            <img src={Portfolio6} alt="Portfolio6" className="worksImg" />
        </div>
        <button className="worksBtn">
            See More
        </button>
    </section>
  );
}

export default works
