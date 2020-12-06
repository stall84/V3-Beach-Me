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


const useStyles = makeStyles({
    grid_base: {
        padding: '24px'
    }
})


export const LandingPage = () => {
    const classes = useStyles();

    
    
    const [ scrollState, setScrollState ] = useState('logo')

    const scrollRef = React.useRef();
    scrollRef.current = scrollState;
    
    
    useEffect(() => {
       const handleScroll = () => {
           const show = window.scrollY > 100;
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
                            <h1 >BEACH ME</h1>
                    </header>
                </div>
                <Grid item xs={12} className={classes.grid_base} >
                    
                    
                    <div className={styles.sec1}>
                        <p>We're going to write a little test text out here to see what our nice Body-Font "Karla" looks like "in-the-wild".</p>
                        <h2 className={styles.h2}>
                            Font?
                        </h2>
                        <h3>
                            Check
                        </h3>
                        <Button className={styles.button}> Fork </Button>
                    </div>

                    <TestComp />
            </Grid>
        </Grid>
        </Container>
    </React.Fragment>
    )
}