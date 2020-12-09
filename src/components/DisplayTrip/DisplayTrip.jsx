import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import { timeConverter } from '../../utilities/utilities';
import styles from './displayTrip.module.css';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';





 function TripCards(props) {
        const latitude = useSelector((state) => state.latitude);
        const longitude = useSelector((state) => state.longitude);
        const beachFive = useSelector((state) => state.beaches);

    
        if (beachFive === null) {
            return <h2>JUST A MOMENT WHILE WE LOAD YOUR BEACHES ;)</h2>;
        }
       
        return (
                     
                <Card className={styles.base_style}  key={props.id}>
                <CardHeader  title={props.trip.name} />

                <CardContent>
                <a className={styles.anchor_tag} target='_blank' rel='noopener noreferrer' href={`https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${props.trip.name}&travelmode=driving`}>
                    {timeConverter(props.trip.dur)}
                </a>
                </CardContent>
          
                </Card>
        )
    }


export function DisplayTrip (props) {

    const beachFive = useSelector((state) => state.beaches);

    

    if (beachFive === null) {
        return <h2>JUST A MOMENT WHILE WE LOAD YOUR BEACHES ;)</h2>;
    }

    return beachFive.map((trip, i) => {
    return (
    
            <TripCards key={i} id={i} trip={trip} />         

    )

})
}