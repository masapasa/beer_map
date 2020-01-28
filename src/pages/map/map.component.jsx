import React, { Component } from 'react';
import axios from 'axios';
import { baseUrl, offsetUrl, mapKey } from '../../shared/sharedKeys';
import MapGL, { GeolocateControl, NavigationControl, Marker } from 'react-map-gl';
import Loader from '../../components/utilities/loader.component';
import MapSearch from '../../components/map-search/map-search.component';
import 'mapbox-gl/dist/mapbox-gl.css';
import parse from 'html-react-parser';
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
            showPopup: true,
            breweries:[]
        }
    }

    getMapBreweries = async () => {
        await axios.all([ 
            axios.get(baseUrl),
            axios.get(offsetUrl)
      ])
      .then(axios.spread((chunkOne, chunkTwo) => {
        const chunkConcat = [...chunkOne.data,...chunkTwo.data];
        this.setState({ breweries: chunkConcat });
      }))
      .catch(function (error) {
        console.log(error);
      });
    }


    renderMarkers = apiData => {

        const renderMarkers= Object.entries(apiData);

        if(!renderMarkers.length) {
            return <Loader />;
        }

        return(
            renderMarkers.map(data => (
                <Marker 
                    key={data[1].id}
                    latitude={parseFloat(data[1].acf.location.lat)}
                    longitude={parseFloat(data[1].acf.location.long)} 
                    offsetLeft={-20} 
                    offsetTop={-10}
                >   
                    <button
                        className='map-btn'
                    >
                        <img className='map-icon' src="./assets/hop-icon@2x.png" alt={`${parse(data[1].title.rendered)} Icon`}/>
                    </button>
                </Marker>
            ))
        );
    }

    componentDidMount() {
        this.getMapBreweries();
    }

    render() {

        const { viewport, breweries } = this.state;

        return(
            <React.Fragment>
                <section className='map jumbotron-fluid d-flex align-items-start'>
                    <MapGL
                        {...viewport}
                        width="100vw"
                        height="75vh"
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
                                top: 100,
                                right: 0,
                                margin: 10,
                                overflow: 'hidden'
                            }}
                            positionOptions={{enableHighAccuracy: true}}
                            fitBoundsOptions={{maxZoom: 5}}
                            trackUserLocation={true}
                        />
                        {this.renderMarkers(breweries)}
                    </MapGL>
                </section>
                <MapSearch />
            </React.Fragment>
        );
    }
}

export default Map;