import * as React from 'react';
import NavBar from '../NavBar/NavBar';
import CommonCalendar from '../Calendar/Calender';

import styles from './SchedulePage.module.css';

const SchedulePage = () => {
    return (
        <div className={styles.pageContainer}>
            <NavBar />
            <CommonCalendar />
        </div>
    );
}

export default SchedulePage;