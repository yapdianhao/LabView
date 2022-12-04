import * as React from 'react';
import QRCode from 'react-qr-code'
import styles from './Utilization.module.css';

const Utilization = (props) => {

    const { asset } = props;

    return (
        <div className={styles.pageContainer}>
            <button className={styles.utilStartBtn}>
                Start
            </button>
            <p>
                Total Utilization: 
            </p>
            <QRCode 
                size={132}
                value={'https://www.youtube.com/'}
            />
        </div>
    )
}

export default Utilization;