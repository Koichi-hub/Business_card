import React, { Component } from "react";
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" sticky="top" className="mb-4" expand="lg">
                <Container fluid="lg">
                    <Navbar.Brand as={Link} to="/" onClick={() => this.props.onChangeActiveKey("aboutme")}>
                        Timur Davydov
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav activeKey={this.props.activeKey} onSelect={(selectedKey) => this.props.onChangeActiveKey(selectedKey)} className="ms-auto">
                            <Nav.Item>
                                <Nav.Link as={Link} to="/" eventKey="aboutme">
                                    Обо мне
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/projects" eventKey="projects">
                                    Проекты
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="https://github.com/Koichi-hub" target="_blank" rel="noopener noreferrer">Github</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <NavDropdown title="Контакты" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="https://t.me/Koichi_hub" target="_blank" rel="noopener noreferrer">Telegram</NavDropdown.Item>
                                    <NavDropdown.Item href="mailto:gogotimur2020@gmail.com" target="_blank" rel="noopener noreferrer">Gmail</NavDropdown.Item>
                                </NavDropdown>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Header;
