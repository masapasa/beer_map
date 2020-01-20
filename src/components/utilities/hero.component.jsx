import React from 'react';
import { Container, Jumbotron } from 'reactstrap';
import './hero.styles.scss';

const Hero = props => {
    return(
        <Jumbotron fluid className="hero">
            <Container>
                <h1 className="display-3">{props.headline}</h1>
                <p className="lead">{props.content}</p>
            </Container>
        </Jumbotron>
    );
}

export default Hero;