import React, { useState, useEffect, navigate } from 'react';
import axios from 'axios'
//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/NavigationBar';

const BASE_URL = "http://localhost:5000/api"

export default function Login() {
  const navigate = useNavigate();
  
  useEffect(() => {
    const token = localStorage.getItem('token')

    
    if(token) navigate("/")
  }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('')

    const user = {
      email,
      password
    }

    const body = JSON.stringify(user)
    const config = {
      headers: {
        'Content-Type': "application/json"
      }
    }

    try {
      const res = await axios.post(`${BASE_URL}/user/auth`, body, config)
      

      const token = res.data.token

      localStorage.setItem("token", token)
      navigate("/")

    } catch(error) {
      setError(error.response.data.message)
      // console.error(error.response.data.message)
    }
  };
  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: "80vh", marginTop: "25px" }}>
      <Card style={{ padding: "100px 25px" }}>
      <Card.Body>
        <Row>
        <Col style={{marginTop: "25px"}}>
        <Card.Title className='cardTitle' style={{fontSize:'30px'}}>
          LOGIN
          </Card.Title>
        <Card.Text>I see you already have an account. Login and see what awaits you..</Card.Text>
        <p>
            <Link to="/register">SIGNUP</Link>
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
            <p className='label'>Password:</p>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </label>

           

            <br />
            <button style={{ marginTop: "15px", width: "100%" }} className='btn btn-primary btn-block' type="submit">Login</button>
          </form>
        </Col>
        </Row>
      </Card.Body>
    </Card>
        
      </div>
    </div>
  )
}
