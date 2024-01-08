import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Modal,
  Button,
  Carousel,
  Container,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "../images/deluxe room.jpg";
import image2 from "../images/family suites.jpg";
import image3 from "../images/presidential suites.jpg";
import imaged1 from "../images/presidential suites 1.jpg";
import imaged2 from "../images/presidential suites 2.jpg";
import imaged3 from "../images/presidential suites 3.jpg";
import imaged4 from "../images/presidential suites 4.jpg";
import imaged5 from "../images/presidential suites 5.jpg";
import imagep1 from "../images/deluxe room 1.jpg";
import imagep2 from "../images/deluxe room 2.jpg";
import imagep3 from "../images/deluxe room 3.jpg";
import imagep4 from "../images/deluxe room 4.jpg";
import imagep5 from "../images/deluxe room 5.jpg";
import imagef1 from "../images/family suites 1.jpg";
import imagef2 from "../images/family suites 2.jpg";
import imagef3 from "../images/family suites 3.jpg";
import imagef4 from "../images/family suites 4.jpg";
import imagef5 from "../images/family suites 5.jpg";
import "./roompage.css";

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

  const [roomData, setRoomData] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get("/api/rooms"); // Assuming you have an API endpoint to fetch room data
        setRoomData(response.data);
      } catch (error) {
        console.error("Error fetching room data:", error);
      }
    };

    fetchRooms();
  }, []);

  return (
    <div>
      <div className="centered-container">
        <h1>Check Your Rooms</h1>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card">
                <img src={image3} className="card-img-top" alt="room1" />
                <div className="card-body">
                  <h5 className="card-title">Presidential Suites</h5>
                  <p className="card-text">
                    {" "}
                    Enjoy the epitome of luxury in our Presidential Suites.
                    These spacious and elegantly designed suites feature a
                    king-sized bed, a separate living area, and a private
                    balcony with breathtaking views. Perfect for those seeking a
                    lavish experience.
                  </p>
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
                  <p className="card-text">
                    {" "}
                    Experience comfort and style in our Deluxe Rooms. These
                    well-appointed rooms are equipped with a queen-sized bed and
                    modern amenities. Ideal for both business and leisure
                    travelers looking for a cozy retreat.
                  </p>
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
                  <p className="card-text">
                    {" "}
                    Create lasting memories with your family in our spacious
                    Family Suites. These suites feature separate bedrooms for
                    adults and children, ensuring a comfortable and enjoyable
                    stay for the whole family.
                  </p>
                  <Button variant="outline-dark" onClick={handleShowModal3}>
                    More details
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Container className="mt-5">
        <Row>
          {roomData.map((room) => (
            <Col key={room._id} md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={room.image} />
                <Card.Body>
                  <Card.Title>{room.id}</Card.Title>
                  <Card.Title>{room.title}</Card.Title>
                  <Card.Text>{room.description}</Card.Text>
                  <Card.Text>{`Price: $${room.price}`}</Card.Text>
                  <Card.Text>{`Size: ${room.size}`}</Card.Text>
                  <Card.Text>{`Occupancy: ${room.occupancy}`}</Card.Text>
                  <Card.Text>{`Amenities: ${room.amenities}`}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

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
          </Carousel>

          <ul class="list-group">
            <li class="list-group-item">Price: $294</li>
            <li class="list-group-item">Size: 1200 sq. ft.</li>
            <li class="list-group-item">Occupancy: Up to 4 guests</li>
            <li class="list-group-item">
              Amenities: Free Wi-Fi, Mini Bar, 24/7 Room Service
            </li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark" onClick={handleCloseModal1}>
            Close
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
          </Carousel>

          <ul class="list-group">
            <li class="list-group-item">Price: $189</li>
            <li class="list-group-item">Size: 400 sq. ft.</li>
            <li class="list-group-item">Occupancy: Up to 2 guests</li>
            <li class="list-group-item">
              Amenities: Flat-screen TV, Coffee Maker, Work Desk
            </li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark" onClick={handleCloseModal2}>
            Close
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
          </Carousel>

          <ul class="list-group">
            <li class="list-group-item">Price: $200</li>
            <li class="list-group-item">Size: 800 sq. ft.</li>
            <li class="list-group-item">Occupancy: Up to 6 guests</li>
            <li class="list-group-item">
              Amenities: Connecting Rooms, Kid-Friendly Amenities
            </li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark" onClick={handleCloseModal3}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Roompage;
