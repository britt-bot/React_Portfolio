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
        <h4 className='text-center'><span id='headTask'>Creative</span>, by <span id='headQuality'>nature</span>. 
        <br /><span id='headTask'>Developer</span>, by <span id='headQuality'>curiosity</span>.</h4>
        <p className='text-center'>
          <br />
          <span id='task'>Graphic Designer</span> | <span id='task'>Full Stack Developer</span> | <span id='task'>Photographer</span> | <span id='task'>Updo Stylist</span> | <span id='task'>Model</span> | <span id='task'>Vocalist</span> 
          <br /><p className='nameLine'>(<span id='fewName'>just to name a few</span>)</p>
          <br />
          User-centric creative leveraging a background in art and design that thrives in collaborative team environments. 
          Proven ability to easily and beautifully bring client visions to life. Recognized for effective interpersonal communication skills 
          to help deliver engaging user interfaces and designs. 
          <br />
          <br />
          Experience in several industries including, but not limited to: 
          <br /><span id='expTask'>Graphic Design</span>, <span id='expTask'>Full Stack Web Development</span>, <span id='expTask'>Photography</span>, <span id='expTask'>Makeup Artistry</span>, <span id='expTask'>Updo Styling</span>, <span id='expTask'>Music</span>, <span id='expTask'>Marketing</span>,&nbsp;
          <span id='expTask'>Social Media</span>, <span id='expTask'>Finance</span>, <span id='expTask'>Legal</span> and <span id='expTask'>Logistics</span>. 
          <br />
          <br />
          I have overcome several obstacles and fought several battles in my quest to change the path of my life. 
          <ul>
            <li>Quit smoking after 15 years of smoking at least a pack a day.</li>
            <li>Lost over 115 pounds by changing my diet and adding some form of exercise to my daily routine.</li>
            <li>Overcome and gotten treatment for years of untreated mental disorders caused by childhood sexual and mental abuse that continued into my early thirties.</li>
          </ul>

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
          <button className="btn">
            <a href="assets\docs\B_Cummings-Resume.pdf" target="_blank">
                <FaFileDownload />
                <br />Here's My Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  )
};
