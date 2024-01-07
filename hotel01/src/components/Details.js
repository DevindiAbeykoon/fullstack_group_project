import React from 'react'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import backgroundImage from '../images/form01.jpg'
import Navigation from './Navigation';

export default function Details() {
    const divStyle = {
        marginLeft: '60px',
        marginRight: '60px',
        borderBottom: '2px solid black',
        borderTop: '2px solid black',
        fontFamily:"Cormorant"
       
      };
      const spanStyle = {
        fontSize: '20px',
        fontFamily:"Cormorant", 
      };
      const buttonStyle = {
        marginRight: '20px', // Adjust the right margin to create space between buttons
      };
      
      
  return (
    <div style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition :'center',
      height :'100vh',
      width: '100%',
    }}>
        <Navigation/>
        <br/><br/>
    <div
        style={divStyle}>
      <br/>
      <br/>
      <h2>PRESIDENTIAL SUITE 01</h2>
      <br/>
      <span style={spanStyle}>
            Room Number   : <br/><br/>
            Check-in      : <br/><br/>
            Check-out     : <br/><br/>
            Cleaning Date : <br/><br/>
            Cleaning Time :
       </span><br/><br/><br/>
      <div>
      <div className="mb-2">
      <Button variant="success" size="sm"style={buttonStyle}>
          Cleaned
        </Button>{' '}
        <Button variant="secondary" size="sm"style={buttonStyle}>
          Update
        </Button>{' '}
        <Button variant="danger" size="sm"style={buttonStyle}>
          Delete
        </Button><br/><br/>
      </div>
      </div>
      
    </div>
    </div>
  )
}
