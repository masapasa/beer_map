import React, { Component } from 'react';
import axios from 'axios';
import { baseUrl, mapKey } from '../../shared/sharedKeys';
import MapGL, { GeolocateControl, NavigationControl, Marker } from 'react-map-gl';
import Loader from '../../components/utilities/loader.component';
import MapSearch from '../../components/map-search/map-search.component';
import 'mapbox-gl/dist/mapbox-gl.css';
import './map.styles.scss';

const MAPBOX_TOKEN = mapKey;

class Map extends Component {

    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                latitude: 39.113014,
                longitude: -105.358887,
                zoom: 7,
                bearing: 0,
                pitch: 0
            },
            isLoading: true,
            showPopup: true,
            breweries:[]
        }
    }

    getMapBreweries = async () => {
        await axios
            .get( baseUrl )
            .then(res => {
                this.setState({ breweries: res.data });
                console.log(this.state.breweries)
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

    componentDidMount() {
        this.getMapBreweries();
        this.setState({isLoading: false});
    }

    render() {

        const { isLoading, viewport, breweries } = this.state;

        const renderMarkers = Object.entries(breweries).map(brewery => {
            const breweryListing = brewery[1];
            return(
                <React.Fragment>
                    <Marker 
                        key={breweryListing.id}
                        latitude={parseFloat(breweryListing.acf.location.lat)}
                        longitude={parseFloat(breweryListing.acf.location.long)} 
                        offsetLeft={-20} 
                        offsetTop={-10}
                    >   
                        <button
                            className='map-btn'
                        >
                            <img className='map-icon' src="./assets/hop-icon@2x.png" alt={`${this.decodeEntities(breweryListing.title.rendered)} Icon`}/>
                        </button>
                    </Marker>
                </React.Fragment>
            );
        });

        if(isLoading) {
            return <Loader />;
        }
        else {
            return(
                <section className='map'>
                    <MapGL
                        {...viewport}
                        width="95vw"
                        height="100vh"
                        mapStyle="mapbox://styles/selceeus/ck5fzn67505341ilby3v1l6xs"
                        onViewportChange={viewport => this.setState({viewport})}
                        mapboxApiAccessToken={MAPBOX_TOKEN}
                    >
                        <div style={{position: 'absolute', top: 10, right: 10}}>
                                <NavigationControl />
                        </div>
                        <GeolocateControl
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                margin: 10,
                                overflow: 'hidden'
                            }}
                            positionOptions={{enableHighAccuracy: true}}
                            fitBoundsOptions={{maxZoom: 6}}
                            trackUserLocation={true}
                        />
                        {renderMarkers}
                    </MapGL>
                    <MapSearch />
                </section>
            );
        }
    }
}

export default Map;