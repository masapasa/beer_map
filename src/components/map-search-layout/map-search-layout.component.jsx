import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, CardImg, CardTitle, CardText, CardFooter, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './map-search-layout.styles.scss';

class MapSearchLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    filterResult = () => {
        console.log('result');
    }

    render() {
        return(
            <Container className="py-3 my-5">
                <Row className="mb-4 mobile-heading">
                    <Col className="pb-2 px-0 border-bottom">Breweries within 10 miles</Col>
                </Row>
                <Row>
                    <Col sm="4">
                        <Col className="p-4">
                            <aside role="search">
                                <div className="input-group">
                                    <select className="custom-select" id="inputGroupSelect04">
                                        <option>Filter by Style</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                    <div className="input-group-append">
                                        <Button className="btn-outline-secondary" type="button" onClick={this.filterResult}>Button</Button>
                                    </div>
                                </div>
                            </aside>
                        </Col>
                    </Col>
                    <Col md="8">
                        <Row className="card-group">
                            <Col sm="6" className="pb-4">
                                <Card className="col mb-4 h-100">
                                    <CardImg src="/img/placeholder-3.jpg" className="card-img-top" alt="Placeholder" />
                                    <CardBody>
                                        <CardTitle>Destination Name</CardTitle>
                                        <CardText>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                                    </CardBody>
                                    <CardFooter>
                                        <Link to="" className="btn btn-secondary d-block">See Details</Link>
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col sm="6" className="pb-4">
                                <Card className="col mb-4 h-100">
                                    <CardImg src="/img/placeholder-2.jpg" className="card-img-top" alt="Placeholder" />
                                    <CardBody>
                                        <CardTitle>Destination Name</CardTitle>
                                        <CardText>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                                    </CardBody>
                                    <CardFooter>
                                        <Link to="" className="btn btn-secondary d-block">See Details</Link>
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col sm="6" className="pb-4">
                                <Card className="col mb-4 h-100">
                                    <CardImg src="/img/placeholder-1.jpg" className="card-img-top" alt="Placeholder" />
                                    <CardBody>
                                        <CardTitle>Destination Name</CardTitle>
                                        <CardText>This is a longer card with supporting text below as a natural lead-in to additional content.</CardText>
                                    </CardBody>
                                    <CardFooter>
                                        <Link to="" className="btn btn-secondary d-block">See Details</Link>
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col sm="6" className="pb-4">
                                <Card className="col mb-4 h-100">
                                    <CardImg src="/img/placeholder-3.jpg" className="card-img-top" alt="Placeholder" />
                                    <CardBody>
                                        <CardTitle>Destination Name</CardTitle>
                                        <CardBody>This is a longer card with supporting text below as a natural lead-in to additional content.</CardBody>
                                    </CardBody>
                                    <CardFooter>
                                        <Link to="" className="btn btn-secondary d-block">See Details</Link>
                                    </CardFooter>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default MapSearchLayout;