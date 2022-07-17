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
                                    <a href="https://github.com/Koichi-hub">Github</a>
                                </li>
                                <li>
                                    <a href="https://t.me/Koichi_hub">Telegram</a>
                                </li>
                                <li>
                                    <a href="mailto:gogotimur2020@gmail.com">Gmail</a>
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
