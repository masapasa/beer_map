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

    _isMounted = false;

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
            breweries:[]
        }

        axios.get( baseUrl )
        .then(res => {
          const breweries = res.data;
          this.setState({ breweries });
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    componentDidMount() {
        this._isMounted = true;
        this.setState({isLoading: false});
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {

        const { isLoading, viewport, breweries } = this.state;

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
                        {
                            breweries.map(
                                brew => 
                                <Marker 
                                    key={brew.id}
                                    latitude={parseFloat(brew.acf.location.lat)}
                                    longitude={parseFloat(brew.acf.location.long)} 
                                    offsetLeft={-20} 
                                    offsetTop={-10}
                                >   
                                    <button
                                        className='map-btn'
                                    >
                                        <img className='map-icon' src="./assets/hop-icon@2x.png" alt={`${brew.title.rendered} Icon`}/>
                                    </button>
                                </Marker>
                            )
                        }
                    </MapGL>
                    <MapSearch />
                </section>
            );
        }
    }
}

export default Map;