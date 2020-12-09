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
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';





export function LandingPage(props) {
    
    const [ scrollState, setScrollState ] = useState('logo')

    // destructuring out the addCoords and addSearchBeaches actions connected via react-redux connect passed in through props
    const { addCoords, addSearchBeaches } = props;

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
                            <h1 >BEACH ME </h1>
                    </header>
                </div>
                <Grid xs={12} className={styles.grid_base} >      
                        <DisplayTrip />                                
                </Grid>
        </Grid>
        </Container>
    </React.Fragment>
    )
}



// function mapDispatchToProps(dispatch) {
//     return {
//         addCoords: (payload) => {
//             return dispatch({ type: 'ADD_CORDS', payload });
//         },
//         addSearchBeaches: (payload) => {
//             return dispatch({ type: 'ADD_SEARCH_BEACHES', payload })
//         }
//     }
// }

// export const ConnectedLandingPage = connect(null, mapDispatchToProps)(LandingPage);