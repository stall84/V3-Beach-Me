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


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    // media: {
    //   height: 0,
    //   paddingTop: '56.25%', // 16:9
    // },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    // avatar: {
    //   backgroundColor: red[500],
    // },
  }));


    function TripCards(props) {
        const latitude = useSelector((state) => state.latitude);
        const longitude = useSelector((state) => state.longitude);
        const beachFive = useSelector((state) => state.beaches);

        const classes = useStyles();
        const [expanded, setExpanded] = useState(false);

        const handleExpandClick = (i) => {
            setExpanded(!expanded);
        };

        return (
            <Card className={classes.root} key={props.key}>
            <CardHeader  title={props.trip.name} />

            <CardContent>
            <a className={styles.anchor_tag} target='_blank' rel='noopener noreferrer' href={`https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${props.trip.name}&travelmode=driving`}>
                {timeConverter(props.trip.dur)}
            </a>
            </CardContent>
            <CardActions disableSpacing>
            <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
            >
            <ExpandMoreIcon />
            </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
                <p>TEST AREA FOR WEATHER</p>
                <p>MORE TEST AREA</p>
            </CardContent>
            </Collapse>
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