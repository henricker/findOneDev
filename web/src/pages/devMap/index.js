
import React from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';

//import components
import Sidebar from '../../components/sidebar';
import ButtonComponent from '../../components/button';
import 'leaflet/dist/leaflet.css';
import './style.css';

import github from '../../images/githuub.svg';
import myPhoto from '../../images/myPhoto.jpg';

let myIcon = new Icon({
     iconUrl: github,
     iconSize: [38, 95],
     iconAnchor:   [22, 94],
     popupAnchor:  [-3, -76]
});


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const position = [-5.121283598809426, -39.73063941829233];
    return (
        <>
        <div className="map-page">
           
            <Sidebar className="map-page-aside"/>
            <MapContainer center={position} zoom={16} className="map-aside">
                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker
                    position={position}
                    icon={myIcon}
                >
                    <Popup>
                        <div className="dev-information">
                            <h1>Henrique Vieira</h1>
                            <img src={myPhoto} width="150" height="150" style={{display: "inline-block"}} alt="dev"></img>
                            <div className="min-details">
                                <p className="git">Github: <a href="https://github.com/henricker">henricker</a></p>
                                <p className="linkedin">Linkedin: <a href="https://www.linkedin.com/in/henrique-vieira-406b781a7/">henrique-vieira-406b781a7</a></p>
                                <p className="about">Desenvolvedor web e amante de NodeJs</p>
                                <a className="details-link" href="#">Saiba mais aqui</a>
                            </div>
                        </div>
                    </Popup>
                </Marker>
            </MapContainer>
            <div className="map-button-component"><Link to="/createDev"><ButtonComponent content="Conecte-se"/></Link></div>
        </div>
        </>
    );
}