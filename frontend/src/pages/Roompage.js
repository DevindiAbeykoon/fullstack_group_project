import React, { useState } from 'react';
import { Modal, Button, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../imgs/deluxe room.jpg';
import image2 from '../imgs/family suites.jpg';
import image3 from '../imgs/presidential suites.jpg';
import imaged1 from '../imgs/presidential suites 1.jpg'
import imaged2 from '../imgs/presidential suites 2.jpg';
import imaged3 from '../imgs/presidential suites 3.jpg';
import imaged4 from '../imgs/presidential suites 4.jpg';
import imaged5 from '../imgs/presidential suites 5.jpg';
import imaged6 from '../imgs/presidential suites 6.jpg';
import imagep1 from '../imgs/deluxe room 1.jpg';
import imagep2 from '../imgs/deluxe room 2.jpg';
import imagep3 from '../imgs/deluxe room 3.jpg';
import imagep4 from '../imgs/deluxe room 4.jpg';
import imagep5 from '../imgs/deluxe room 5.jpg';
import imagep6 from '../imgs/deluxe room 6.jpg';
import imagef1 from '../imgs/family suites 1.jpg';
import imagef2 from '../imgs/family suites 2.jpg';
import imagef3 from '../imgs/family suites 3.jpg';
import imagef4 from '../imgs/family suites 4.jpg';
import imagef5 from '../imgs/family suites 5.jpg';
import imagef6 from '../imgs/family suites 6.jpg';



import './roompage.css';

function Roompage() {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  

  const handleCloseModal1 = () => setShowModal1(false);
  const handleShowModal1 = () => setShowModal1(true);
  
   
  const handleCloseModal2 = () => setShowModal2(false);
  const handleShowModal2 = () => setShowModal2(true);
  
    
  const handleCloseModal3 = () => setShowModal3(false);
  const handleShowModal3 = () => setShowModal3(true);
 
   
  return (
    <div>
      <div className='centered-container'>
        <h1>Check Your Rooms</h1>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card">
                <img src={image3} className="card-img-top" alt="room1" />
                <div className="card-body">
                  <h5 className="card-title">Presidential Suites</h5>
                  <p className="card-text"> Enjoy the epitome of luxury in our Presidential Suites. These spacious and elegantly designed suites feature a king-sized bed, a separate living area, and a private balcony with breathtaking views. Perfect for those seeking a lavish experience.</p>
                  <Button variant="outline-dark" onClick={handleShowModal1}>
                    More details
                  </Button>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src={image} className="card-img-top" alt="room2" />
                <div className="card-body">
                  <h5 className="card-title">Deluxe Room</h5>
                  <p className="card-text"> Experience comfort and style in our Deluxe Rooms. These well-appointed rooms are equipped with a queen-sized bed and modern amenities. Ideal for both business and leisure travelers looking for a cozy retreat.</p>
                  <Button variant="outline-dark" onClick={handleShowModal2}>
                    More details
                  </Button>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src={image2} className="card-img-top" alt="room3" />
                <div className="card-body">
                  <h5 className="card-title">Family Suites</h5>
                  <p className="card-text"> Create lasting memories with your family in our spacious Family Suites. These suites feature separate bedrooms for adults and children, ensuring a comfortable and enjoyable stay for the whole family.</p>
                  <Button variant="outline-dark" onClick={handleShowModal3}>
                    More details
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <Modal show={showModal1} onHide={handleCloseModal1} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Presidential Suites Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={imaged1} alt="slide1" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={imaged2} alt="slide2" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={imaged3} alt="slide3" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={imaged4} alt="slide4" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={imaged5} alt="slide5" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={imaged6} alt="slide6" />
            </Carousel.Item>
          </Carousel>

          <ul class="list-group">
              <li class="list-group-item">Price: $294</li>
              <li class="list-group-item">Size: 1200 sq. ft.</li>
              <li class="list-group-item">Occupancy: Up to 4 guests</li>
              <li class="list-group-item">Amenities: Free Wi-Fi, Mini Bar, 24/7 Room Service</li>
            </ul>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="outline-dark" onClick={handleCloseModal1}>
            Check
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showModal2} onHide={handleCloseModal2} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Deluxe Room Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={imagep1} alt="slide1" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={imagep2} alt="slide2" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={imagep3} alt="slide3" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={imagep4} alt="slide4" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={imagep5} alt="slide5" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={imagep6} alt="slide6" />
            </Carousel.Item>
          </Carousel>

            <ul class="list-group">
              <li class="list-group-item">Price: $189</li>
              <li class="list-group-item">Size: 400 sq. ft.</li>
              <li class="list-group-item">Occupancy: Up to 2 guests</li>
              <li class="list-group-item">Amenities: Flat-screen TV, Coffee Maker, Work Desk</li>
            </ul>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="outline-dark" onClick={handleCloseModal1}>
            Check
          </Button>

        </Modal.Footer>
      </Modal>

      <Modal show={showModal3} onHide={handleCloseModal3} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Family Suites Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={imagef1} alt="slide1" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={imagef2} alt="slide2" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={imagef3} alt="slide3" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={imagef4} alt="slide4" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={imagef5} alt="slide5" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={imagef6} alt="slide6" />
            </Carousel.Item>
          </Carousel>

          <ul class="list-group">
              <li class="list-group-item">Price: $200</li>
              <li class="list-group-item">Size: 800 sq. ft.</li>
              <li class="list-group-item">Occupancy: Up to 6 guests</li>
              <li class="list-group-item">Amenities: Connecting Rooms, Kid-Friendly Amenities</li>
            </ul>

        </Modal.Body>
        <Modal.Footer>
        <Button variant="outline-dark" onClick={handleCloseModal1}>
            Check
          </Button>

        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Roompage;
