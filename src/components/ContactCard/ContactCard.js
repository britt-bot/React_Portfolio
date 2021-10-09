import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './style.css';

export default function ContactCard() {
  return (
    <div id='contactCardContainer' className='mt-2'>
      <div id='contactImgContainer'>
        <h3 id='collaborate' className='text-center'>Let's Collaborate!</h3>
        <img src='assets/images/fetariot.jpg' alt='Collaborate' id='contactImg'/>
      </div>
      <div id='contactInfoContainer'>
        <div id='contactInfo'>
          <p id='infoName'>Britt Bot</p>
          <p id='infoTitle'>Full Stack Developer + Graphic Designer</p>
        </div>
        <div id='contactIconContainer'>
        <a href="mailto:aeonianmeraki@gmail.com"><FaEnvelope /><span className='contactText'>Email</span></a>
          <a href="https://github.com/britt-bot"><FaGithub /><span className='contactText'>GitHub</span></a>
          <a href="https://www.linkedin.com/in/brittbot/"><FaLinkedin /><span className='contactText'>LinkedIn</span></a>
        </div>
      </div>
    </div>

  )
};