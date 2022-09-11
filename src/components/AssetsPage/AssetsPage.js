import * as React from 'react';
import { Table } from '@douyinfe/semi-ui';
import NavBar from '../NavBar/NavBar';
import { ASSETS } from '../../mock/assets';

import styles from './AssetsPage.module.css';

const AssetsPage = () => {
    console.log(ASSETS);
    return (
        <div className={styles.pageContainer}>
            <NavBar />
        </div>
    )
}


export default AssetsPage;