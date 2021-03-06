import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../styles/Footer.less"

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <Container>
                    <Row>
                        <Col md={4}></Col>
                        <Col md={2}>
                            <div className="author-sign">
                                Сделано самим мной
                            </div>
                        </Col>
                        <Col md={2}>
                            <ul className="contacts">
                                <span>Контакты</span>
                                <li>
                                    <a href="https://github.com/Koichi-hub" target="_blank" rel="noopener noreferrer">Github</a>
                                </li>
                                <li>
                                    <a href="https://t.me/Koichi_hub" target="_blank" rel="noopener noreferrer">Telegram</a>
                                </li>
                                <li>
                                    <a href="mailto:gogotimur2020@gmail.com" target="_blank" rel="noopener noreferrer">Gmail</a>
                                </li>
                            </ul>  
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Footer;
