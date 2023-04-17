import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Bar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">FAbout</Nav.Link>
            <Nav.Link href="/contact">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>      
    </>
  );
}

export default Bar;