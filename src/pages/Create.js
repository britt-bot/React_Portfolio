import React from 'react';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import CreatePortfolioCards from '../components/Create/PortfolioCard';
import PortfolioCardContainer from '../components/Create/PortfolioCardContainer';


export default function Create() {
  const projectsCreate = [
    {
      title: 'Good Bikes Stickers',
      image: 'assets/images/goodbikesstickers.png',
      description: 'Stickers created for fictional brand "Good Bikes".',
    },
    {
      title: 'Good Bikes Logos',
      image: 'assets/images/goodbikeslogos.png',
      description: 'Logos created for fictional brand "Good Bikes".',
    },
    {
      title: 'LineUP',
      image: 'assets/images/lineupcollage.png',
      description: 'Website banner created for app "LineUP".',
    },
    // {
    //   title: 'image',
    //   image: 'assets/images/bookclub.png',
    //   description: 'An image created using...',
    // },
    // {
    //   title: 'image',
    //   image: 'assets/images/employee-directory.png',
    //   description: 'An image created using...',
    // },
    // {
    //   title: 'image',
    //   image: 'assets/images/weather-dash.jpeg',
    //   description: 'An image created using...',
    // },
  ]

  const renderCards = ({title, image, description}) => {
    return (
    <CreatePortfolioCards 
      title={title} 
      image={image} 
      description={description} 
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