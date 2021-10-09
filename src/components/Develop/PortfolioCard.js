import React from 'react';
import './style.css'

export default function DevelopPortfolioCards({title, image, built, description, github, deployed}) {
  return (
    <div className='cardContainerDevelop'>
      <div className='card p-0'>
        <div className='card-header'>
          {title}
        </div>
        <div className='card-body d-flex flex-column justify-content-evenly align-items-center'>
          <div className='portfolioImg d-flex justify-content-center mb-2'>
            <img src={image} alt={title} className='img-thumbnail'/>
          </div>
          <div className='projectDescription'>
            <p>
              {description}
            </p>
            <p>
              <strong>Built with:</strong> {built}
            </p>
          </div>
        </div>
        <div className='card-footer'>
          <a href={github} target='_blank' rel="noreferrer"><i className='bi bi-github mx-2'></i></a>
          <a href={deployed} target='_blank' rel="noreferrer"><i className='bi bi-link-45deg mx-2'></i></a>
        </div>
      </div>
    </div>

  )
};