import React, { Component } from 'react';
import axios from 'axios';
import Hero from '../../components/utilities/hero.component';
import './city-listing.styles.scss';

class CityListing extends Component {

    constructor(props) {
        super(props);
        this.state = {
          breweries: [],
          city: this.props.location.state.cityName,
          isLoading: true
        };
    }

    componentDidMount () {
        
        axios.get('https://coloradobeermap.com/wp-json/wp/v2/brewery?per_page=100')
        .then(res => {
            this.setState({ breweries: res.data });
        })
        .catch(function (error) {
            console.log(error);
        });

    }

    render() {

        const { city } = this.state;

        const renderList = Object.entries(this.state.breweries).map(brewery => {
            const breweryListing = brewery[1];
            if(breweryListing.acf.location.city === city){
                return(
                    <div key={breweryListing.id} className="col-md-6 my-3">
                        {`${breweryListing.acf.location.city} - ${breweryListing.title.rendered}`}
                    </div>
                );
            }
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