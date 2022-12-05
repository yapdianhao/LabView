import * as React from 'react';
import { Table } from '@douyinfe/semi-ui';
import { TABLE_SIZE_LIST } from '../../../constants';
import QRCode from 'react-qr-code'
import styles from './Utilization.module.css';

const Utilization = (props) => {

    const { asset } = props;

    return (
        <div className={styles.pageContainer}>
            <button className={styles.utilStartBtn}>
                Start
            </button>
            <p className={styles.utilTitle}>
                Total Utilization: 
            </p>
            <p className={styles.timeText}>
                0h 0m (0%)
            </p>
            <QRCode 
                size={132}
                value={'https://www.youtube.com/'}
            />
        </div>
    )
}

export default Utilization;