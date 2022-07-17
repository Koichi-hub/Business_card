import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/PageAboutMe.less"

const Content = (props) => {
    return (
        <div className="content">
            <Container>
                {props.children}
            </Container>
        </div>
    );
};

const Title = (props) => {
    return (
        <div className="title">
            <h1>{props.value}</h1>
        </div>
    );
};

class PageAboutMe extends Component {
    render() {
        return (
            <Container fluid>
                <section>
                    <Title value="Кто я?" />
                    <Content>
                        <Row>
                            <Col md={6}>
                                <div className="photo">
                                    <img className="img-fluid" src={require("../images/naruto.jpg")} alt="" />
                                    <span>Fullstack Developer</span>
                                </div>
                            </Col>
                            <Col md={6} lg={4}>
                                <div className="description">
                                    <h1 className="mb-4">Timur Davydov</h1>
                                    <p>
                                        Привет мир! Мне 20 лет. Родом из Перми. 
                                        Занимаюсь программированием вот уже 2 года.
                                    </p>
                                    <hr />
                                    <p>
                                        За это время я успел написать ботов, сайты, игры и компилятор. 
                                        А также прорешать множество задач на алгоритмы и структуры данных.
                                        Прочесть 3 книги по программированию и пройти курсы по своему стеку.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Content>
                </section>
                <section>
                    <Title value="Что я знаю?" />
                    <Content>
                        <Row>
                            <Col>
                                <ul className="stack">
                                    <li className="stack-item">
                                        <span className="category-title">Web</span>
                                        <ul className="category">
                                            <li>
                                                <span>HTML</span> 
                                            </li>
                                            <li>
                                                <span>CSS</span> 
                                            </li>
                                            <li>
                                                <span>Bootstrap</span> 
                                            </li>
                                            <li>
                                                <span>LESS</span>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="stack-item">
                                        <span className="category-title">JavaScript</span>
                                        <ul className="category">
                                            <li>
                                                <span>ECMAScript 6</span> 
                                            </li>
                                            <li>
                                                <span>React</span>
                                            </li>
                                            <li>
                                                <span>NodeJS</span>
                                            </li>
                                            <li>
                                                <span>Webpack</span>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="stack-item">
                                        <span className="category-title">Python</span>
                                        <ul className="category">
                                            <li>
                                                <span>Python 3.10</span> 
                                            </li>
                                            <li>
                                                <span>Django</span> 
                                            </li>
                                            <li>
                                                <span>Pipenv</span> 
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="stack-item">
                                        <span className="category-title">Базы данных</span>
                                        <ul className="category">
                                            <li>
                                                <span>PostgreSQL</span> 
                                            </li>
                                            <li>
                                                <span>MongoDB</span> 
                                            </li>
                                            <li>
                                                <span>Firebase</span> 
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="stack-item">
                                        <span className="category-title">Инфраструктура</span>
                                        <ul className="category">
                                            <li>
                                                <span>Docker</span> 
                                            </li>
                                            <li>
                                                <span>GNU/Linux</span> 
                                            </li>
                                            <li>
                                                <span>Nginx</span> 
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="stack-item">
                                        <span className="category-title">Концепции</span>
                                        <ul className="category">
                                            <li>
                                                <span>MVC</span> 
                                            </li>
                                            <li>
                                                <span>REST API</span> 
                                            </li>
                                            <li>
                                                <span>ООП</span> 
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Content>
                </section>
                <section>
                    <Title value="Что я умею?" />
                    <Content>
                        <div className="skills">
                            <span className="l-vert"></span>
                            Знания есть, а могу ли я их применять? <br />
                            Пусть за меня ответят мои проекты (<u>над которыми я буду работать пока не найду работу</u>).
                        </div>
                        <div className="d-flex justify-content-end mt-2">
                            <Link to="/Business_card/projects" className="btn-v1">К проектам</Link>
                        </div>
                    </Content>
                </section>
                <section>
                    <Title value="Сотрудничество?" />
                    <Content>
                        <Row>
                            <Col md={6} lg={4}>
                                <div className="coop-option">
                                    <img className="img-fluid" src={require("../images/handshake.jpg")} alt="" />
                                    <span>Стартап</span>
                                </div>
                            </Col>
                            <Col md={6} lg={4}>
                                <div className="coop-option">
                                    <img className="img-fluid" src={require("../images/job_handshake.jpg")} alt="" />
                                    <span>Работа или стажировка</span>
                                </div>
                            </Col>
                            <Col md={6} lg={4}>
                                <div className="coop-option">
                                    <img className="img-fluid" src={require("../images/friendship_handshake.jpg")} alt="" />
                                    <span>Дружба</span>
                                </div>
                            </Col>
                        </Row>
                        <div class="coop-text">
                            <span>
                                Зовите, предлагайте, пишите. <br /> 
                                Открыт всему миру. <br /> 
                                Будет приятно поработать вместе.
                            </span>
                        </div>
                    </Content>
                </section>
            </Container>
        );
    }
}

export default PageAboutMe;
