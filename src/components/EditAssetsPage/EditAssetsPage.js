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

    React.useEffect(() => {
        getAsset();
        getFrequencies();
        getVendors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log(asset);
    console.log(vendors);
    console.log(frequencies);

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
                {/* <div className={styles.mainTitle}>
                    Asset Information
                    <div className={styles.inUseIcon} />
                    <div className={styles.inUseText}>Not in use</div>
                </div>
                <form className={styles.assetForm} onSubmit={handleSubmit}>
                    <div className={styles.firstRow}>
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
                    </div>
                    <div className={styles.firstRow}>
                        <label>
                            Install Date
                            <input type="date" name='installation_date' onChange={handleInputChange} />
                        </label>
                        <label>
                            location
                            <input name='location' onChange={handleInputChange} />
                        </label>
                        <label>
                            Instrument Cost ($)
                            <input name='instrument_cost' onChange={handleInputChange} />
                        </label>
                        <label>
                            Activation Date
                            <input type="date" name='activation_date' onChange={handleInputChange} />
                        </label>
                    </div>
                    <div className={styles.firstRow}>
                        <label>
                            Asset Level
                            <select defaultValue={'DEFAULT'} name='asset_level' onChange={handleInputChange}>
                                <option value="DEFAULT" disabled hidden>-- Not Set --</option>
                                <option value='standard'>Standard</option>
                                <option value='critical'>Critical</option>
                                <option value='high-critical'>High Critical</option>
                            </select>
                        </label>
                        <label>
                            USP 1058 Category
                            <select name='usp1058' onChange={handleInputChange}>
                                <option selected disabled hidden>-- Not Set --</option>
                                <option>A</option>
                                <option>B</option>
                                <option>C</option>
                            </select>
                        </label>
                        <div className={styles.longField}>
                            <label>
                                Instrument description
                                <input className={styles.longField} name='instrument_description' onChange={handleInputChange} />
                            </label>
                        </div>
                    </div>
                    <div className={styles.firstRow}>
                        <div className={styles.longField}>
                            <label>
                                PM/Cal/OQ Vendor
                                <select name='pm_cal_oq_vendor' onChange={handleInputChange}>
                                    <option value='DEFAULT' disabled hidden>--Not Set --</option>
                                    {vendors.map(vendor => (
                                        <option value={vendor.id} selected={vendor.id === asset.pm_cal_oq_vendor ? "selected": ""}>{vendor.name}</option>
                                    ))}
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className={styles.firstRow}>
                        <div className={styles.longField}>
                            <label>
                                Repair Vendor
                                <select name='repair_vendor' onChange={handleInputChange}>
                                    <option value='DEFAULT' disabled hidden>-- Not Set --</option>
                                    {vendors.map(vendor => (
                                        <option value={vendor.id} selected={vendor.id === asset.repair_vendor ? "selected": ""}>{vendor.name}</option>
                                    ))}
                                </select>
                            </label>
                        </div>
                    </div>
                </form> */}
                {renderLeftSection()}
            </div>
            {/* RIGHT PANEL */}
            <div className={styles.rightSection}>
                <div className={styles.rightHeader}>
                    <IconClose className={styles.closeIcon} onClick={goBack}/>
                </div>
                <div className={styles.mainTitle}>
                    Service Entitlement
                </div>
                <form className={styles.assetForm} onSubmit={handleSubmit}>
                    <div className={styles.firstRow}>
                        <label>
                            PM Frequency
                            <select>
                                <option value='DEFAULT' disabled hidden>-- Not Set --</option>
                                {frequencies.map(frequency => (
                                    <option value={frequency.id} selected={frequency.id === asset.pm_freq ? "selected" : ""}>{frequency.description}</option>
                                ))}
                            </select>
                        </label>
                        <label>
                            Cal Frequency
                            <select>
                                <option value='DEFAULT' disabled hidden>-- Not Set --</option>
                                {frequencies.map(frequency => (
                                    <option value={frequency.id} selected={frequency.id === asset.cal_freq ? "selected" : ""}>{frequency.description}</option>
                                ))}
                            </select>
                        </label>
                    </div>
                    <div className={styles.firstRow}>
                        <div className={`${styles.longField} ${styles.hugeInput}`}>
                            <label>
                                PM Details
                                <textarea name="pm_detail"></textarea>
                            </label>
                        </div>
                        <div className={`${styles.longField} ${styles.hugeInput}`}>
                            <label>
                                PM Details
                                <textarea name="cal_detail"></textarea>
                            </label>
                        </div>
                    </div>
                    <div className={styles.firstRow}>
                        <div className={styles.halfWidth}>
                            <label>
                                OQ Frequency
                                <select>
                                    {frequencies.map(frequency => (
                                        <option value={frequency.id} selected={frequency.id === asset.oq_freq ? "selected" : ''}>{frequency.description}</option>
                                    ))}
                                </select>
                            </label>
                        </div>
                        <div className={styles.halfWidth}>
                            <label>
                                Contact Start Date
                                <input type="date"/>
                            </label>
                            <label>
                                Contract End Date
                                <input type="date"/>
                            </label>
                        </div>
                    </div>
                    <div className={styles.firstRow}>
                        <div className={`${styles.longField} ${styles.hugeInput}`}>
                            <label>
                                PM Details
                                <textarea name="pm_detail"></textarea>
                            </label>
                        </div>
                        <div className={`${styles.longField} ${styles.hugeInput}`}>
                            <label>
                                PM Details
                                <textarea name="cal_detail"></textarea>
                            </label>
                        </div>
                    </div>
                    <div className={styles.firstRow}>
                        <div className={styles.halfWidth}>
                            <label>
                                Labour Entitlement
                                <select>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </label>
                            <label>
                                Parts Entitlement
                                <select>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </label>
                        </div>
                        <div className={styles.halfWidth}>
                            <label>
                                Maintenance cost
                                <input />
                            </label>
                            <label>
                                ISO 17025
                                <select>
                                    <option>Yes</option>
                                    <option>No</option>N
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className={styles.formControlContainer}>
                        <div className={styles.disable}>
                            <IoCloseSharp />
                            <p>Disable</p>
                        </div>
                        <div className={styles.download}>
                            <BsDownload />
                            <p>Download Data</p>
                        </div>
                        <div className={styles.submitBtnContainer}>
                            <button className={styles.submitBtn} type="submit">Save</button>
                        </div>
                    </div>
                </form>
            </div>
            
        </div>
    );
};

export default EditAssetsPage;