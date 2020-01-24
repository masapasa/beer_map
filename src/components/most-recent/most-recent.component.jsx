import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardFooter } from 'reactstrap';
import axios from 'axios';
import { additionalUrl } from '../../shared/sharedKeys';
import './most-recent.styles.scss';

class MostRecent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breweries: [],
            sectionHeader: 'Additional Breweries'
        }
    }

    getAdditionalBreweries = async () => {
        await axios
            .get( additionalUrl + '&filter[cat]=-1,-171' )
            .then(res => {
                this.setState({ breweries: res.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    shuffleArr = (array) => {
        var currentIndex = array.length, temporaryValue, randomIndex;
        
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
        
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        
        return array;
    }

    decodeEntities = (str) => {
        return str.replace(/&#(\d+);/g, function(match, dec) {
            return String.fromCharCode(dec);
        });
    }

    componentDidMount () {
        this.setState({isLoading: false});
        this.getAdditionalBreweries();
    }

    render() {

        const { sectionHeader, breweries } = this.state;

        const renderAdditional = Object.entries(breweries).map(brewery => {
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
                    {renderAdditional}
                </div>
            </section>
        );
    }
}

export default MostRecent;