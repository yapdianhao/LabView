import * as React from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { IconWrench } from '@douyinfe/semi-icons';

import styles from './RepairPopup.module.css';

const RepairPopup = (props) => {

    const { repairToEdit, onClose } = props;

    console.log(repairToEdit);

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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RepairPopup;
