import React, { Component } from 'react';
import { Container, Row, Card, CardBody, CardTitle, Col } from 'reactstrap';
import Loader from '../utilities/loader.component';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { featureUrl } from '../../shared/sharedKeys';
import parse from 'html-react-parser';
import './featured.styles.scss';

class Featured extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breweries: [],
            sectionHeader: 'Featured Breweries'
        }
    }

    getFeaturedBreweries = async () => {
        await axios
            .get( featureUrl )
            .then(res => {
                this.setState({ breweries: res.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    renderFeatures = apiData => {

        const renderList = Object.entries(apiData);

        if(!renderList.length > 0) {
            return <Loader />;
        }

        return(
            renderList.map(data => (
                <Col key={data[1].id}  md="4" className="mb-5">
                    <Card className="col mb-4">
                        <CardBody>
                            <CardTitle>
                                <Link to={`/detailed-listing/${data[1].id}`}>
                                    <h5>{parse(data[1].title.rendered)}</h5>
                                </Link>
                            </CardTitle>
                            {parse(data[1].content.rendered)}
                            <Link to={`/detailed-listing/${data[1].id}`} className="btn btn-secondary d-block">
                                See Details
                            </Link>
                        </CardBody>
                    </Card>
                </Col>
            )
        ))

    }

    componentDidMount () {
        this.setState({isLoading: false});
        this.getFeaturedBreweries();
    }

    render() {

        const { sectionHeader, breweries } = this.state;

        return(
            <section className="featured">
                <Container className="py-3 my-5">
                    <Row className="mb-4">
                        <h2 className="pb-2 px-0 border-bottom col">{sectionHeader}</h2>
                    </Row>
                    <Row>
                        {this.renderFeatures(breweries)}
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Featured;