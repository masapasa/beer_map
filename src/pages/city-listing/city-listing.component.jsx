import React, { Component } from 'react';
import Hero from '../../components/utilities/hero.component';
import './city-listing.styles.scss';

class CityListing extends Component {

    componentDidMount () {
        console.log(this.props.location.state);
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