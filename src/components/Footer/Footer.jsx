import React from 'react'

import { Link } from 'react-router-dom';

import styles from './footer.module.css';

export function Footer() {
    return (
        <footer>
            <div className={styles.footer}>
                <div>
                    <a target='_blank' href='https://github.com/stall84'>
                        <h5>&copy; 2020 Michael Stallings</h5>
                    </a>
                </div>
                <div>
                    <Link to='/mobile-app'>
                        <h5>Checkout the mobile app</h5>
                    </Link>
                </div>
            </div>
        </footer>
    )
}
