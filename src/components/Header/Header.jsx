import React, { useEffect, useState } from 'react'

import styles from './header.module.css';



export function Header() {

    const [ scrollState, setScrollState ] = useState('logo');

    const scrollRef = React.useRef();
    scrollRef.current = scrollState;

    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 2;
            if (show) {
                setScrollState('scrolling');
                
            } else {
                setScrollState('logo');
            }
        }
        document.addEventListener('scroll', handleScroll)
        
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
     }, [])


    return (
        <div className={styles.hero}>
            <header className={styles[scrollRef.current]}>
                <a href="#">
                    <h1>
                        BEACH ME
                    </h1>
                </a>
            </header>
        </div>
    )
}
