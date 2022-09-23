import * as React from 'react';
import { Calendar } from '@douyinfe/semi-ui';

import styles from './Calendar.module.css'

const CommonCalendar = (props) => {
    const { mode } = props;
    return (
        <div className={styles.calendarContainer}>
            <Calendar 
                mode={mode}
                showCurrTime={true}
                className={styles.calendar}
                markWeekend={true}
            />
        </div>
    )
}

export default CommonCalendar;
