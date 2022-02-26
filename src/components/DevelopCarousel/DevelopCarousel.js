import Carousel from 'react-bootstrap/Carousel';
import './style.css'


export default function DevelopCarousel() {
  return (
    <div id='developCarousel' style={{ display: 'block', width: 700, padding: 30 }}>
      {/* <h4>GRAPHIC DESIGN</h4> */}
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="assets/images/lineup.png"
            alt="LineUP App"
          />
          <Carousel.Caption>
            <h3 className='projectTitle'>LineUP</h3>
            <p>MERN application for users to search and follow festivals around the world.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="assets/images/globalnibz.png"
            alt="Global Nibz App"
          />
          <Carousel.Caption>
            <h3 className='projectTitle'>Global Nibz</h3>
            <p>Web application allowing users to search recipes from around the world.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="assets/images/techblog.png"
            alt="Tech Blog App"
          />
          <Carousel.Caption>
            <h3 className='projectTitle'>Tech Blog</h3>
            <p>CMS-style blog site utilized to create, publish, view, and review posts.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="assets/images/notetaker.png"
            alt="Note Taker"
          />
          <Carousel.Caption>
            <h3 className='projectTitle'>Note Taker</h3>
            <p>OOP note taking application utilized by users to write and save notes.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="assets/images/teamroster.png"
            alt="Team Roster Generator"
          />
          <Carousel.Caption>
            <h3 className='projectTitle'>Team Roster Generator</h3>
            <p>Node.js command-line application, using OOP to generate a team roster.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="assets/images/workouttracker.png"
            alt="Workout Tracker"
          />
          <Carousel.Caption>
            <h3 className='projectTitle'>Workout Tracker</h3>
            <p>A workout tracker application using MongoDB to store user input.</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="image link"
            alt="image alt text"
          />
          <Carousel.Caption>
            <h3 className='projectTitle'>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item> */}
        
      </Carousel>
    </div>
  )
};