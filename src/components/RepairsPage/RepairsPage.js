import * as React from 'react';
import NavBar from '../NavBar/NavBar';
import SecondaryNavBar from '../SecondaryNavBar/SecondaryNavBar';

import styles from './RepairsPage.module.css';

const RepairsPage = () => {

    return (
        <div className={styles.pageContainer}>
            <NavBar />
            <SecondaryNavBar />
        </div>
    )
}

export default RepairsPage;