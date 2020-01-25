import React, { Component } from 'react';
import { Container, Row, Card, CardBody, CardTitle, Col } from 'reactstrap';
import Loader from '../../components/utilities/loader.component';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Hero from '../../components/utilities/hero.component';
import './city-listing.styles.scss';
import { cityQuery } from '../../shared/sharedKeys';
import parse from 'html-react-parser';

class CityListing extends Component {

    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
          breweries: [],
          city: this.props.location.state.cityName,
          cityQ: this.props.location.state.cityId,
          isLoading: true
        };
    }

    getCityBreweries = async () => {
        await axios
            .get( cityQuery + this.state.cityQ )
            .then(res => {
                this.setState({ breweries: res.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    renderCityList = apiData => {

        const renderList = Object.entries(apiData);

        if(!renderList.length) {
            return <Loader />;
        }

        return(
            renderList.map(data => ( 
                <Col key={data[1].id} md="4" className="mb-5">
                    <Card>
                        <CardBody>
                            <CardTitle>
                                <Link to={`/detailed-listing/${data[1].id}`}>
                                    <h5>{parse(data[1].title.rendered)}</h5>
                                </Link>
                            </CardTitle>
                            {parse(data[1].content.rendered)}
                            <Link to={`/detailed-listing/${data[1].id}`} className="btn btn-secondary d-block">
                                See Location Details
                            </Link>
                        </CardBody>
                    </Card>
                </Col>
            ))
        );
    }

    componentDidMount () {
        this._isMounted = true;
        this.setState({ isLoading: false });
        this.getCityBreweries();
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {

        const { city, breweries } = this.state;

        return(
            <section className="city-listing">
                <Hero headline={ city } />
                <Container className="mb-5">
                    <Row>
                        {this.renderCityList(breweries)}
                    </Row>
                </Container>
            </section>
        );
    }
}

export default CityListing;