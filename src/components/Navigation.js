import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'

const Navigation = () => {
    return (
    <><Navbar className="d-flex justify-content-around fs-2 text"  bg="primary" data-bs-theme="dark">
      <Nav  activeKey="/home" >
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="#product">Product</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/service">Service</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link eventKey="/team">Team</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link eventKey="/Contact">Contact</Nav.Link>
        </Nav.Item>
      </Nav>
      </Navbar>
   
      
    </>
  );
}
export default Navigation;