import React from 'react';
import './style.css'

export default function Heading(props) {
  return (
    <div id={props.id} className='d-flex flex-column justify-content-center align-items-center mt-5'>
      <h1 id='headingTitle' className='text-center'>
        {props.children}
        </h1>
      <hr />
    </div>
  )
};