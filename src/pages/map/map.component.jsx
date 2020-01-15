import React, { Component, PureComponent } from 'react';
import MapGL, { GeolocateControl, NavigationControl, Marker } from 'react-map-gl';
import MapSearch from '../../components/map-search/map-search.component';
import Pin from '../../components/map-utilities/pin.component';
import 'mapbox-gl/dist/mapbox-gl.css';
import './map.styles.scss';

const MAPBOX_TOKEN = 'pk.eyJ1Ijoic2VsY2VldXMiLCJhIjoiY2s0Mzh1NjFvMDJvcDNlbmFkejMyMHdjNyJ9.t-rxQRKpzYDBstSg-_QSUQ';

class Markers extends PureComponent {
    render() {
      const { data } = this.props;
      console.log( data );
      return data.map(
        city => 
            <Marker 
                key={city.name} 
                longitude={city.longitude} 
                latitude={city.latitude} 
            >
                <Pin />
            </Marker>
      )
    }
  }

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
            brewdata: this.props.brewerydata
        };
    }
    render() {
        const {viewport, brewdata } = this.state;
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

                    <Markers data={this.state.brewdata} />

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
                <MapSearch breweryInfo={this.state.brewdata}/>
            </section>
        );
    }
}

export default Map;