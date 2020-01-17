import React from 'react';
import { Container, Jumbotron, Button } from 'reactstrap';
import './home-hero.styles.scss';

const HomeHero = props => {
    return(
        <Jumbotron fluid className="home-jumbo">
            <Container>
                <h1 className="display-3">{props.headline}</h1>
                <p className="lead">{props.content}</p>
                <p className="lead">
                    <Button color="primary">{props.button}</Button>
                </p>
            </Container>
        </Jumbotron>
    );
}

export default HomeHero;