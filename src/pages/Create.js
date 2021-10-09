import React from 'react';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import CreatePortfolioCards from '../components/Create/PortfolioCard';
import PortfolioCardContainer from '../components/Create/PortfolioCardContainer';


export default function Create() {
  const projectsCreate = [
    {
      title: 'image',
      image: 'assets/images/replay.png',
      description: 'An image created using...',
    },
    {
      title: 'image',
      image: 'assets/images/tech-blog.png',
      description: 'An image created using...',
    },
    {
      title: 'image',
      image: 'assets/images/google-book-search.png',
      description: 'An image created using...',
    },
    {
      title: 'image',
      image: 'assets/images/bookclub.png',
      description: 'An image created using...',
    },
    {
      title: 'image',
      image: 'assets/images/employee-directory.png',
      description: 'An image created using...',
    },
    {
      title: 'image',
      image: 'assets/images/weather-dash.jpeg',
      description: 'An image created using...',
    },
  ]

  const renderCards = ({title, image, built, description, github, deployed}) => {
    return (
    <CreatePortfolioCards 
      title={title} 
      image={image} 
      built={built}
      description={description} 
      github={github} 
      deployed={deployed}
    />)
  }

  return (
    <Container>
      <Heading id='create'>
        Create
      </Heading>
      <PortfolioCardContainer>
        {projectsCreate.map(renderCards)}
      </PortfolioCardContainer>
    </Container>
  )
};