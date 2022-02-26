import Carousel from 'react-bootstrap/Carousel';
import './style.css'


export default function CreateCarousel() {
  return (
    <div id='createCarousel' style={{ display: 'block', width: 500, padding: 30 }}>
      {/* <h4>GRAPHIC DESIGN</h4> */}
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="assets/images/goodbikesstickers.png"
            alt="Good Bikes Stickers"
          />
          <Carousel.Caption>
            <h3 className='projectTitle'>Good Bikes Stickers</h3>
            <p>Stickers created for fictional brand "Good Bikes"</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="assets/images/goodbikeslogos.png"
            alt="Good Bikes Logos"
          />
          <Carousel.Caption>
            <h3 className='projectTitle'>Good Bikes Logos</h3>
            <p>Logos created for fictional brand "Good Bikes"</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="assets/images/lineuplogo.png"
            alt="LineUP Logo"
          />
          <Carousel.Caption>
            <h3 className='projectTitle'>LineUP Logo</h3>
            <p>Logo for LineUP</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="assets/images/lineupcollage.png"
            alt="LineUP Website Banner"
          />
          <Carousel.Caption>
            <h3 className='projectTitle'>LineUP Website Banner</h3>
            <p>Website banner created for app "LineUP"</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="assets/images/invitation.png"
            alt="Event Invitation"
          />
          <Carousel.Caption>
            <h3 className='projectTitle'>Event Invitation</h3>
            <p>Event Invitation</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="assets/images/poster.png"
            alt="Discover Kailua-Kona, Hawaii Poster"
          />
          <Carousel.Caption>
            <h3 className='projectTitle'>Poster</h3>
            <p>Discover Kailua-Kona, Hawaii Poster</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="assets/images/dinocollage.jpg"
            alt="Dino Collage Poster"
          />
          <Carousel.Caption>
            <h3 className='projectTitle'>Dino Collage Poster</h3>
            <p>Dino Collage Poster</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="assets/images/mockup.jpg"
            alt="Laptop Website Mockup"
          />
          <Carousel.Caption>
            <h3 className='projectTitle'>Laptop Website Mockup</h3>
            <p>Laptop Website Mockup</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="assets/images/brittCIR.png"
            alt="Vector Sticker of Britt Bot"
          />
          <Carousel.Caption>
            <h3 className='projectTitle'>Vector Sticker</h3>
            <p>Vector Sticker of Britt Bot</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="assets/images/ht4lt.png"
            alt="HT4LT Rainbow Jean Jacket Logo"
          />
          <Carousel.Caption>
            <h3 className='projectTitle'>High Times 4 Low Times Logo</h3>
            <p>Logo for podcast "High Times 4 Low Times"</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="assets/images/caladium.png"
            alt="Caladium Care Sheet"
          />
          <Carousel.Caption>
            <h3 className='projectTitle'>Caladium Care Sheet</h3>
            <p>Caladium Care Sheet for Abbott-Ipco, Inc.</p>
          </Carousel.Caption>
        </Carousel.Item>

        
        {/* <Carousel.Item interval={2000}>
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