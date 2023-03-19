import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navbarreal = () => {
  return (
    <>
      <Navbar style={{backgroundColor:"#F0F1F2",marginTop:25}} bg="yellow" variant="light">
        <Container>
          {/* <Navbar.Brand style={{color:'000000'}} href="#home">Our App</Navbar.Brand> */}
          <Nav className="me-auto">
            <Nav.Link  href="#home">Home</Nav.Link>
            <Nav.Link  href="#About">About</Nav.Link>
            <Nav.Link  href="#Contact">Contact</Nav.Link>
            <Nav.Link  href="login">Sign in</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbarreal
