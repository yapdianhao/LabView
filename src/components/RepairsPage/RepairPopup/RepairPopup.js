import * as React from 'react';
import axios from 'axios';
import { IoCloseSharp } from 'react-icons/io5';
import { GET_ALL_VENDORS } from '../../../api';
import { transformDateToStringYYMMDD, transformDateToStringHHMM } from '../../../utils';
import { BsUpload, BsDownload } from 'react-icons/bs';
import { IconWrench, IconMail, IconUserCardPhone, IconDelete } from '@douyinfe/semi-icons';
import { Select, TextArea, Input, Button } from '@douyinfe/semi-ui';

import styles from './RepairPopup.module.css';

const RepairPopup = (props) => {

    const { repairToEdit, onClose } = props;
    const [isOpen, setIsOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [vendors, setVendors] = React.useState([]);

    console.log(repairToEdit);
    console.log(transformDateToStringHHMM(repairToEdit.originalRecovered), transformDateToStringHHMM(repairToEdit.originalReported));

    const handleToggleDropDown = async () => {
        if (!isOpen) { // open, just close no need call API
            try {
                setLoading(true);
                // testing loading component
                const vendorsFromAPI = await axios.get(GET_ALL_VENDORS);
                if (vendorsFromAPI.status === 200) {
                    setVendors(vendorsFromAPI.data.map(vendor => {
                        return { 
                            label: vendor.name,
                            value: vendor.id
                        }
                    }));
                }
            }
            catch (e) {
                console.log(e);
            }
            finally {
                console.log(vendors);
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
                        <div className={styles.vendorSelectFieldName}>Vendor</div>
                        <Select
                            defaultValue={repairToEdit.repairVendor}
                            loading={loading}
                            onDropdownVisibleChange={handleToggleDropDown}
                            optionList={vendors}
                        />
                    </div>
                </div>
                <form>
                    <div className={styles.problemSection}>
                        <div className={styles.vendorSelectContainer}>
                            <div className={styles.vendorSelectFieldName}>Problem</div>
                            <TextArea
                                name="problem"
                                value={repairToEdit.problem} 
                            />
                        </div>
                        <div className={styles.vendorSelectContainer}>
                            <div className={styles.vendorSelectFieldName}>Solution</div>
                            <TextArea
                                name="solution"
                                value={repairToEdit.solution}
                            />
                        </div>
                    </div>
                    <div className={styles.problemSection}>
                        <div className={styles.shortInput}>
                            <div className={styles.vendorSelectFieldName}>Report Date</div>
                            <Input 
                                type="date"
                                value={transformDateToStringYYMMDD(repairToEdit.originalReported)}
                            />
                        </div>
                        <div className={styles.shortInput}>
                            <div className={styles.vendorSelectFieldName}>Time</div>
                            <Input
                                type="time"
                                value={transformDateToStringHHMM(repairToEdit.originalReported)}
                            />
                        </div>
                        <div className={styles.shortInput}>
                            <div className={styles.vendorSelectFieldName}>Recover Date</div>
                            <Input
                                type="date" 
                                value={transformDateToStringYYMMDD(repairToEdit.originalRecovered)}
                            />
                        </div>
                        <div className={styles.shortInput}>
                            <div className={styles.vendorSelectFieldName}>
                                Time
                            </div>
                            <Input
                                type="time"
                                value={transformDateToStringHHMM(repairToEdit.originalRecovered)}
                            />
                        </div>
                    </div>
                    <div className={styles.problemSection}>
                        <div className={styles.shortInput}>
                            <div className={styles.vendorSelectFieldName}>Parts Cost ($)</div>
                            <Input
                                type="number"
                                value={repairToEdit.partCost}
                            />
                        </div>
                        <div className={styles.shortInput}>
                            <div className={styles.vendorSelectFieldName}>Labor Cost ($)</div>
                            <Input
                                type="number"
                                value={repairToEdit.laborCost}
                            />
                        </div>
                        <div className={styles.shortInput}>
                            <div className={styles.vendorSelectFieldName}>First Visit Complete</div>
                            <Select value={repairToEdit.firstVisitComplete}>
                                <Select.Option value={1}>Yes</Select.Option>
                                <Select.Option value={0}>No</Select.Option>
                            </Select>
                        </div>
                        <div className={styles.shortInput}>
                            <button className={styles.submitBtn}>Save</button>
                        </div>
                    </div>
                </form>
                <div className={styles.btnContainer}>
                    <Button 
                        theme="borderless"
                        className={styles.btn}
                        style={{ color: "var(--error-color-1)" }}
                        icon={<IconDelete />}
                    >
                        Delete
                    </Button>
                    <Button
                        theme="borderless"
                        className={styles.btn}
                        style={{ color: "var(--theme-color-1)" }}
                        icon={<BsUpload />}
                    >
                        Upload Report
                    </Button>
                    <Button
                        theme="borderless"
                        className={styles.btn}
                        style={{ color: "var(--text-color-2)" }}
                        icon={<BsDownload />}
                    >
                        Download Report
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default RepairPopup;
