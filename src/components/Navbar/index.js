import React from 'react';
import { Nav } from 'react-bootstrap';
import './style.css';

export default function Navbar() {
  return (
    <Nav className="justify-content-center" activeKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#about">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#develop">Develop</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#create">Create</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav.Item>
      {/* <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item> */}
    </Nav>
  )
};