import React from 'react';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import DevelopPortfolioCards from '../components/Develop/PortfolioCard';
import PortfolioCardContainer from '../components/Develop/PortfolioCardContainer';


export default function Develop() {
  const projectsDevelop = [
    {
      title: 'LineUP',
      image: 'assets/images/replay.png',
      built: 'Mongo, Express, React, Node, Javascript, Mongoose, Connect-mongo, Axios, Google Authorization, Bcrypt, Dotenv, Nodemon, Bootstrap',
      description: 'A MERN application that allows for users to search and follow festivals around the world.',
      github: 'https://github.com/britt-bot/LineUP',
      deployed: 'https://lineup-festival.herokuapp.com/'
    },
    {
      title: 'Tech Blog',
      image: 'assets/images/tech-blog.png',
      built: 'Node, JavaScript, MySQL, Sequelize, Express, Handlebars, Dotenv, Nodemon, Heroku',
      description: 'A CMS-style blog site utilized to create, publish, view, and review posts.',
      github: 'https://github.com/britt-bot/14-Tech_Blog',
      deployed: 'https://tech-blog--homework-14.herokuapp.com/'
    },
    {
      title: 'E-Commerce Back-End',
      image: 'assets/images/google-book-search.png',
      built: 'MySQL, Javascript, Sequelize, Express, Dotenv, Insomnia',
      description: 'An E-Commerce back-end application that uses Object-Relational Mapping.',
      github: 'https://github.com/britt-bot/13-ECommerce_Back_End',
      deployed: 'https://drive.google.com/file/d/1lT6UapaVvZTTsuWDNRQ4lSF_LlLQebSv/view'
    },
    {
      title: 'Team Profile Generator',
      image: 'assets/images/bookclub.png',
      built: 'Node, Inquirer, Jest, Javascript, Insomnia',
      description: 'A Node.js command-line application that generates a Team Profile HTML page, using Object-Oriented Programming.',
      github: 'https://github.com/britt-bot/10-Team_Profile_Generator',
      deployed: 'https://drive.google.com/file/d/1a6XhG4uplXMxuT0Yn8PvJqfx1ZW4hXQr/view?usp=sharing'
    },
    {
      title: 'Employee Directory',
      image: 'assets/images/employee-directory.png',
      built: 'React, JavaScript, Bootstrap, Random User API, Axios, Heroku',
      description: 'A React employee directory application used to manage lists of employees.',
      github: 'https://github.com/britt-bot/19-Employee_Directory',
      deployed: 'https://employee-tracker--homework-19.herokuapp.com/'
    },
    {
      title: 'Workout Tracker',
      image: 'assets/images/weather-dash.jpeg',
      built: 'Mongoose, Mongo, Node, Express, Javascript, Heroku',
      description: 'A workout tracker application using MongoDB to store user input.',
      github: 'https://github.com/britt-bot/17-Workout_Tracker',
      deployed: 'https://arcane-gorge-00224.herokuapp.com/?id=6127047a7eb5620016ffe601'
    },
  ]

  const renderCards = ({title, image, built, description, github, deployed}) => {
    return (
    <DevelopPortfolioCards 
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
      <Heading id='develop'>
        Develop
      </Heading>
      <PortfolioCardContainer>
        {projectsDevelop.map(renderCards)}
      </PortfolioCardContainer>
    </Container>
  )
};