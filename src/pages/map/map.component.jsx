import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import MapSearch from '../../components/map-search/map-search.component';
import Tooltip from '../../components/map-tooltip/map-tooltip.component';
import './map.styles.scss';

class Map extends Component {

    tooltipContainer;

    constructor(props) {
        super(props);
        this.state = {
            lng: -105.358887,
            lat: 39.113014,
            zoom: 8
        };
    }

    setTooltip(features) {
        if (features.length) {
            ReactDOM.render(
                React.createElement(
                    Tooltip, {
                    features
                    }
                ),
                this.tooltipContainer
            );
        } else {
            this.tooltipContainer.innerHTML = '';
        }
    }

    componentDidMount() {

        this.tooltipContainer = document.createElement('div');

        mapboxgl.accessToken = 'pk.eyJ1Ijoic2VsY2VldXMiLCJhIjoiY2s0Mzh1NjFvMDJvcDNlbmFkejMyMHdjNyJ9.t-rxQRKpzYDBstSg-_QSUQ';
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });

        const tooltip = new mapboxgl.Marker(this.tooltipContainer, { offset: [-120, 0] }).setLngLat([0,0]).addTo(map);

        map.on('move', (e) => {
            this.setState({
                lng: map.getCenter().lng.toFixed(4),
                lat: map.getCenter().lat.toFixed(4),
                zoom: map.getZoom().toFixed(2),
            });
        });

        const features = map.queryRenderedFeatures(point);
            
        tooltip.setLngLat([-104.819800,38.835220]);
        map.getCanvas().style.cursor = features.length ? 'pointer' : '';
        this.setTooltip(features);
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