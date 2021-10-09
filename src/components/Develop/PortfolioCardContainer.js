import React from 'react';

export default function PortfolioCardContainer(props) {
  return (
    <div className='m-2 row row-cols-md-2 row-cols-md-3 g-3'>
      {props.children}
    </div>
  )
};