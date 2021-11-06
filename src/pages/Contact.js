import React from 'react';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import ContactCard from '../components/ContactCard/ContactCard';

function Contact() {
  return (
    <Container>
      <Heading id='contact'>
        Contact
      </Heading>
      <ContactCard />
    </Container>
  )
}

export default Contact;