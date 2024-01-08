import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Navbar, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import logo from '../images/logo.png';

export default function NavigationBar() {
  const BASE_URL = "http://localhost:5000/api"

  const [user, setUser] = useState({})
  const navigate = useNavigate();
  const token = localStorage.getItem('token')

  useEffect(() => {
    if(token) {
      const config = {
        headers: {
          'Content-Type': "application/json",
          "x-auth-token": token
      }
    }
      
    try {
      axios.post(`${BASE_URL}/user/profile`, {}, config)
      .then((res) => {
        if(!res.data.error) setUser(res.data.user)

      }).catch(error => {
        console.log(error)
      }) 
              

      // console.log(res)
            
    } catch(error) {

    }
    }
  }, [token])

  const handleLogOut = () => {
    localStorage.clear()
    navigate("/login")
  }

  const linkStyle = {
     marginRight: "100px",
     display: "inline-block",
     color: "#333",
     textDecoration: 'none'
  }

  return (
    <div className='bg-light pt-3 pb-3'>
        <Container>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Navbar.Brand href="/">
          <img
            src={logo}
            height="50"
            className="d-inline-block align-top"
            alt=""
          />
        </Navbar.Brand>


        <div>
          <Link to="/" style={linkStyle}>HOME</Link>
          <Link to="/rooms" style={linkStyle}>ROOMS</Link>
          <Link to="/about" style={linkStyle}>ABOUT US</Link>  
          <Link to="/contact" style={linkStyle}>CONTACT US</Link>   
          <Link to="/feedback" style={linkStyle}>FEEDBACK</Link> 
          { !token ? '':  <Link to="/profile" style={linkStyle}>PROFILE</Link>}
        </div>

          <div>
            { token ? '':  <Link  to="/login" className="btn btn-primary" style={{ marginRight: "12px", backgroundColor:'#E59366', border:'none'}}>LOGIN</Link>}
            { token ? '':  <Link  to="/register" className="btn btn-outline-primary" style={{borderColor:'#E59366', color:'#E59366'}}>SIGNUP</Link>}


            { !token ? '':  <span style={{ display: 'inline-block', marginRight: '10px' }}>Hi {user.firstName}!</span>}
            { !token ? '':  <button className="btn btn-danger" onClick={handleLogOut}>LOGOUT</button>}

          </div>
          </div>
        </Container>
    </div>
  )
}
