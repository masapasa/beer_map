import React, { Component } from 'react';
import axios from 'axios';
import Hero from '../../components/utilities/hero.component';
import './city-listing.styles.scss';

class CityListing extends Component {
    constructor(props) {
        super(props);
        this.state = {
          breweries: [],
          isLoading: true
        };
      }

    async componentDidMount () {
        console.log(this.props.location.state);

        await axios.get('https://coloradobeermap.com/wp-json/wp/v2/brewery?per_page=100?')
        .then(res => {
            const breweries = res.data;
            this.setState({ breweries });
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
        const { cityName } = this.props.location.state

        return(
            <section className="city-listing">
                <Hero headline={cityName}/>
            </section>
        );
    }
}

export default CityListing;