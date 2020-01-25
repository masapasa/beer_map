import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle, Col } from 'reactstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Hero from '../../components/utilities/hero.component';
import './city-listing.styles.scss';
import { cityQuery } from '../../shared/sharedKeys';
import parse from 'html-react-parser';

class CityListing extends Component {

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

    decodeEntities = (str) => {
        return str.replace(/&#(\d+);/g, function(match, dec) {
            return String.fromCharCode(dec);
        });
    }

    stripHtml = (str) =>  {
        str = str.toString();
        return str.replace(/<[^>]*>/g, '');
    }

    componentDidMount () {
        this.setState({ isLoading: false });
        this.getCityBreweries();
    }

    render() {
        const { city, breweries } = this.state;

        console.log(breweries);
   
        const renderList = Object.entries(breweries).map(brewery => {

            const breweryListing = brewery[1];

            return(
                <Col md="4" className="mb-5">
                    <Card key={breweryListing.id}>
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
            <section className="city-listing">
                <Hero headline={ city }/>
                <div className="container mb-5">
                    <div className="row">
                        {renderList}
                    </div>
                </div>
            </section>
        );
    }
}

export default CityListing;