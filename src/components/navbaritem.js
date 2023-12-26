import React from 'react';
import './navbaritem.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { Container, Row } from 'react-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';
import ShoppingCartIcon  from './ShoppingCartIcon '; 

const Navone = () => {
    const handleCartClick = () => {
    console.log('Cart clicked');
  };
  return (
    <Container fluid style={{ marginTop: '-15rem' }}>
      <Row style={{ marginLeft: '-2rem' }}>
        <Navbar bg="light" expand="lg" className='navtext'>
          <Container fluid>
            <div className='start'>
              <Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-50">
                <Nav.Link href="#home" style={{ color: 'black' }}>Home</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">Shop</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">All products</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Popular Items</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">New Arrivals</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>

          {/* Adding ShoppingCartIcon component with text */}
          <Nav.Link href="#cart" className="cartone">
            <ShoppingCartIcon itemCount={3} onCartClick={handleCartClick} />
          </Nav.Link>
        </Navbar>
      </Row>
    </Container>
  );
};

export default Navone;
