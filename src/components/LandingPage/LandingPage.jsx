import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import styles from './landingPage.module.css';

import { TestComp } from '../TestComp/TestComp';


/***  Material UI Components ***/ 
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';





export const LandingPage = () => {
    

    
    
    const [ scrollState, setScrollState ] = useState('logo')

    const scrollRef = React.useRef();
    scrollRef.current = scrollState;
    
    
    useEffect(() => {
       const handleScroll = () => {
           const show = window.scrollY > 6;
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
                <Grid item xs={12} className={styles.grid_base} >
                    
                    
                    
                        <Button className={styles.button} > GET BEACHED! </Button>
                    

                    
                </Grid>
        </Grid>

        <TestComp />
        </Container>
    </React.Fragment>
    )
}