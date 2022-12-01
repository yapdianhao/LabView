import * as React from 'react';
import SecondaryNavBar from '../SecondaryNavBar/SecondaryNavBar';
import NavBar from '../NavBar/NavBar';

import styles from './UtilizationsPage.module.css';

const UtilizationsPage = () => {

    return (
        <div className={styles.pageContainer}>
            <NavBar />
            <SecondaryNavBar />
        </div>
    );
}

export default UtilizationsPage;