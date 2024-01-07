import React, { useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import backgroundImg from '../images/loginPic.png'
//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Login() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
  };
  return (
    <div>
      <NavigationBar/>
      <div style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover',backgroundPosition: 'center',height: '89.5vh',width: '100%'}}>
      <Card className='maincard' style={{width: '18rem', position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',padding: '10px',}}>
      <Card.Body className='cardbody'>
        <Row>
        <Col>
        <Card.Title className='cardTitle' style={{fontSize:'30px',textAlign: 'center',}}>
          LOGIN
          </Card.Title>
        <Card.Text>I see you already have an account. Login and see what awaits you..</Card.Text>
        </Col>
        <Col>
          <form onSubmit={handleSubmit}>
            <label>
              Firsst Name:
              <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
            </label>
            <br />
            <label>
              Last Name:
              <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
            </label>
            <br />
            <label>
              Email:
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <br />
            <label>
              Password:
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} minLength="6" required />
            </label>
            <br />
            <button type="submit">Submit</button>
          </form>
        </Col>
        </Row>
      </Card.Body>
    </Card>
        <div style={{ position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '10px', }}>
        </div>
      </div>
    </div>
  )
}
