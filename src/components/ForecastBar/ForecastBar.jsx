import React from 'react';

import { useSelector } from 'react-redux';

import styles from './forecastBar.module.css';


export function ForecastBar () {

    const forecasts = useSelector((state) => state.forecasts);
    console.log('ForecastBar forecasts: ', forecasts);
    return (

        <div>
            <h5>WEATHER</h5>
        </div>

    )

}