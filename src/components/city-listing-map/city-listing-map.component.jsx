import React, { useState } from 'react';
import MapGL, { GeolocateControl, NavigationControl, Marker, Popup } from 'react-map-gl';
import Loader from '../../components/utilities/loader.component';
import 'mapbox-gl/dist/mapbox-gl.css';
import { mapKey } from '../../shared/sharedKeys';
import parse from 'html-react-parser';
import './city-listing-map.styles.scss';

const MAPBOX_TOKEN = mapKey;

const CityListingMap = () => {

    const renderUIElements = apiData => {
        const renderMarkers= Object.entries(apiData);
        const { popupInfo } = useState;

        if(!renderMarkers.length) {
            return <Loader />;
        }

        return(
            renderMarkers.map(data => (
                <div key={data[1].id}>
                    <Marker 
                        latitude={parseFloat(data[1].acf.location.lat)}
                        longitude={parseFloat(data[1].acf.location.long)} 
                        offsetLeft={-20} 
                        offsetTop={-10}
                    >   
                        <button 
                            className='map-btn'
                            onClick={e => {
                                e.preventDefault();
                                useState({ popupInfo: data[1] });
                                console.log(data[1])
                            }}
                        >
                            <img className='map-icon' src="./assets/hop-icon@2x.png" alt={`${parse(data[1].title.rendered)} Icon`}/>
                        </button>
                    </Marker>
                    {popupInfo && ( 
                        <Popup
                            tipSize={10}
                            anchor="top"
                            offsetTop={35}
                            latitude={parseFloat(popupInfo.acf.location.lat)}
                            longitude={parseFloat(popupInfo.acf.location.long)}
                            closeOnClick={false}
                            onClose={() => useState({ popupInfo: null })}
                        >
                        
                            <h6>{parse(popupInfo.title.rendered)}</h6>
                            <a href={popupInfo.acf.location.website} target="_blank" rel="noopener noreferrer">Website</a>
                        </Popup>
                    )}
               </div>
            ))
        );
    }

    const { viewport } = this.state;

        return(
            <div>
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
                        {renderUIElements(this.props.breweryLocation)}
                    </MapGL>
                </section>
            </div>
        );
}

export default CityListingMap;