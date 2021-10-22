import React from 'react';
import './style.css';
import Container from '../Container/Container';
import ImageContainer from '../ImageContainer/ImageContainer';
import { tada, flash } from 'react-animations';
import styled, { keyframes } from 'styled-components';

// const Bounce = styled.div`animation: 5s ${keyframes`${bounceInDown}`} infinite`;

const TadaAnimation = keyframes`${tada}`;
const TadaDiv = styled.div`animation: 3 5s ${TadaAnimation}`;

const FlashAnimation = keyframes`${flash}`;
const FlashDiv = styled.div`animation: 3 10s ${FlashAnimation}`;

export default function Hero() {
  return (
    <Container>
      <div id='hero'>
        <div id='introContainer' className='text-center'>
          <TadaDiv><h1 id='fullName'>Britt Bot</h1></TadaDiv>
          <FlashDiv><h3 id='heroQuote'>Positivity is contagious. Spread it.™</h3></FlashDiv>
        </div>
        <div>
         <ImageContainer id='heroImg' src='assets/images/self.jpg' alt='Hero Image'/>
        </div>
      </div>
    </Container>
  )
};