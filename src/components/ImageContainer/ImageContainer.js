import React from 'react';
import './style.css'


export default function ImageContainer(props) {
  return(
    <div className='imageContainer'>
      <img id={props.id} src={props.src} alt={props.alt} />
    </div>
  )
};