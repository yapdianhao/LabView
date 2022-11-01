import * as React from 'react';
import axios from 'axios';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { GET_A_VENDOR } from '../../../api';

import styles from './CommonSummary.module.css';

const CommonSummary = (props) => {

    const { asset } = props;
    const [repairVendor, setRepairVendor] = React.useState({});
    const [pmCalOqVendor, setPmCalOqVendor] = React.useState({});
    console.log('common summary', asset);

    const getRepairVendor = async () => {
        const vendorFromAPI = await axios.get(GET_A_VENDOR, {
            params: {
                id: asset.repair_vendor
            }
        });
        
        if (vendorFromAPI.status === 200) {
            setRepairVendor(vendorFromAPI.data?.[0]);
        }
    }

    const getPmCalOqVendor = async() => {
        const vendorFromAPI = await axios.get(GET_A_VENDOR, { 
            params: {
                id: asset.pm_cal_oq_vendor
            }
        });

        if (vendorFromAPI.status === 200) {
            setPmCalOqVendor(vendorFromAPI.data?.[0]);
        }
    }

    React.useState(() => {
        getRepairVendor();
        getPmCalOqVendor();
    })

    console.log(asset);

    return (
        <div>
            <div className={styles.title}>
                {asset.id}
            </div>
            <div className={styles.summaryContainer}>
                <div className={styles.summaryCol}>
                    <div className={styles.attrContainer}>
                        <div className={styles.key}>
                            Model
                        </div>
                        <div className={styles.value}>
                            {asset.model}
                        </div>
                    </div>
                    <div className={styles.attrContainer}>
                        <div className={styles.key}>
                            Serial
                        </div>
                        <div className={styles.value}>
                            {asset.serial}
                        </div>
                    </div>
                    <div className={styles.attrContainer}>
                        <div className={styles.key}>
                            Level
                        </div>
                        <div className={styles.value}>
                            {asset.level}
                        </div>
                    </div>
                    <div className={styles.attrContainer}>
                        <div className={styles.key}>
                            Instrument Description
                        </div>
                        <div className={styles.value}>
                            {asset.instrument_description}
                        </div>
                    </div>
                    <div className={styles.attrContainer}>
                        <div className={styles.key}>
                            USP 1058
                        </div>
                        <div className={styles.value}>
                            {asset.usp1058}
                        </div>
                    </div>
                    <div className={styles.attrContainer}>
                        <div className={styles.key}>
                            Repair Vendor
                        </div>
                        <div className={styles.value}>
                            <div>
                                <div className={styles.moreDetails}>{repairVendor?.name}</div>
                                <div className={styles.moreDetails}>{repairVendor?.phone_1}</div>
                                <div className={styles.moreDetails}>{repairVendor?.email_1}</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.attrContainer}>
                        <div className={styles.key}>
                            PM/Cal/OQ Vendor
                        </div>
                        <div className={styles.value}>
                            <div>
                                <div className={styles.moreDetails}>{pmCalOqVendor?.name}</div>
                                <div className={styles.moreDetails}>{pmCalOqVendor?.phone_1}</div>
                                <div className={styles.moreDetails}>{pmCalOqVendor?.email_1}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.summaryCol}>
                    <div className={styles.attrContainer}>
                        <div className={styles.key}>
                            Location
                        </div>
                        <div className={styles.value}>
                            {asset.location}
                        </div>
                    </div>
                    <div className={styles.attrContainer}>
                        <div className={styles.key}>
                            Install date
                        </div>
                        <div className={styles.value}>
                            {asset.installation_date.toLocaleDateString()}
                        </div>
                    </div>
                    <div className={styles.attrContainer}>
                        <div className={styles.key}>
                            Next PM
                        </div>
                        <div className={styles.value}>
                            <div>
                                <div className={styles.moreDetails}>Unknown</div>
                                <div className={styles.moreDetails}>
                                    <div className={styles.icon}>
                                        <FaRegCalendarAlt />
                                    </div>
                                    Unknown
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.attrContainer}>
                        <div className={styles.key}>
                            Next Cal
                        </div>
                        <div className={styles.value}>
                            <div>
                                <div className={styles.moreDetails}>Unknown</div>
                                <div className={styles.moreDetails}>
                                    <div className={styles.icon}>
                                        <FaRegCalendarAlt />
                                    </div>
                                    Unknown
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.attrContainer}>
                        <div className={styles.key}>
                            Next OQ
                        </div>
                        <div className={styles.value}>
                            <div>
                                <div className={styles.moreDetails}>Unknown</div>
                                <div className={styles.moreDetails}>
                                    <div className={styles.icon}>
                                        <FaRegCalendarAlt />
                                    </div>
                                    Unknown
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CommonSummary;