import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

import { ForecastBar } from '../ForecastBar/ForecastBar';
import { timeConverter } from '../../utilities/utilities';
import styles from './displayTrip.module.css';

import Grid from '@material-ui/core/Grid';


 function TripCards(props) {
        const latitude = useSelector((state) => state.latitude);
        const longitude = useSelector((state) => state.longitude);
        const beachFive = useSelector((state) => state.beaches);
        
    
        if (beachFive === null) {
            return ( 
                <div> 
                    <Loader
                        type="Puff"
                        color="#00BFFF"
                        height={120}
                        width={120}
                        timeout={4000}                
                    />
                    
                </div>
                )
        }
       
        return (
                <div className={styles.card_top} key={props.trip.id}>
                    <a className={styles.anchor_tag} href={`https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${props.trip.name}&travelmode=driving`}>
                        <h5 >{props.trip.name}</h5> 
                        <h5> {timeConverter(props.trip.dur)} </h5>     
                    </a>
                </div>  
                
        )
    }


export function DisplayTrip (props) {

    const beachFive = useSelector((state) => state.beaches);
    const forecasts = useSelector((state) => state.forecasts);
    const dispatch = useDispatch();

    
    useEffect(() => {
        if (beachFive != null) {
            axios.post('https://mes-personal-site.herokuapp.com/api/v1/get-weather', {
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
                .catch(error => console.error('There was an error retrieving weather: ', error))  
        }
    }, [beachFive])

    useEffect(() => {
        if (forecasts != null) {
        document.getElementById('tripCardsMain').focus();
    }
    }, [forecasts])
    
    if (beachFive === null) {
        return ( 
            <div className={styles.loader_div}> 
                <Loader
                    type="Watch"
                    color="#001858"
                    height={200}
                    width={200}
                    timeout={4000}                
                />
                <h5>Enter Your Location Above</h5>
            </div>
            )
    }

    return beachFive.map((trip, i) => {
    return (
            <Grid className={styles.base_style} key={i + 'grid'} tabIndex='0' id='tripCardsMain' >
                <TripCards key={i} id={i} trip={trip}/>
                <ForecastBar key={i + 'a'} id={i} trip={trip}/>
            </Grid>
    )
})
}