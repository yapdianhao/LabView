import * as React from 'react';
import axios from 'axios';
import Overview from './Overview/Overview';
import PmCalOq from './PmCalOq/PmCalOq';
import Utilization from './Utilization/Utilization';
import Repair from './Repair/Repair';
import Consumables from './Consumables/Consumables';
import { GET_AN_ASSET } from '../../api';
import { useHistory, useParams } from 'react-router-dom';
import { IconClose } from '@douyinfe/semi-icons';

import styles from './EditAssetsPage.module.css';

const EditAssetsPage = () => {

    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const [selectedTabIndex, setSelectedTabIndex] = React.useState(0);
    const [asset, setAsset] = React.useState({});

    const getAsset = async () => {
        const assetsFromAPI = await axios.get(GET_AN_ASSET, {
            params: {
                id: id
            }
        });
    }

    const tabNames = [
        'Overview',
        'Utilization',
        'Repair',
        'PM/Cal/Oq',
        'Consumables',
    ];

    const handleChangeTab = (index) => {
        setSelectedTabIndex(index);
    }

    const renderPageBody = () => {
        switch (selectedTabIndex) {
            case 0:
                return <div>0</div>;
            case 1:
                return <div>1</div>;
            case 2:
                return <div>3</div>;
            case 3:
                return <div>4</div>;
            case 4:
                return <div>5</div>;
            default:
                return <div>0</div>
        }
    };

    React.useEffect(() => {
        getAsset();
    }, []);

    return (
        <div className={styles.pageContainer}>
            <div className={styles.leftSection}>
                <div className={styles.header}>
                    <div className={styles.tabBar}>
                        {tabNames.map((tabName, index) => (
                            <div 
                                key={index}
                                className={index === selectedTabIndex ? styles.tabItemSelected : styles.tabItem} 
                                onClick={() => handleChangeTab(index)}
                            >
                                {tabName}
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                </div>
            </div>
            <div className={styles.rightSection}>
                <div className={styles.rightHeader}>
                    <IconClose className={styles.closeIcon} />
                </div>
            </div>
        </div>
    );
};

export default EditAssetsPage;