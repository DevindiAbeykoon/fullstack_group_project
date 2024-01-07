import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navigation from './Navigation';



export default function Login() {
    
    
  return (
    <div>
        <Navigation/>
    
    <section className="hero">
        <br/>
        <br/>
        <div className="content">
            <h1>STAFF LOGIN</h1>
            <Form>

            <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" />
          </Form.Group>

     

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        LOGIN
      </Button>
    </Form>

        </div>

    </section>
    </div>
  )
}
