import React from 'react';
import { forecastDays } from '../../utilities/utilities';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

import { useSelector } from 'react-redux';

import styles from './forecastBar.module.css';


export function ForecastBar (props) {

    const forecasts = useSelector((state) => state.forecasts);
    const day = useSelector((state) => state.day);

    const url = 'https://www.openweathermap.org/city/';

    // Call Utility function to determine next 3 days for user's forecast
    const days = forecastDays(day);
    
    if (forecasts === null) {
        return (<div>
                    <Loader
                        type="Audio"
                        color="#00BFFF"
                        height={80}
                        width={80}
                        timeout={4000}                
                    />
                </div>
        )
    }
    return (
        // Here we're rendering the individual forecast-days with the day of the week, the openweathermaps 
        // api depiction image, the description, and finally the termperature to F

        <div className={styles.forecast_main}>         
            <a href={`${url}${forecasts[props.id].city.id}`}>
            <div className={styles.weather_block}>                            
                <div className={styles.weather_div}><span className={styles.day_span}>{days[0]}</span>
                    <img src={`https://openweathermap.org/img/wn/${forecasts[props.id].list[8].weather[0].icon}.png`} alt="Wx Icon"/>
                    <div className={styles.btm_wx} >
                        <span className={styles.wx_span}>{forecasts[props.id].list[8].weather[0].description}</span>
                        <br/>
                        <span className={styles.temp_span}>{forecasts[props.id].list[8].main.temp.toFixed(0)}F</span>
                    </div>
                </div>               
                <div className={styles.weather_div}><span className={styles.day_span}>{days[1]}</span>
                    <img src={`https://openweathermap.org/img/wn/${forecasts[props.id].list[16].weather[0].icon}.png`} alt="Wx Icon"/>
                    <div className={styles.btm_wx} >
                        <span className={styles.wx_span}>{forecasts[props.id].list[16].weather[0].description}</span>
                        <br/>
                        <span className={styles.temp_span}>{forecasts[props.id].list[16].main.temp.toFixed(0)}F</span>
                    </div>
                </div>
                <div className={styles.weather_div}><span className={styles.day_span}>{days[2]}</span>
                    <img src={`https://openweathermap.org/img/wn/${forecasts[props.id].list[24].weather[0].icon}.png`} alt="Wx Icon"/>
                    <div className={styles.btm_wx} >
                        <span className={styles.wx_span}>{forecasts[props.id].list[24].weather[0].description}</span>
                        <br/>
                        <span className={styles.temp_span}>{forecasts[props.id].list[24].main.temp.toFixed(0)}F</span>
                    </div>
                </div>                
            </div>
            </a>
        </div>

    )

}