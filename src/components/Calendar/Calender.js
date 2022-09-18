import * as React from 'react';
import { Calendar } from '@douyinfe/semi-ui';

import styles from './Calendar.module.css'

const CommonCalendar = () => {
    return (
        <div className={styles.calendarContainer}>
            <Calendar 
                mode="month"
                showCurrTime={true}
                className={styles.calendar}
                markWeekend={true}
            />
        </div>
    )
}

export default CommonCalendar;
