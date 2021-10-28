import React from 'react';
import ImageContainer from '../ImageContainer/ImageContainer';
import { FaFileDownload } from "react-icons/fa";
import './style.css'

export default function AboutInfo() {
  return (
    <div id='aboutInfo'>
      <div id='aboutImgContainer'>
        <ImageContainer id='aboutImg' src='assets/images/britt.png' alt='About Image'/>
      </div>
      <div id='info'>
        <h4 className='text-center'><span id='creative'>Creative</span>, by <span id='nature'>nature</span>. 
        <br /><span id='developer'>Developer</span>, by <span id='curious'>curiosity</span>.</h4>
        <p className='text-center'>
          <br />
          <br />
          <span id='field'>Full Stack Web Developer</span> and <span id='field'>Graphic Designer</span> leveraging a background in art and design. 
          User-centric creative that thrives in collaborative team environments. Proven ability to easily 
          and beautifully bring client visions to life. Recognized for effective interpersonal communication skills 
          to help deliver engaging user interfaces. Experience in several industries other than Web Development 
          and Graphic Design including: Marketing, Photography, Music, Makeup Artistry, Social Media, Legal and Logistics. 
          <br />
          <br />
          I have overcome several obstacles and fought several battles in my quest to change the path of my life. 
          These have given me the drive and determination to be and do the best at everything I take on, and to never give up. 
          They have also taught me compassion, empathy and the ability to see and think about things from different angles and views.
          <br />
          <br />
          I want to make a difference where possible, so I am always looking for ways to help people and organizations get online 
          and have an even better chance to thrive. If you or your organization need to get online or have any open source projects 
          going on, lemme know! 
        </p>
        <br />
        <div id='resume' className="d-flex justify-content-center">
          <button className="btn btn-outline-light">
            <a href="assets\docs\Brittany_C_Resume.pdf" target="_blank">
                <FaFileDownload />
                <br />Here's My Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  )
};
