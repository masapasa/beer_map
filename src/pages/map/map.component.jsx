import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import MapSearch from '../../components/map-search/map-search.component';
import './map.styles.scss';

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lng: 5,
            lat: 34,
            zoom: 2
        };
    }

    componentDidMount() {
        mapboxgl.accessToken = 'pk.eyJ1Ijoic2VsY2VldXMiLCJhIjoiY2s0Mzh1NjFvMDJvcDNlbmFkejMyMHdjNyJ9.t-rxQRKpzYDBstSg-_QSUQ';
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });

        map.on('move', () => {
            this.setState({
                lng: map.getCenter().lng.toFixed(4),
                lat: map.getCenter().lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
            });
        });
    }

    render() {
        return(
            <section className='map'>
                <div ref={el => this.mapContainer = el} className="mapContainer" />
                <aside className='sidebarStyle'>
                    <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
                </aside>
                <MapSearch />
            </section>
        );
    }
}

export default Map;