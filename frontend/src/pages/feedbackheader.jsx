import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.png';

function StickyHeader() {
  return (
    <>
      <Navbar bg="light" sticky="top">
        <Container>
          <Navbar.Brand href="#home">
            <img className='headerLogo' src={logo} height='50px'/>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default StickyHeader;