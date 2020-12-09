import React, {useEffect} from 'react';
import { connect, useSelector } from 'react-redux';


import styles from './testComp.module.css';


export function TestComp (props) {

    const sBs = useSelector((state) => state.searchBeaches);
    

    // To temporarily avoid using the Redux-Thunk library. We're adding a null-check here to conditionally render this component.
    // This will wait for the API call-out to resolve and set Redux state, then render the component once that data settles.
    if(sBs === null) {
        return <h2>PLEASE WAIT WHILE WE LOAD YOUR BEACHES...</h2>;
    }

    return (
        <div className={styles.label}>
            <h3>INPUT FORM</h3>
            
        
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