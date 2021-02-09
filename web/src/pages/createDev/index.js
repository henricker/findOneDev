import {React, useState } from 'react';
import { MapContainer, Marker, TileLayer, useMapEvents} from 'react-leaflet';
import { Icon } from 'leaflet';
import './style.css';
import 'leaflet/dist/leaflet.css';
import '../../components/global/style.css';
import Button from '../../components/button';
import github from '../../images/githuub.svg';

let myIcon = new Icon({
    iconUrl: github,
    iconSize: [38, 95],
    iconAnchor:   [22, 94],
    popupAnchor:  [-3, -76]
});

function ChosenLocation() {
    const [marker, setMarker] = useState([-5.121283598809426, -39.73063941829233]);
    // eslint-disable-next-line no-unused-vars
    const map = useMapEvents({
        click: (e) => {
            const newMarker = [e.latlng.lat, e.latlng.lng];
            setMarker(newMarker);
        }
    });
    return(
        <>
            <Marker 
            position={marker}
            icon={myIcon}
            />
        </>
    );
}


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const center = [-5.121283598809426, -39.73063941829233];

    const [github_username, setGithub_username] = useState('');
    const [techs, setTechs] = useState('');
    const [email, setEmail] = useState('');

    return (
        <>
        <body className="create-body">
            <div className="form-container">
                <form className="form-createDev">
                    <h1 className="network">Conecte-se!</h1>
                    <label>Email:</label>
                    <div><input type="email" className="input-createDev"placeholder="Email..." name="email" value={email} onChange={e => setEmail(e.target.value)}/></div>
                    <label>Github:</label>
                    <div><input type="text" className="input-createDev" placeholder="Github username..." name="github_username" value={github_username} onChange={e => setGithub_username(e.target.value)}/></div>
                    <label>Techs:</label>
                    <div><input type="text" className="input-createDev" placeholder="Techs... ex: nodejs, reactjs..." name="techs" value={techs} onChange={e => setTechs(e.target.value)}/></div>

                    <div className="map-createDev" >
                       <label className="label-select">Clique no mapa para selecionar sua localização:</label>
                        <MapContainer center={center} zoom={16} className="map-form" zoomControl={false} >
                        <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <ChosenLocation/>
                        </MapContainer>
                    </div>
                    <div><Button content="Conecte-se e encontre outros devs!" className="submit-createDev"/></div>
                </form>
            </div>
        </body>
        </>
    );
}