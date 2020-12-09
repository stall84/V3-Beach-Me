import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { timeConverter } from '../../utilities/utilities';
import styles from './displayTrip.module.css';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';


const dummyArr = [
    {
        beachName: 'Destin',
        distance: '4hr 30min'
    },
    {
        beachName: 'Pensacola',
        distance: '3hr 45min'
    },
    {
        beachName: 'Sarasota',
        distance: '5hr 45min'
    },
    {
        beachName: 'Hilton Head Island',
        distance: '2hr 5min'
    },
    {
        beachName: 'Miami Beach',
        distance: '6hr 15min'
    }
];

    function TripCards(props) {
        const latitude = useSelector((state) => state.latitude);
        const longitude = useSelector((state) => state.longitude);
        const beachFive = useSelector((state) => state.beaches);
        return (
            <Card className={styles.base_style}>
            <CardHeader title={props.trip.name} />

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

    return (

            <React.Fragment>
        
            {beachFive.map((trip, i) => (
                <TripCards key={i} trip={trip} />
            ))}
            
            </React.Fragment>


    )

}