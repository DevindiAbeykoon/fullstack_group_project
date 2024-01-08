import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
//import logo from '../images/logo.png';
import hpic from '../images/homepic.png';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/NavigationBar'


export default function Home() {
    const navigate = useNavigate();
  
    const containerStyle = {
        position: 'relative',
        textAlign: 'left',
        maxWidth: '1000px',
        margin: '0 auto',
      };

      const textStyle = {
        position: 'absolute',
        bottom: '10px',
        left: '10px',
        color: 'black',
        padding: '5px',
      };

  return (
    <div>
      <Navbar />
    <div>
        <br></br>
        <br></br>
    <div style={containerStyle}>
      <img
        src={hpic}
        alt=""
        style={{ width: '100%', height: 'auto', display: 'block', backgroundPosition: 'center'}}
      />
      <div style={textStyle}>
        <h2>Welcome to Hotel Topaz</h2>
        <p><b>To feel the comfort of your home,<br></br>Book your stay with us!</b></p>
      </div>
    </div>
    </div>
    </div>
  )
}