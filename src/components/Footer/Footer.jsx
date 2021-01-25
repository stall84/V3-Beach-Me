import React from 'react'

import styles from './footer.module.css';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <a target='_blank' href='https://github.com/stall84'>
                    <h5>&copy; 2020 Michael Stallings</h5>
                </a>
            </div>
        </footer>
    )
}
