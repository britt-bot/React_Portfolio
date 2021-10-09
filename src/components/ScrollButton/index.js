import React from 'react';
import './style.css'

export default function ScrollButton() {

  function scroll() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return(
    <div id='scrollBtn'>
      <button type='button' onClick={scroll} className='btn btn-sm'><i className="bi bi-arrow-up-circle"></i></button>
    </div>
  )
};