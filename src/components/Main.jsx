import React from 'react';


/***  Redux Config  ***/
import { Provider } from 'react-redux';
import { store } from '../store';

// Importing Styles for Webpack Bundling 

import '../styles/normalize.css';
import '../styles/index.css';

/***  Components  ***/ 

import { LandingPage } from './LandingPage/LandingPage';


export const Main = () => (
    
        < Provider store={store} >
                    <LandingPage /> 
        </Provider>
    
)