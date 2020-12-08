import React, {useEffect} from 'react';
import { connect, useSelector } from 'react-redux';

import {store} from '../../store'

import styles from './testComp.module.css';


export function TestComp (props) {

    const latit = useSelector((state) => state.latitude)
    const sBs = useSelector((state) => state.searchBeaches);

    // To temporarily avoid using the Redux-Thunk library. We're adding a null-check here to conditionally render this component.
    // This will wait for the API call-out to resolve and set Redux state, then render the component once that data settles.
    if(sBs === null) {
        return null;
    }

    return (
        <div className={styles.label}>
            <h3>INPUT FORM</h3>
            <h3>{latit}</h3>
        

                
            
            {/* <h3>{searchBeaches[0]}</h3> */}
            <ul>
            {
                sBs.map((beach, i) => <li key={i}>{beach.beachName}</li>)
                
            }
            </ul>
            <form>   
                <label  htmlFor="username">Username: </label>
                <input type="text" id="username"></input>
            </form>
        </div>
    )
}