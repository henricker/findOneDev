import React from 'react';

import { MapContainer, Marker, TileLayer, Popup  } from 'react-leaflet';

//import components
import Sidebar from '../../components/sidebar';
import 'leaflet/dist/leaflet.css';
import './style.css';


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const position = [-5.121283598809426, -39.73063941829233];
    return (
        <>
        <div className="map-page">
            <Sidebar className="map-page-aside"/>
            <MapContainer center={position} zoom={16}>
                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                
            </MapContainer>
        </div>
        </>
    );
}