import React from 'react';

//import images
import imgLogo from '../../images/mainLanding.png';
import './style.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <aside>
            <header className="aside-header">
                <img src={imgLogo} alt="logo"></img>
                <div className="presentation-map">
                    <h1>Encontre devs pelo mapa!</h1>
                    <p>Outros devs estão esperando por você!</p>
                </div>
            </header>
            <footer className="aside-footer">
                <strong>Boa Viagem</strong>
                <p>Ceará</p>
            </footer>
        </aside>
    );
}