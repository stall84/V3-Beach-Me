import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import { ForecastBar } from '../ForecastBar/ForecastBar';
import { timeConverter } from '../../utilities/utilities';
import styles from './displayTrip.module.css';

import Grid from '@material-ui/core/Grid';





 function TripCards(props) {
        const latitude = useSelector((state) => state.latitude);
        const longitude = useSelector((state) => state.longitude);
        const beachFive = useSelector((state) => state.beaches);

    
        if (beachFive === null) {
            return <h2>JUST A MOMENT WHILE WE LOAD YOUR BEACHES ;)</h2>;
        }
       
        return (
                     
                
                <div className={styles.base_style} key={props.trip.id}>
                <a className={styles.anchor_tag} target='_blank' rel='noopener noreferrer' href={`https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${props.trip.name}&travelmode=driving`}>
                <h5 >{props.trip.name}</h5> 
                <p>
                
                    {timeConverter(props.trip.dur)}
                
                </p>
                </a>
                
                </div>  
                
        )
    }



export function DisplayTrip (props) {

    const beachFive = useSelector((state) => state.beaches);
    const dispatch = useDispatch();

    useEffect(() => {
        if (beachFive != null) {
            axios.post('/api/v1/get-weather', {
                fiveBeaches: beachFive
            })
                .then(response => {
                    console.log('Weather Response: ', response)
                    dispatch({
                        type: 'ADD_FORECASTS',
                        payload: {
                        forecasts: response.data.data
                        }
                    })
                })
                .catch(error => console.log('There was an error retrieving weather: ', error))  
        }
    }, [beachFive])
    
    if (beachFive === null) {
        return <h2>JUST A MOMENT WHILE WE LOAD YOUR BEACHES ;)</h2>;
    }

    return beachFive.map((trip, i) => {
    return (
            <Grid className={styles.card_container}>
            <TripCards key={i} id={i} trip={trip}/>
            <ForecastBar key={i}/>
            </Grid>
    )


})
}