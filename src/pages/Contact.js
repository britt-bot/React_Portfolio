import React from 'react';
import ContactCard from '../components/ContactCard/ContactCard';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';


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