import React, { Component } from 'react';
import MapGL, { GeolocateControl, NavigationControl, Marker } from 'react-map-gl';
import MapSearch from '../../components/map-search/map-search.component';
import Pin from '../../components/map-utilities/pin.component';
import 'mapbox-gl/dist/mapbox-gl.css';
import './map.styles.scss';

const MAPBOX_TOKEN = 'pk.eyJ1Ijoic2VsY2VldXMiLCJhIjoiY2s0Mzh1NjFvMDJvcDNlbmFkejMyMHdjNyJ9.t-rxQRKpzYDBstSg-_QSUQ';

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
            }
        };
        console.log(this.props.breweryData);
    }
    render() {
        const {viewport} = this.state;
        return(
            <section className='map'>
                <MapGL
                    {...viewport}
                    width="95vw"
                    height="100vh"
                    mapStyle="mapbox://styles/mapbox/light-v10"
                    onViewportChange={viewport => this.setState({viewport})}
                    mapboxApiAccessToken={MAPBOX_TOKEN}
                >
                    <Marker latitude={39.113014} longitude={-105.358887} offsetLeft={-20} offsetTop={-10}>
                        <Pin />
                    </Marker>
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
                        fitBoundsOptions={{maxZoom: 8}}
                        trackUserLocation={true}
                    />
                </MapGL>
                <MapSearch breweryInfo={this.state.brewery}/>
            </section>
        );
    }
}

export default Map;