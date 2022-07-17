import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../styles/PageProjects.less";

const Card = (props) => {
    return (
        <div className="project-card">
            <div className="d-flex justify-content-between mb-2">
                <time>2022</time>
                <div className="card-stars">
                    <a href={"https://github.com/Koichi-hub"}>0 stars</a>
                </div>
            </div>
            <div className="p-card-info">
                <div className="d-flex flex-column">
                    <div className="p-card-title">{props.title}</div>
                    <ul>
                        {props.children}
                    </ul>
                </div>
                <div className="d-flex flex-column justify-content-end">
                    <div className="d-flex flex-column">
                        <div className="d-flex justify-content-end">
                            <a href={props.github} className="card-btn">github</a>
                        </div>
                        <div className="d-flex justify-content-end">
                            <a href={props.show} className="card-btn">демонстрация</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

class PageProjects extends Component {
    componentDidMount = () => {
        const minHeight = window.innerHeight;
        document.getElementById('root').style.minHeight = minHeight + 'px';
    };
    componentWillUnmount = () => {
        document.getElementById('root').style.minHeight = 0 + 'px';
    };
    render() {
        return (
            <Container className="projects my-4">
                <Row className="g-4">
                    <Col md={6} lg={4}>
                        <Card title="Визитка" github={''} show={''}>
                            <li>React</li>
                            <li>Bootstrap</li>
                            <li>LESS</li>
                        </Card>
                    </Col>
                    <Col md={6} lg={4}>
                        <Card title="Bekon" github={'https://github.com/Koichi-hub/Bekon'} show={''}>
                            <li>Django</li>
                            <li>Gunicorn</li>
                            <li>Nginx</li>
                            <li>PostgreSQL</li>
                            <li>Docker</li>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default PageProjects;
