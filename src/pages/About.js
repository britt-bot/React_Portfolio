import React from 'react';
import Container from '../components/Container/Container'
import Heading from '../components/Heading/Heading';
import AboutInfo from '../components/AboutInfo/AboutInfo';

function About() {
  return (
    <Container>
      <Heading id='about'>
        About Me
      </Heading>
      <AboutInfo />
    </Container>
  )
}

export default About;