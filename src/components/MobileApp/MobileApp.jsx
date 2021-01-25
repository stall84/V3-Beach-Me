import React from 'react'
import { Link } from 'react-router-dom';

import styles from './mobileApp.module.css';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

/***  Material UI Components ***/ 
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

export function MobileApp() {

    return (
        <Container maxWidth='xl' disableGutters={true}>
            <Grid container>
                <Link to='/'>
                    <Header />
                </Link>
                <Grid item xs={12} className={styles.grid_base}>              
                <div>
                    <h4>The Beach-Me mobile app is now available for iPhone in the Apple AppStore!</h4>
                </div>
                </Grid> 
                <Grid item xs={12} className={styles.info_help}>
                    <Card className={styles.card}>
                        <h5>
                            The mobile app works just like the web-app here, 
                            simply allow your phone to attain your current location, 
                            or enter the location you want to search for manually.
                        </h5>
                    </Card>
                    <Card className={styles.card}>
                        <h5>
                            If you experience any trouble with, 
                            or unexpected behavior while running the mobile-app, 
                            please send an email with details of problem to: <a href='mailto:beach-me@mail.com'>beach-me@mail.com</a>. 
                            And a representative will respond as soon as possible.

                        </h5>
                    </Card>
                </Grid>
                
            </Grid>
            <Footer />
        </Container>
    );

};


