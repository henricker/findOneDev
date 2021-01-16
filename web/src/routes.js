import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//import pages
import Index from './pages/index';
import DevMap from './pages/devMap';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Index}/>
                <Route path="/devs" component={DevMap}/>
            </Switch>
        </Router>
    );
}