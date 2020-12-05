import React from 'react';
import { connect } from 'react-redux';

import styles from './testComp.css';


export const TestComp = () => (
    <div className={styles.label}>
        <h3>INPUT FORM</h3>
        <form>   
            <label  for="username">Username: </label>
            <input type="text" id="username"></input>
        </form>
    </div>
)