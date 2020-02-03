import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './map-search.styles.scss';
import MapSearchLayout from '../map-search-layout/map-search-layout.component';

const MapSearch = () => {
    return(
        <section className='map-search'>
            <Container>
                <Row>
                    <Col>
                        <MapSearchLayout />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default MapSearch;