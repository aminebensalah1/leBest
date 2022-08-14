import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
const NavbarC = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">HOME</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Ingredient">Ingredient</Nav.Link>
            <Nav.Link href="/stock">Stock</Nav.Link>
            <Nav.Link href="/sales">Sales</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarC;
