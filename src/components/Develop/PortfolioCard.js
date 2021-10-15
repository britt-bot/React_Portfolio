import React from 'react';
import { FaGithub, FaGlobeAmericas } from 'react-icons/fa';
import './style.css'

export default function DevelopPortfolioCards({title, image, built, description, github, deployed}) {
  return (
    <div className='cardContainerDevelop'>
      <div className='card p-0'>
        <div className='card-header'>
          {title}
        </div>
        <div className='card-body d-flex flex-column justify-content-evenly align-items-center'>
          <div className='portfolioImgDev d-flex justify-content-center mb-2'>
            <img src={image} alt={title} className='img-thumbnail'/>
          </div>
          <div className='projectDescription'>
            <p>
              {description}
            </p>
            <br />
            <p>
              <strong>Built with:</strong> {built}
            </p>
          </div>
        </div>
        <div className='card-footer'>
          <a href={github} target='_blank' rel="noreferrer"><FaGithub /></a>
          <a href={deployed} target='_blank' rel="noreferrer"><FaGlobeAmericas /></a>
        </div>
      </div>
    </div>

  )
};