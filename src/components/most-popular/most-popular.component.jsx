import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardFooter } from 'reactstrap';
import axios from 'axios';
import { popularUrl } from '../../shared/sharedKeys';
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

    decodeEntities = (str) => {
        return str.replace(/&#(\d+);/g, function(match, dec) {
            return String.fromCharCode(dec);
        });
    }

    componentDidMount () {
        this.setState({isLoading: false});
        this.getPopularBreweries();
    }

    render() {

        const { sectionHeader, breweries } = this.state;

        const renderPopular = Object.entries(breweries).map(brewery => {
            const breweryListing = brewery[1];
            return(
                <Card key={breweryListing.id} className="col mb-4">
                    <CardBody>
                        <CardTitle><h6>{this.decodeEntities(breweryListing.title.rendered)}</h6></CardTitle>
                        <CardText></CardText>
                        <CardFooter></CardFooter>
                    </CardBody>
                </Card>
            );
        });
        
        return(
            <section className="container py-3 my-5">
                <div className="row mb-4 mobile-heading">
                    <h2 className="pb-2 px-0 border-bottom col">{sectionHeader}</h2>
                </div>
                <div className="row row-cols-1 row-cols-md-3">
                    {renderPopular}
                </div>
            </section>
        );
    }
}

export default MostPopular;