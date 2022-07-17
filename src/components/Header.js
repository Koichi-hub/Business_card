import React, { Component } from "react";
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" sticky="top" className="mb-4" expand="lg">
                <Container fluid="lg">
                        <Navbar.Brand as={Link} to="/Business_card">
                            Timur Davydov
                        </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav defaultActiveKey="aboutme" className="ms-auto">
                            <Nav.Link as={Link} to="/Business_card" eventKey="aboutme">
                                Обо мне
                            </Nav.Link>
                            <Nav.Link as={Link} to="/Business_card/projects" eventKey="projects">
                                Проекты
                            </Nav.Link>
                            <Nav.Link href="https://github.com/Koichi-hub">Github</Nav.Link>
                            <NavDropdown title="Контакты" id="basic-nav-dropdown">
                                <NavDropdown.Item href="https://t.me/Koichi_hub">Telegram</NavDropdown.Item>
                                <NavDropdown.Item href="mailto:gogotimur2020@gmail.com">Gmail</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Header;
