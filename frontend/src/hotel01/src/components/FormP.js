import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Navigation from './Navigation';


export default function FormP() {
   
    const smallerCol = {
        maxWidth: '200px', // Adjust the maximum width as per your requirement
      };
      const divStyle = {
        marginLeft: '70px',
        fontFamily:"Cormorant"// Adjust the left margin as needed
      };
    
    return (
        <div>
            <Navigation/>
            
    <br />
    <div style={divStyle}>
        
        
    <h1>PRESIDENTIAL SUITE</h1>
    <br />
    <Row>
      <Form.Label column lg={2}>
        Room Number  :
      </Form.Label>
      <br/>
      <Col style={smallerCol}>
        <Form.Control type="text" placeholder="Enter Room Number" />
      </Col>
    </Row>
    <br/>
    <br/>
    <Row>
      <Form.Label column lg={2}>
        Cleaning Date  :
      </Form.Label>
      <br/>
      <Col style={smallerCol}>
        <Form.Control type="text" placeholder={"Date "} />
      </Col>
      <Form.Label column lg={2}>
        Cleaning Time  :
      </Form.Label>
      <br/>
      <Col style={smallerCol}>
        <Form.Control type="text" placeholder={"Time "} />
      </Col>
    </Row>
    <br/>
    <br/>
    
    <h2>Room Information</h2>
    <br />
    <Row>
      <Form.Label column lg={2}>
        First Name :
      </Form.Label>
      <br/>
      <Col style={smallerCol}>
        <Form.Control type="text" />
      </Col>
      <Form.Label column lg={2}>
        Last Name :
      </Form.Label>
      <br/>
      <Col style={smallerCol}>
        <Form.Control type="text" />
      </Col>
    </Row>
    <br />
    <br/>
    <Row>
      <Form.Label column lg={2}>
        Check In Date :
      </Form.Label>
      <br/>
      <Col style={smallerCol}>
        <Form.Control type="text" />
      </Col>
      <br/>
      <Form.Label column lg={2}>
        Check Out Date :
      </Form.Label>
      <br/>
      <Col style={smallerCol}>
        <Form.Control type="text" />
      </Col>
    </Row>
    <br />
    <br/>
    <Button variant="success" type="submit">
        CLEAN
      </Button>
  </div>
  </div>
  

  
  )
}
