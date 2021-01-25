import React from 'react'
import { Link } from 'react-router-dom';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

/***  Material UI Components ***/ 
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

export function MobileApp() {

    return (
        <Container maxWidth='xl' disableGutters={true}>
            <Grid container>
                <Link to='/'>
                    <Header />
                </Link>               
                <div>
                    <h2>Check out the Beach-Me Mobile App!</h2>
                </div>
            </Grid>
            <Footer />
        </Container>
    );

};


