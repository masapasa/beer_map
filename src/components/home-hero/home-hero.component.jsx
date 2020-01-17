import React from 'react';
import { Container, Jumbotron } from 'reactstrap';
import CtaButton from '../utilities/cta-button.component';
import './home-hero.styles.scss';

const HomeHero = props => {
    return(
        <Jumbotron fluid className="home-hero">
            <Container>
                <h1 className="display-3">{props.headline}</h1>
                <p className="lead">{props.content}</p>
                <div className="lead">
                    <CtaButton button={props.buttonText} /> 
                </div>
            </Container>
        </Jumbotron>
    );
}

export default HomeHero;