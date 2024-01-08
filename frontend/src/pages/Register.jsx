import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
//import Button from 'react-bootstrap/Button';
import './register.css'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/NavigationBar'


const BASE_URL = "http://localhost:5000/api"

export default function Login() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token')
        
        if(token) navigate("/");
      }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secondPassword, setSecondPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastname] = useState('')
  

  const [error, setError] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('')

    if(password !== secondPassword) {
        setError("Password does not match")
    } else {
        const user = {
            email,
            password,
            firstName,
            lastName
          }
      
          const body = JSON.stringify(user)
          const config = {
            headers: {
              'Content-Type': "application/json"
            }
          }
      
          try {
            const res = await axios.post(`${BASE_URL}/user`, body, config)
            navigate("/login");

            
          } catch(error) {
            setError(error.response.data.message)
            // console.error(error.response.data.message)
          }
    }
   

    
  };
  return (
    <div>
      <Navbar />

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: "80vh", marginTop: "25px" }}>
      <Card style={{ padding: "0 25px" }}>
      <Card.Body>
        <Row>
        <Col style={{marginTop: "155px"}}>
        <Card.Title className='cardTitle' style={{fontSize:'30px'}}>
          SIGNUP
          </Card.Title>
        <Card.Text>I see you already have an account. Login and see what awaits you..</Card.Text>
        <p>
            <Link to="/login">Login</Link>
        </p>
        </Col>
        <Col>
          <form onSubmit={handleSubmit} style={{ margin: 'auto'}}>
            <label>
              { error ? <div className="alert alert-danger" role="alert" style={{ marginTop: "15px" }}>
                {error}
              </div> : "" }
            

              <p className='label'>Email:</p>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <br />

            <label>
            <p className='label'>Firstname:</p>
              <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
            </label>

            <label>
            <p className='label'>Lastname:</p>
              <input type="text" value={lastName} onChange={(e) => setLastname(e.target.value)} required />
            </label>

            <label>
            <p className='label'>Password:</p>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </label>

            <label>
            <p className='label'>Renter password:</p>
              <input type="password" value={secondPassword} onChange={(e) => setSecondPassword(e.target.value)} required />
            </label>

            <br />
            <button style={{ marginTop: "15px", width: "100%" }} className='btn btn-primary btn-block' type="submit">Singup</button>
          </form>
        </Col>
        </Row>
      </Card.Body>
    </Card>
        
      </div>
    </div>
  )
}
