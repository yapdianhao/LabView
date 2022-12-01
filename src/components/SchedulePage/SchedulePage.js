import * as React from 'react';
import NavBar from '../NavBar/NavBar';
import SecondaryNavBar from '../SecondaryNavBar/SecondaryNavBar';
import CommonCalendar from '../Calendar/Calender';
import { Select } from '@douyinfe/semi-ui';

import styles from './SchedulePage.module.css';

const SchedulePage = () => {
    const modes = [
        { value: 'day', label: 'day', otherKey: 0},
        { value: 'week', label: 'week', otherKey: 1}, 
        { value: 'month', label: 'month', otherKey: 2}
    ];

    const [calendarMode, setCalendarMode] = React.useState('month');

    return (
        <div className={styles.pageContainer}>
            <NavBar />
            <SecondaryNavBar />
            <div className={styles.calendarModeSelection}>
                <Select defaultValue={calendarMode} optionList={modes} onChange={setCalendarMode}>
                </Select>
            </div>
            <CommonCalendar mode={calendarMode} />
        </div>
    );
}

export default SchedulePage;