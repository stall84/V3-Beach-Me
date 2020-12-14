/*** Third Party Components/Libraries  ***/
import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Geocode from 'react-geocode';


/***  Beach-Me Style and Custom Components ***/
import styles from './landingPage.module.css';
import { DisplayTrip } from '../DisplayTrip/DisplayTrip';


/***  Material UI Components ***/ 
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';



export function LandingPage(props) {
    
    const [ scrollState, setScrollState ] = useState('logo')
    const [ anonLocation, setAnonLocation ] = useState(null);

    const dispatch = useDispatch();
    const latitude = useSelector((state) => state.latitude);
    const longitude = useSelector((state) => state.longitude);
    const searchBeaches = useSelector((state) => state.searchBeaches);
    

    const scrollRef = React.useRef();
    scrollRef.current = scrollState;
    
/***  Geocode will operate if the client or client's browser refuse automatic location finding.  Lat/Lng will be pulled from the response, added to Redux store
      and then sent to our backend to populate nearest beaches  ***/ 
    const geocode = (event) => {
        event.preventDefault();
        Geocode.setApiKey(GOOGLE_API_KEY);      // removing 'process.env' for Netlify deploy
        Geocode.setLanguage('en');

        Geocode.fromAddress(anonLocation)
        .then((response) => {
            let { lat, lng } = response.results[0].geometry.location;
            console.log('Geocoder position: ', lat,lng);
            dispatch({
                type: 'ADD_COORDS',
                payload: {
                    latitude: lat,
                    longitude: lng
                }
            })
            axios
                .post('https://mes-personal-site.herokuapp.com/api/v1/beaches', {
                    lat: lat,
                    lng: lng
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
        })
        .catch((error) => {
            console.error('Error computing/retrieving geolocation: ', error);
        })
    }
    
    /* Poll-for User's geolocation via the browswers navigator API (If allowed by user), Add those coordinates to Redux store, then send them to the backend for closest beach
        population */
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                console.log('Navigator position: ', position);
                dispatch({
                    type: 'ADD_COORDS', 
                    payload: {
                        latitude: position.coords.latitude, 
                        longitude: position.coords.longitude}
                    })
                axios
                    .post('https://mes-personal-site.herokuapp.com/api/v1/beaches', {
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

    /***  After client's location is determined and stored, AND after the large-list of closest beaches by straight-line-distance is obtained from our backend.  Send request to 
          backend to do the logic/math of finding the 5 closest beaches by driving time (Google Distance Matrix)  ***/ 
    useEffect(() => {
        if (longitude && searchBeaches) {

            axios.post('https://mes-personal-site.herokuapp.com/api/v1/get-trips', {
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
    useEffect(() => {
        var day = today.getDay();
        dispatch({
            type: 'ADD_DATE',
            payload: {
                day: day
            }
        })
    }, [today])
    
    //  Logo animation 
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
        <Container maxWidth='xl' disableGutters={true} >
            <Grid container >
                <div className={styles.hero}>
                    <header className={styles[scrollRef.current]}>
                        <a href="#">
                            <h1 >BEACH ME </h1>
                        </a>
                    </header>
                </div>
                <Grid item xs={12} className={styles.input_div}>
                    <form onSubmit={geocode} >
                      <label htmlFor='location'>Where are you?</label>
                      <input type='search'
                             id='location' 
                             placeholder='ex: Atlanta, GA or 30306' 
                             onChange={input => setAnonLocation(input.target.value)} />
                    </form>
                    <div>
                        <p>After your location is attained, The 5 closest beaches to you will be rendered below.<br/>
                             The beach name and driving-time can be clicked to take you to the quickest route via Google Maps<br/>
                             The weather forecasts for the next 3 days is also clickable to be taken to a detailed forecast
                        </p>
                    </div>
                </Grid>
                <Grid xs={12} className={styles.grid_base} >      
                        <DisplayTrip />                                
                </Grid>
        </Grid>
        <footer className={styles.footer}>
        <div>
            <a target='_blank' href='https://github.com/stall84'>
                <h5>&copy; 2020 Michael Stallings</h5>
            </a>
        </div>
        </footer>
        </Container>
    </React.Fragment>
    )
}

