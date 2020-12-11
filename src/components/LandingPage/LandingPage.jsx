import React, { useState, useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import styles from './landingPage.module.css';

import { TestComp } from '../TestComp/TestComp';
import { DisplayTrip } from '../DisplayTrip/DisplayTrip';
import { TripCards } from '../DisplayTrip/DisplayTrip';

/***  Material UI Components ***/ 
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';



export function LandingPage(props) {
    
    const [ scrollState, setScrollState ] = useState('logo')


    const dispatch = useDispatch();
    const latitude = useSelector((state) => state.latitude);
    const longitude = useSelector((state) => state.longitude);
    const searchBeaches = useSelector((state) => state.searchBeaches);

    const scrollRef = React.useRef();
    scrollRef.current = scrollState;


    
    // Side-Effect to poll-for User's geolocation via the browswers navigator API
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                console.log(position);
                dispatch({
                    type: 'ADD_COORDS', 
                    payload: {
                        latitude: position.coords.latitude, 
                        longitude: position.coords.longitude}
                    })
                axios
                    .post('/api/v1/beaches', {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    })
                    .then((response) => {
                        console.log('Post Response from API: ', response);
                        dispatch({ 
                            type: 'ADD_SEARCH_BEACHES',
                            payload: { 
                                searchBeaches: response.data.data 
                            }
                        });
                    })
                    .catch((error) => {
                        console.error('Error in retrieving closest beaches: ', error);
                    })
            })
        }
    }, [])

    useEffect(() => {
        if (longitude && searchBeaches) {

            axios.post('/api/v1/get-trips', {
                reduxLat: latitude,
                reduxLng: longitude,
                searchBeaches: searchBeaches
            })
            .then((response) => {
                console.log('Response to GET-TRIPS Endpoint: ', response);
                dispatch({
                    type: 'ADD_BEACHES',
                    payload: {
                        beaches: response.data.data
                    }
                })
            })
            .catch((error) => {
                console.error('Problem Posting to Get-Trips Endpoint: ', error);
            })
        }
    }, [latitude, longitude, searchBeaches])

    // Querying Javascript Date API to get the current user's local day of the week to be used in weather
    // rendering later in app. Dispatching it to Redux store.
    var today = new Date();
    var day = today.getDay();
    useEffect(() => {
        dispatch({
            type: 'ADD_DATE',
            payload: {
                day: day
            }
        })
    }, [today])
    
    useEffect(() => {
       const handleScroll = () => {
           const show = window.scrollY > 2;
           if (show) {
               setScrollState('scrolling');
               
           } else {
               setScrollState('logo');
           }
       }
       document.addEventListener('scroll', handleScroll)
       
       return () => {
           document.removeEventListener('scroll', handleScroll)
       }
    }, [])

 

    return (

    <React.Fragment>
        <Container maxWidth='xl' disableGutters='true' >
            <Grid container >
                <div className={styles.hero}>
                    <header className={styles[scrollRef.current]}>
                        <a href="#">
                            <h1 >BEACH ME </h1>
                        </a>
                    </header>
                </div>
                <Grid xs={12} className={styles.input_div}>
                    <form>
                      <label for='location'>Where you wanna escape?</label>
                      <input type='search' id='location' name='location' placeholder='ex: Atlanta, GA or 30306' />
                    </form>
                </Grid>
                <Grid xs={12} className={styles.grid_base} >      
                        <DisplayTrip />                                
                </Grid>
        </Grid>
        </Container>
    </React.Fragment>
    )
}

