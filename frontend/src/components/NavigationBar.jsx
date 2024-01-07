import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.png'


export default function NavigationBar() {
  return (
    <div>
        <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">
            <img className='logo' src={logo} height='50px'/>
          </Navbar.Brand>
          {/* <Nav className="me-auto" style={{ marginLeft: 'auto' }}>
            <Button variant="success">LOGIN</Button>
          </Nav> */}
        </Container>
      </Navbar>
    </div>
  )
}
