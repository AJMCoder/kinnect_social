import React from "react";
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";

const NavBar = () => {
    return (
        <Container>
            <div>
                <Navbar bg="dark" expand='md' fixed="top" variant="dark">
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link><i className="fas fa-home"></i>Home</Nav.Link>
                            <Nav.Link><i className="fas fa-sign-in-alt"></i>Sign In</Nav.Link>
                            <Nav.Link><i className="fas fa-user-plus"></i>Register</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-info">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </Container>
    );
    }

export default NavBar;