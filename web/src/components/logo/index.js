import React from 'react';

//import styles
import './style.css';

//import image
import logo from '../../images/findOneDevIcon.png'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <div className="logo">
            <h1>Procura-se</h1>
            <img src={logo} alt="logomarca"></img>
            <p>Um <strong>dev!</strong></p>
        </div>
    );
}