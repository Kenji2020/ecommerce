import React from 'react';
import { Nav,Navbar,Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
export const NavBar = () =>{
    return (
        <Navbar className="navbar" expand="lg">
            <Container className= "flex space-between">
                <div>
                    <Navbar.Brand href="#home">React alo -Bootstrap</Navbar.Brand>
                </div>
                <div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="#home" className="navbar-nav">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>

                </div>
            </Container>
        </Navbar>
        )
}