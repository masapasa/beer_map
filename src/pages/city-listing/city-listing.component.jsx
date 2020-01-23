import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardFooter } from 'reactstrap';
import axios from 'axios';
import Hero from '../../components/utilities/hero.component';
import './city-listing.styles.scss';
import { cityQuery } from '../../shared/sharedKeys';

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

    componentDidMount () {
        this.setState({ isLoading: false });
        this.getCityBreweries();
    }

    render() {

        const { city, breweries } = this.state;
   
        const renderList = Object.entries(breweries).map(brewery => {
            const breweryListing = brewery[1];
            return(
                <Card key={breweryListing.id} className="col-md-3 my-3 mx-3">
                    
                    <CardBody>
                        <CardTitle><h6>{breweryListing.title.rendered}</h6></CardTitle>
                        <CardText></CardText>
                        <CardFooter></CardFooter>
                    </CardBody>
                </Card>
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