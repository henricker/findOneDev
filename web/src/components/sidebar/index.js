import React from 'react';

import { Link } from 'react-router-dom';

//import images
import imgLogo from '../../images/mainLanding.png';
import arrowLeft from '../../images/arrowLeft.png';
import './style.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <aside>
            <header className="aside-header">
                <img class="logo-image" src={imgLogo} alt="logo"></img>
                <div className="presentation-map">
                    <h1>Encontre devs pelo mapa!</h1>
                    <p>Outros devs estão esperando por você!</p>
                </div>
            </header>
            <footer className="aside-footer">
                <div><Link to="/"><img className="logo-image" src={arrowLeft}></img></Link></div>
                <strong>Boa Viagem</strong>
                <p>Ceará</p>
            </footer>
        </aside>
    );
}