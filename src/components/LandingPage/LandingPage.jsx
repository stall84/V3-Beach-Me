import React from 'react';
import { connect } from 'react-redux';

import styles from './landingPage.module.css';

import { TestComp } from '../TestComp/TestComp';


/***  Material UI Components ***/ 
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";


export const LandingPage = () => (
    <React.Fragment>
        <Container maxWidth='xl' >
            
                <header >
                    <h1>BEACH ME</h1>
                </header>
                <div>
                    <h2 className={styles.h2}>
                        Font?
                    </h2>
                    <h3>
                        Check
                    </h3>
                    <Button className={styles.button}> Fork </Button>
                </div>

        <TestComp />

        </Container>
    </React.Fragment>
)