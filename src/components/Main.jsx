import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch,
  Route,
  Link
} from 'react-router-dom';

/***  Redux Config  ***/
import { Provider } from 'react-redux';
import { store } from '../store';

// Importing Styles for Webpack Bundling 

import '../styles/normalize.css';
import '../styles/index.css';

/***  Components  ***/ 

import { LandingPage } from './LandingPage/LandingPage';
import { MobileApp } from './MobileApp/MobileApp';


export const Main = () => (
        <Provider store={store} >
                <Router>
                        <Switch>
                        <Route path='/mobile-app'>
                          <MobileApp />
                        </Route>        
                        <Route path='/'>
                          <LandingPage /> 
                        </Route>                       
                        </Switch>
                </Router>
        </Provider>
    
)