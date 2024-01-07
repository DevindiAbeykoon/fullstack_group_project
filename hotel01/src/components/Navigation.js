import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.png';
import profileIcon from '../images/profile.png';


export default function Navigation() {
  const greyBarStyle = {
    backgroundColor: '#ccc', // Grey color
    height: '10px', // Adjust the height of the bar
    width: '100%', // Full width
  };
  return (
    <div>
     <Navbar bg="light" data-bs-theme="light">
        <Container>
        <img
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="Logo"
          />
          <Nav className="me-auto">
            <Nav.Link href="#home"    style ={{marginLeft:'150px',fontSize:'20px',fontWeight: 'bold',fontFamily:"Cormorant"}}>Home</Nav.Link>
            <Nav.Link href="#features"style ={{marginLeft:'150px',fontSize:'20px',fontWeight: 'bold',fontFamily:"Cormorant"}}>Rooms</Nav.Link>
            <Nav.Link href="#pricing" style ={{marginLeft:'150px',fontSize:'20px',fontWeight: 'bold',fontFamily:"Cormorant"}}>ContactUs</Nav.Link>
            <Nav.Link href="#pricing" style ={{marginLeft:'150px',fontSize:'20px',fontWeight: 'bold',fontFamily:"Cormorant"}}>AboutUs</Nav.Link>
            <Nav className="justify-content-end" style={{ width: "100%",marginLeft:'200px',}}>
          <Nav.Link href="#profile" className="ml-auto">
            <img
              src={profileIcon}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="Profile"
            />
          </Nav.Link>
        </Nav>

          </Nav>

        </Container>
      </Navbar>
      <div style={greyBarStyle}></div>
      
    </div>
    
  )
}

