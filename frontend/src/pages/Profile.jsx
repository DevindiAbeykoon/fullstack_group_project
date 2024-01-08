import React, { useState, useEffect } from 'react';
import axios from 'axios'
//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/NavigationBar'
import { Container } from 'react-bootstrap';

const BASE_URL = "http://localhost:5000/api"

export default function Login() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token')

  const [email, setEmail] = useState('');
  const [firstName, setFirstname] = useState('')
  const [lastName, setLastname] = useState('')
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    
    if(!token) navigate("/")
    else {
    const config = {
        headers: {
            'Content-Type': "application/json",
            "x-auth-token": token
        }
    }
          
    try {
        axios.post(`${BASE_URL}/user/profile`, {}, config)
        .then((res) => {
        if(!res.data.error) {
            const user = res.data.user

            setEmail(user.email)
            setFirstname(user.firstName)
            setLastname(user.lastName)
        }
          }).catch(error => {
            console.log(error)
          }) 
                  
    
          // console.log(res)
                
        } catch(error) {
    
        }
    }
  }, [token]);


  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('')
    setMessage('')

    const user = {
      firstName,
      lastName
    }

    const body = JSON.stringify(user)
    const config = {
      headers: {
        'Content-Type': "application/json",
        "x-auth-token": token
      }
    }

    try {
      const res = await axios.put(`${BASE_URL}/user`, body, config)
      if(!res.data.error) {
        setMessage("Updated successfully")
      } else {
        setError("Something went wrong")
      }

    } catch(error) {
      setError(error.response.data.message)
    }
  };




  const handleDelete = () => {
    if(window.confirm("Are you sure?")) {
    const config = {
        headers: {
            'Content-Type': "application/json",
            "x-auth-token": token
        }
    }
          
    try {
        axios.delete(`${BASE_URL}/user`, config)
        .then((res) => {
        if(!res.data.error) {
            localStorage.clear()
            navigate("/login")
        }
          }).catch(error => {
            console.log(error)
          }) 
                  
    
          // console.log(res)
                
        } catch(error) {
    
        }
    }
  }
  return (
    <div>
      <Navbar />
      <div>
      <Card style={{ padding: "100px 25px" }}>
      <Container>
        <Row>
        <Col style={{marginTop: "25px", textAlign: 'center'}}>
        <Card.Title className='cardTitle' style={{fontSize:'30px' }}>
          PROFILE
        </Card.Title>
        
        <button className='btn btn-danger' onClick={handleDelete}>DELET ACCOUNT</button>
        </Col>
        <Col>
          <form onSubmit={handleSubmit} style={{ margin: 'auto'}}>
            <label>
              { error ? <div className="alert alert-danger" role="alert" style={{ marginTop: "15px" }}>
                {error}
              </div> : "" }


              { message ? <div className="alert alert-success" role="alert" style={{ marginTop: "15px" }}>
                {message}
              </div> : "" }

            <p className='label'>Email:</p>
            <h5 style={{ marginBottom: 0 }}>{email}</h5>
            </label>
            <br />


            <label>
            <p className='label'>Firstname:</p>
            <input type="text" value={firstName} onChange={(e) => setFirstname(e.target.value)} required />
            </label>

            <label>
            <p className='label'>Lastname:</p>
            <input type="text" value={lastName} onChange={(e) => setLastname(e.target.value)} required />
            </label>

            <br />
            <button style={{ marginTop: "15px", width: "100%" }} className='btn btn-primary btn-block' type="submit">Update</button>
          </form>
        </Col>
        </Row>
      </Container>
    </Card>
        
      </div>
    </div>
  )
}
