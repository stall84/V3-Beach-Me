import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';

/***  Redux Config  ***/
import { Provider } from 'react-redux';
import { store } from '../store';


/***  Components  ***/ 
import { ConnectedDashboard } from './Dashboard';
import { ConnectedNavigation } from './Navigation';
import { LandingPage } from './LandingPage/LandingPage';
import { ConnectedLandingPage } from './LandingPage/LandingPage';

export const Main = () => (
    <Router >
        < Provider store={store} >
            <StylesProvider injectFirst >
            
                <ConnectedLandingPage />
                <Route exact path="/dashboard" render={ () => (<ConnectedDashboard/>)} />
            
            </StylesProvider>
        </Provider>
    </Router>
)