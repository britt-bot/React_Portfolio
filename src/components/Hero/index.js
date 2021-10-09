import React from 'react';
import './style.css';
import Container from '../Container/Container';
import ImageContainer from '../ImageContainer/ImageContainer';

export default function Hero() {
  return (
    <Container>
      <div id='hero'>
        <div id='introContainer' className='text-center'>
          <h1 id='fullName'>Britt Bot</h1>
          <h3 id='quote'>Positivity is contagious. Spread it.™</h3>
        </div>
        <div>
         <ImageContainer id='heroImg' src='assets/images/self.jpg' alt='Hero Image'/>
        </div>
      </div>
    </Container>
  )
};