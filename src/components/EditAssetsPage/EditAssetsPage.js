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
        const assetFromAPI = await axios.get(GET_AN_ASSET, {
            params: {
                id: id
            }
        });
        if (assetFromAPI.status === 200) {
            setAsset(assetFromAPI.data?.[0]);
        }
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

    const handleInputChange = (event) => {
        setAsset({ ...asset, [event.target.name]: event.target.value });
        console.log(asset);
    }

    React.useEffect(() => {
        getAsset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={styles.pageContainer}>
            {/* LEFT PANEL */}
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
                <div className={styles.mainTitle}>
                    Asset Information
                    <div className={styles.inUseIcon} />
                    <div className={styles.inUseText}>Not in use</div>
                </div>
                <form className={styles.assetForm}>
                    <label>
                        Asset ID
                        <input name="id" value={asset.id} onChange={handleInputChange} />
                    </label>
                    <label>
                        Brand
                        <input name="brand" value={asset.brand} onChange={handleInputChange} />
                    </label>
                    <label>
                        Model
                        <input name="model" value={asset.model} onChange={handleInputChange} />
                    </label>
                    <label>
                        Serial
                        <input name="serial" value={asset.serial} />
                    </label>
                </form>
            </div>
            {/* RIGHT PANEL */}
            <div className={styles.rightSection}>
                <div className={styles.rightHeader}>
                    <IconClose className={styles.closeIcon} />
                </div>
            </div>
        </div>
    );
};

export default EditAssetsPage;