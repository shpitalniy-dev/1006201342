import React from 'react';
import { Router, Route } from 'react-router-dom';
import App from '../app/App.jsx';
import { GlobalStyles } from './styledComponents';

const Routing = props => {
    return (
        <>
            <Router history={props.history}>
                <Route exact path='/' component={App} />
            </Router>
            <GlobalStyles />
        </>
    );
};

export default Routing;