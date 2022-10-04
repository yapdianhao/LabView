import * as React from 'react';
import Overview from './Overview/Overview';
import PmCalOq from './PmCalOq/PmCalOq';
import Utilization from './Utilization/Utilization';
import Repair from './Repair/Repair';
import Consumables from './Consumables/Consumables';
import { useHistory } from 'react-router-dom';
import { IconClose } from '@douyinfe/semi-icons';

import styles from './EditAssetsPage.module.css';

const EditAssetsPage = () => {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.header}>
                <div>
                    Nav bar
                </div>
                <IconClose className={styles.closeIcon} />
            </div>
        </div>
    );
};

export default EditAssetsPage;