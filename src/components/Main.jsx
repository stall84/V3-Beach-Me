import React from 'react';


/***  Redux Config  ***/
import { Provider } from 'react-redux';
import { store } from '../store';


/***  Components  ***/ 

import { LandingPage } from './LandingPage/LandingPage';


export const Main = () => (
    
        < Provider store={store} >
                    <LandingPage /> 
        </Provider>
    
)