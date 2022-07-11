import React, {useEffect, useState} from 'react';
import { Nav,Navbar,Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
export const NavBar = () =>{

    const [sesion, setSesion] = useState(true)
    const verifyIfLogged = () =>{
        if(sesion){
            return <NavDropdown title="Usuario" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Perfil</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Cerrar Sesion</NavDropdown.Item>
            </NavDropdown>
        }else{
            return <NavDropdown title="Usuario" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Iniciar Sesion</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Registrarse</NavDropdown.Item>
            </NavDropdown>
        }
    }
    useEffect(() => {
        verifyIfLogged()
    },[])
    return (
        <Navbar className="navbar" expand="lg">
            <Container className= "flex space-between">
                <div>
                    <Navbar.Brand href="#home">Home</Navbar.Brand>
                </div>
                <div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="#home" className="navbar-nav">Productos</Nav.Link>
                        <Nav.Link href="#link">Compras</Nav.Link>
                        <NavDropdown title="Opciones" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1" onClick={verifyIfLogged}>{sesion ?" Cerrar sesión" :"Iniciar Sesión "}</NavDropdown.Item>
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
