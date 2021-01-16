import React from 'react';

//import components
import Sidebar from '../../components/sidebar';
import MapDev from '../../components/map';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <>
        <div className="map-page">
            <Sidebar className="map-page-aside"/>
            <MapDev className="map-element"/>
        </div>
        </>
    );
}