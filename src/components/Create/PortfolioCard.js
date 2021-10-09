import React from 'react';
import './style.css'

export default function CreatePortfolioCards({title, image, description}) {
  return (
    <div className='cardContainerCreate'>
      <div className='card p-0'>
        <div className='card-header'>
          {title}
        </div>
        <div className='card-body d-flex flex-column justify-content-evenly align-items-center'>
          <div className='portfolioImg d-flex justify-content-center mb-2'>
            <img src={image} alt={title} className='img-thumbnail'/>
          </div>
        </div>
        <div className='card-footer'>
          <p>
            {description}
          </p>
        </div>
      </div>
    </div>
  )
};