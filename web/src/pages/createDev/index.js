import {React, useState} from 'react';
import { MapContainer, Marker, TileLayer} from 'react-leaflet';
import { Icon } from 'leaflet';
import useGeoLocation from '../../util/useGeolocation';
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




// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [position, setPosition] = useState({
        lat: "-5.121283598809426",
        lng: "-39.73063941829233"
    })
    const location = useGeoLocation();

    function getLocation() {
        if(location.loaded && !location.error) {
            setPosition({
                lat: location.coordinates.lat,
                lng: location.coordinates.lng
            });
        }
        else
            alert(location.error.message);
    }


    return (
        <body className="create-body">
            <div className="form-container">
                <form className="form-createDev">
                    <h1 className="network">Conecte-se!</h1>
                    <label for="email">Email:</label>
                    <div><input type="email" className="input-createDev"placeholder="Email..." name="email"/></div>
                    <label for="github_username">Github:</label>
                    <div><input type="text" className="input-createDev" placeholder="Github username..." name="github_username"/></div>
                    <label for="techs">Techs:</label>
                    <div><input type="text" className="input-createDev" placeholder="Techs... ex: nodejs, reactjs..." name="techs"/></div>

                    <label>Selecione o seu endereço no mapa abaixo: </label>
                    <div className="map-createDev" >
                        <MapContainer center={position} zoom={16} className="map-form">
                        <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {position.lat && position.lng &&(
                            <Marker
                                position={[position.lat, position.lng]}
                                icon={myIcon}
                            >
                            </Marker>
                        )}
                        </MapContainer>
                        <div><Button content="Clique para informar sua localização" className="submit-createDev" execute={getLocation}/></div>
                    </div>
                    <div><Button content="Conecte-se e encontre outros devs!" className="submit-createDev"/></div>
                </form>
            </div>
        </body>
    );
}