import * as React from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { IconWrench, IconMail, IconUserCardPhone } from '@douyinfe/semi-icons';
import { Select } from '@douyinfe/semi-ui';

import styles from './RepairPopup.module.css';

const RepairPopup = (props) => {

    const { repairToEdit, onClose } = props;
    const [isOpen, setIsOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    console.log(repairToEdit);

    const handleToggleDropDown = async () => {
        if (!isOpen) { // open, just close no need call API
            try {
                setLoading(true);
                // testing loading component
                await new Promise(resolve => setTimeout(resolve, 2000));
            }
            catch (e) {
                console.log(e);
            }
            finally {
                setLoading(false);
            }
        }
        setIsOpen(!isOpen);
    }

    return (
        <div className={styles.editingModal}>
            <div className={styles.modalCloseBtn} onClick={onClose}>
                <IoCloseSharp />
            </div>
            <div className={styles.popupBody}>
                <div className={styles.title}>
                    <IconWrench className={styles.titleIcon} />
                    <span>Edit Repair</span>
                </div>
                <div className={styles.repairAssetId}>
                    {repairToEdit.assetId}
                </div>
                <div className={styles.fieldBodyContainer}>
                    <div className={styles.fieldCol}>
                        <div className={styles.fieldContainer}>
                            <div className={styles.fieldName}>Brand:</div>
                            <div>{repairToEdit.brand}</div>
                        </div>
                        <div className={styles.fieldContainer}>
                            <div className={styles.fieldName}>Model:</div>
                            <div>{repairToEdit.model}</div>
                        </div>
                        <div className={styles.fieldContainer}>
                            <div className={styles.fieldName}>Serial:</div>
                            <div>{repairToEdit.serial}</div>
                        </div>
                        <div className={styles.fieldContainer}>
                            <div className={styles.fieldName}>Labor Entitled:</div>
                            <div>
                                {repairToEdit.laborEntitled ? 'Yes' : 'No'}
                            </div>
                        </div>
                        <div className={styles.fieldContainer}>
                            <div className={styles.fieldName}>Parts Entitled:</div>
                            <div>
                                {repairToEdit.partsEntitled ? 'Yes' : 'No'}
                            </div>
                        </div>
                    </div>
                    <div className={styles.fieldCol}>
                        <div className={styles.fieldContainer}>
                            <div className={styles.fieldName}>Default Vendor:</div>
                            <div className={styles.fieldValue}>
                                <div>{repairToEdit.repairVendor}</div>
                                <div className={styles.vendorDetail}>
                                    <IconUserCardPhone />
                                    {repairToEdit.repairVendorPhone}
                                </div>
                                <div className={styles.vendorDetail}>
                                    <IconMail />
                                    {repairToEdit.repairVendorEmail}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.selectSection}>
                    <div className={styles.vendorSelectContainer}>
                        <div className={styles.fieldName}>Vendor:</div>
                        <Select
                            loading={loading}
                            onDropdownVisibleChange={handleToggleDropDown}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RepairPopup;
