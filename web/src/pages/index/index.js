import React from 'react';

//Link
import { Link } from 'react-router-dom';

//import components
import Logo from '../../components/logo';
import ButtonComponent from '../../components/button';

//import images
import team from '../../images/teamDev.png';
import time1 from '../../images/time.png';

//import styles
import '../../components/global/style.css';
import './style.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return(
    <>
    <body className="index-page">
    <header className="index-header"> 
        <div className="logo"><Logo/></div>
        <div className="location">
            <strong>Boa Viagem</strong>
            <p>Ceará</p>
        </div>
    </header>
    <div className="container">
        <main>
           
            <div className="presentation">
                <hr className="allow"/>
                <h1>Reuniremos toda a comunidade dev da sua cidade!</h1>
                <p>Encontre outro dev e façam grandes projetos juntos!</p>
            </div>
            
            <section className="meet">
                <div className="index-button-component"><Link to="devs"><ButtonComponent content="Encontre um dev!"/></Link></div>
            </section>
        </main>
    </div>
    </body>
    </>
    );
}
