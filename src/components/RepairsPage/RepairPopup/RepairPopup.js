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
            </div>
        </div>
    );
}

export default RepairPopup;
