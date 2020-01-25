import React, { Component } from 'react';
import { Container, Row, Card, CardText, CardBody, CardTitle, Col } from 'reactstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { popularUrl } from '../../shared/sharedKeys';
import parse from 'html-react-parser';
import './most-popular.styles.scss';

class MostPopular extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breweries: [],
            sectionHeader: 'Most Popular'
        }
    }

    getPopularBreweries = async () => {
        await axios
            .get( popularUrl )
            .then(res => {
                this.setState({ breweries: res.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    componentDidMount () {
        this.setState({isLoading: false});
        this.getPopularBreweries();
    }

    render() {

        const { sectionHeader, breweries } = this.state;

        const renderPopular = Object.entries(breweries).map(brewery => {
            const breweryListing = brewery[1];
            return(
                <Col md="4" className="mb-5">
                    <Card key={breweryListing.id} className="col mb-4">
                        <CardBody>
                            <CardTitle>
                                <Link to={`/detailed-listing/${breweryListing.id}`}>
                                    <h5>{parse(breweryListing.title.rendered)}</h5>
                                </Link>
                            </CardTitle>
                            <CardText>{parse(breweryListing.content.rendered)}</CardText>
                            <Link to={`/detailed-listing/${breweryListing.id}`} className="btn btn-secondary d-block">
                                See Details
                            </Link>
                        </CardBody>
                    </Card>
                </Col>
            );
        });
        
        return(
            <section className="popular">
                <Container className="py-3 my-5">
                    <Row className="row mb-4 mobile-heading">
                        <h2 className="pb-2 px-0 border-bottom col">{sectionHeader}</h2>
                    </Row>
                    <Row className="row-cols-1 row-cols-md-3">
                        {renderPopular}
                    </Row>
                </Container>
            </section>
        );
    }
}

export default MostPopular;