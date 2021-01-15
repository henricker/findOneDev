import React from 'react';

//import components
import Logo from '../../components/logo';

//import images
import time from '../../images/ok.png';
import time1 from '../../images/time.png';

//import styles
import '../../components/global/style.css';
import './style.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return(
    <>
    <header> 
        <div className="logo"><Logo/></div>
        <div className="location">
            <strong>Boa Viagem</strong>
            <p>Ceará</p>
        </div>
    </header>
    <div className="container">
        <main>
            <div className="presentation">
                <h1>Reuniremos toda a comunidade dev da sua cidade!</h1>
                <p>Encontre outro dev e façam grandes projetos juntos!</p>
            </div>
            <section className="meet">
                <img className="time1" src={time1} alt="development group" ></img>
                <img className="time2" src={time} alt="development group" ></img>
                <div><button>Encontre um dev!</button></div>
            </section>
        </main>
    </div>
    </>
    );
}
