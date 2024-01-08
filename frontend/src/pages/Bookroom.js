import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Carousel } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import imagen1 from "../images/room1.jpg";
import imagen2 from "../images/room2.jpg";
import imagen3 from "../images/room3.jpg";
import "./bookroom.css";

const Bookroom = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedRoom, setSelectedRoom] = useState("");
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [availableRooms, setAvailableRooms] = useState([]);
  const [roomNumberError, setRoomNumberError] = useState("");
  const [bookingError, setBookingError] = useState("");

  useEffect(() => {
    // Fetch available rooms from the backend
    fetch("http://localhost:3001/api/rooms/available")
      .then((response) => response.json())
      .then((data) => setAvailableRooms(data.availableRooms))
      .catch((error) =>
        console.error("Error fetching available rooms:", error)
      );
  }, []);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleRoomChange = (e) => {
    const roomNumber = e.target.value;
    setRoomNumberError("");

    // Validate if the room number is a valid integer
    if (!Number.isInteger(Number(roomNumber))) {
      setRoomNumberError("Room number should be a integer.");
    }

    setSelectedRoom(roomNumber);
  };

  const handleCheckInDateChange = (date) => {
    setCheckInDate(date);
  };

  const handleCheckOutDateChange = (date) => {
    setCheckOutDate(date);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the room number is in the database
    const roomExists = availableRooms.some(
      (room) => room.number === parseInt(selectedRoom, 10)
    );

    if (!roomExists) {
      setRoomNumberError("Invalid room number.");
      return;
    }

    // Implement backend code to check if the room is already booked
    // You can use fetch or axios to make a request to your backend API
    // Example: fetch('http://localhost:3001/api/bookings/checkAvailability', { method: 'POST', body: yourData });
    try {
      // Assume 'checkAvailability' endpoint in the backend returns availability status
      const response = await fetch(
        "http://localhost:3001/api/bookings/checkAvailability",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            roomNumber: parseInt(selectedRoom, 10),
            checkInDate,
            checkOutDate,
          }),
        }
      );

      const data = await response.json();

      if (!data.available) {
        setBookingError(
          "Room number is already booked for the selected dates."
        );
        return;
      }
    } catch (error) {
      console.error("Error checking room availability:", error);
    }

    // Implement backend code to book the room
    // You can use fetch or axios to make a request to your backend API
    // Example: fetch('http://localhost:3001/api/bookings', { method: 'POST', body: yourData });
    console.log("Booking submitted!");
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col md={6}>
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={imagen1} alt="First room" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={imagen2} alt="Second room" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={imagen3} alt="Third room" />
            </Carousel.Item>
          </Carousel>
        </Col>

        <Col md={6}>
          <h2>Book Your Room</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="category">
              <Form.Label>Room Category</Form.Label>
              <Form.Control
                as="select"
                onChange={handleCategoryChange}
                required
              >
                {/* Options */}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="roomNumber">
              <Form.Label>Room Number</Form.Label>
              <Form.Control
                type="text"
                onChange={handleRoomChange}
                value={selectedRoom}
                isInvalid={!!roomNumberError}
                required
              />
              <Form.Control.Feedback type="invalid">
                {roomNumberError}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="checkInDate">
              <Form.Label>Check-In Date</Form.Label>
              <DatePicker
                selected={checkInDate}
                onChange={handleCheckInDateChange}
                dateFormat="MMMM d, yyyy"
                className="form-control"
                required
              />
            </Form.Group>

            <Form.Group controlId="checkOutDate">
              <Form.Label>Check-Out Date</Form.Label>
              <DatePicker
                selected={checkOutDate}
                onChange={handleCheckOutDateChange}
                dateFormat="MMMM d, yyyy"
                className="form-control"
                required
              />
            </Form.Group>

            <Button variant="outline-dark" type="submit">
              Book Now
            </Button>

            {bookingError && <p className="error">{bookingError}</p>}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Bookroom;
