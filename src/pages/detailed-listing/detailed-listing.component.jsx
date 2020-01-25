import React, { Component } from 'react';
import axios from 'axios';
import Carousel from '../../components/carousel/carousel.component';
import { detailedUrl } from '../../shared/sharedKeys';
import './detailed-listing.styles.scss';

class DetailedListing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breweries: [],
            breweryId: props.match.params.breweryId
        }
    }

    getSingleBrewery = async () => {
        await axios
            .get( detailedUrl + this.state.breweryId )
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

    componentWillMount () {
        this.getSingleBrewery();
    }

    componentDidMount () {
        this.setState({isLoading: false});
    }

    render() {
        return(
            <section className='detailed-listing'>
                <Carousel />
            </section>
        );
    }
}

export default DetailedListing;