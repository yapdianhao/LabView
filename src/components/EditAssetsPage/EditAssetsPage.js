import * as React from 'react';
import axios from 'axios';
import Overview from './Overview/Overview';
import PmCalOq from './PmCalOq/PmCalOq';
import Utilization from './Utilization/Utilization';
import Repair from './Repair/Repair';
import Consumables from './Consumables/Consumables';
import AssetInformation from './AssetInformation/AssetInformation';
import { GET_AN_ASSET, GET_ALL_VENDORS, GET_ALL_FREQUENCIES, EDIT_ASSSET } from '../../api';
import { IoCloseSharp } from 'react-icons/io5';
import { BsDownload } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { IconClose } from '@douyinfe/semi-icons';
import { transformAsset } from '../../utils';

import styles from './EditAssetsPage.module.css';
import CommonSummary from './CommonSummary/CommonSummary';
import ServiceSummary from './ServiceSummary/ServiceSummary';

const EditAssetsPage = () => {

    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const [selectedTabIndex, setSelectedTabIndex] = React.useState(0);
    const [asset, setAsset] = React.useState({});
    const [vendors, setVendors] = React.useState([]);
    const [frequencies, setFrequencies] = React.useState([]);
    const navigate = useNavigate();

    const getAsset = async () => {
        const assetFromAPI = await axios.get(GET_AN_ASSET, {
            params: {
                id: id
            }
        });

        if (assetFromAPI.status === 200) {
            setAsset(transformAsset(assetFromAPI.data?.[0]));
        }
    }

    const getVendors = async() => {
        const vendorsFromAPI = await axios.get(GET_ALL_VENDORS);
        if (vendorsFromAPI.status === 200) {
            setVendors(vendorsFromAPI.data);
        }
    }

    const getFrequencies = async() => {
        const frequenciesFromAPI = await axios.get(GET_ALL_FREQUENCIES);
        if (frequenciesFromAPI.status === 200) {
            setFrequencies(frequenciesFromAPI.data);
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const assetFromAPI = await axios.post(EDIT_ASSSET, {
            asset: asset
        });
        console.log(assetFromAPI);
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

    const goBack = () => {
        navigate('/assets');
    };

    const handleInputChange = (event) => {
        setAsset({ ...asset, [event.target.name]: event.target.value });
        console.log(asset);
    }

    const renderLeftSection = () => {
        switch (selectedTabIndex) {
            case 0:
                return (
                    <AssetInformation 
                        asset={asset} 
                        vendors={vendors}
                        handleInputChange={handleInputChange}
                    />
                );
            default:
                return (
                    <CommonSummary asset={asset} />
                )
        }
    }

    const renderRightSection = () => {
        switch (selectedTabIndex) {
            case 0:
                return (
                    <ServiceSummary
                        asset={asset}
                        frequencies={frequencies}
                        handleSubmit={handleSubmit}
                        handleInputChange={handleInputChange}
                    />
                )
            default:
                return (
                    <div>???</div>
                )
        }
    }

    React.useEffect(() => {
        getAsset();
        getFrequencies();
        getVendors();
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
                {renderLeftSection()}
            </div>
            {/* RIGHT PANEL */}
            <div className={styles.rightSection}>
                <div className={styles.rightHeader}>
                    <IconClose className={styles.closeIcon} onClick={goBack}/>
                </div>
                {renderRightSection()}
            </div>
            
        </div>
    );
};

export default EditAssetsPage;