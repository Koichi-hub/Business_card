import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../styles/PageProjects.less";
import axios from "axios";

const Card = (props) => {
    return (
        <div className="project-card">
            <div className="d-flex justify-content-between mb-2">
                <time>{props.card.date}</time>
                <div className="card-stars">
                    <a href={props.card.url}>{props.card.stars} stars</a>
                </div>
            </div>
            <div className="p-card-info">
                <div className="d-flex flex-column">
                    <div className="p-card-title">{props.card.name}</div>
                    <div>{props.card.description}</div>
                </div>
                <div className="d-flex flex-column justify-content-end">
                    <div className="d-flex flex-column">
                        <div className="d-flex justify-content-end">
                            <a href={props.card.url} className="card-btn" target="_blank" rel="noopener noreferrer">github</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

class PageProjects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: [],
        };
    }
    componentDidMount = () => {
        const minHeight = window.innerHeight;
        document.getElementById('root').style.minHeight = minHeight + 'px';

        const url = 'https://api.github.com/users/Koichi-hub/repos';

        const resolve = (resp) => {
            const repos = resp.data;

            const formatDate = (date) => {
                const year = date.getFullYear();
                const month = date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth();
                return {year, month};
            };

            const hideReposNames = [
                'Koichi-hub',
            ];

            const cards = repos.filter(repo => !hideReposNames.includes(repo.name)).map(repo => {
                const {year, month} = formatDate(new Date(repo.created_at));
                const stars = repo.stargazers_count;
                const name = repo.name;
                const url = repo.html_url;
                const description = repo.description ? repo.description : '';
                
                return {
                    date: `${year}.${month}`,
                    stars,
                    name,
                    url,
                    description,
                };
            });

            this.setState({
                cards,
            });
        };

        axios.get(url)
            .then(resolve)
            .catch()
            .finally();
    };
    componentWillUnmount = () => {
        document.getElementById('root').style.minHeight = 0 + 'px';
    };
    render() {
        return (
            <Container className="projects my-4">
                <Row className="g-4">
                    {this.state.cards.map(card => 
                        <Col md={6} lg={4} key={card.name}>
                            <Card card={card}></Card>
                        </Col>
                    )}
                </Row>
            </Container>
        );
    }
}

export default PageProjects;
