import React from 'react';

import { useSelector } from 'react-redux';

import styles from './forecastBar.module.css';


export function ForecastBar (props) {

    const forecasts = useSelector((state) => state.forecasts);
    console.log('ForecastBar forecasts: ', forecasts);
    if (forecasts === null) {
        return <h5>Loading Weather</h5>
    }
    return (

        <div className={styles.forecast_main}>
            {/* <h5>{forecasts[props.id].city.name}</h5> */}
            <div className={styles.weather_block}>             
                <img src={`https://openweathermap.org/img/wn/${forecasts[props.id].list[0].weather[0].icon}.png`} alt="Wx Icon"/>
                <img src={`https://openweathermap.org/img/wn/${forecasts[props.id].list[8].weather[0].icon}.png`} alt="Wx Icon"/>
                <img src={`https://openweathermap.org/img/wn/${forecasts[props.id].list[16].weather[0].icon}.png`} alt="Wx Icon"/>
                <img src={`https://openweathermap.org/img/wn/${forecasts[props.id].list[24].weather[0].icon}.png`} alt="Wx Icon"/>
                <img src={`https://openweathermap.org/img/wn/${forecasts[props.id].list[32].weather[0].icon}.png`} alt="Wx Icon"/>
            </div>
        </div>

    )

}