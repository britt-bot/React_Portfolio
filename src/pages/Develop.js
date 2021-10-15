import React from 'react';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import DevelopPortfolioCards from '../components/Develop/PortfolioCard';
import PortfolioCardContainer from '../components/Develop/PortfolioCardContainer';


export default function Develop() {
  const projectsDevelop = [
    {
      title: 'LineUP',
      image: 'assets/images/lineup.png',
      built: 'Mongo, Express, React, Node, Javascript, Bootstrap, Axios, Google Authorization, Bcrypt, Dotenv',
      description: 'A MERN application for users to search and follow festivals around the world.',
      github: 'https://github.com/britt-bot/LineUP',
      deployed: 'https://lineup-festival.herokuapp.com/'
    },
    {
      title: 'Global Nibz',
      image: 'assets/images/globalnibz.png',
      built: 'CSS, HTML, JavaScript, Materialize, Edamam Recipe API, Google Translate API',
      description: 'A web application allows users to search recipes from around the world.',
      github: 'https://github.com/britt-bot/Global-Nibz',
      deployed: 'https://doublelforce5.github.io/Global-Nibz/'
    },
    {
      title: 'Tech Blog',
      image: 'assets/images/techblog.png',
      built: 'JavaScript, Node, MySQL, Sequelize, Express, Handlebars, Dotenv, Nodemon, Heroku',
      description: 'A CMS-style blog site utilized to create, publish, view, and review posts.',
      github: 'https://github.com/britt-bot/Tech_Blog',
      deployed: 'https://tech-blog--homework-14.herokuapp.com/'
    },
    {
      title: 'Note Taker',
      image: 'assets/images/notetaker.png',
      built: 'Node, JavaScript, CSS, Express, JSON, Inquirer, Jest',
      description: 'An OOP note taking application utilized by users to write and save notes.',
      github: 'https://github.com/britt-bot/Note_Taker',
      deployed: 'https://note-taker--homework-11.herokuapp.com/'
    },
    {
      title: 'Team Roster Generator',
      image: 'assets/images/teamroster.png',
      built: 'CSS, Javascript, JSON, NPM, Node, Inquirer, Jest, Insomnia',
      description: 'A Node.js command-line application, using Object-Oriented Programming to generate a Team Roster.',
      github: 'https://github.com/britt-bot/Team_Profile_Generator',
      deployed: 'https://drive.google.com/file/d/1a6XhG4uplXMxuT0Yn8PvJqfx1ZW4hXQr/view?usp=sharing'
    },
    {
      title: 'Workout Tracker',
      image: 'assets/images/workouttracker.png',
      built: 'Mongoose, Mongo, Node, Express, Javascript, Heroku',
      description: 'A workout tracker application using MongoDB to store user input.',
      github: 'https://github.com/britt-bot/Workout_Tracker',
      deployed: 'https://arcane-gorge-00224.herokuapp.com/?id=6127047a7eb5620016ffe601'
    },
  ]

  const renderCards = ({title, image, built, description, github, deployed}) => {
    return (
    <DevelopPortfolioCards 
      title={title} 
      image={image} 
      description={description} 
      built={built}
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