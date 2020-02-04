import React from 'react';
import { Jumbotron } from 'reactstrap';
import './city-header.styles.scss';

const CityHeader = props => {
    return(
        <Jumbotron fluid className="city-hero"></Jumbotron>
    );
}

export default CityHeader;