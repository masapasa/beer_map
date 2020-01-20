import React from 'react';
import Hero from '../../components/utilities/hero.component';
import './city-listing.styles.scss';

const CityListing = props => {
    return(
        <section className="city-listing">
            <Hero headline={'city listing'} />
        </section>
    );
}

export default CityListing;