import * as React from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { BsDownload } from 'react-icons/bs';

import styles from './ServiceSummary.module.css';

const ServiceSummary = (props) => {

    const { asset, frequencies, handleInputChange, handleSubmit, setAsset } = props;
    console.log(frequencies);
    console.log(asset);

    const [shouldShowConfirmationModal, setShouldShowConfirmationModal] = React.useState(false);

    return (
        <div className={styles.summaryContainer}>
            <div className={styles.mainTitle}>
                    Service Entitlement
                </div>
                <form className={styles.assetForm} onSubmit={handleSubmit}>
                    <div className={styles.row}>
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
                    <div className={styles.row}>
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
                    <div className={styles.row}>
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
                    <div className={styles.row}>
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
                    <div className={styles.row}>
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
                        <div className={styles.disable} onClick={() => setShouldShowConfirmationModal(true)}>
                            <IoCloseSharp />
                            <p className={styles.buttonText}>Disable</p>
                        </div>
                        <div className={styles.download}>
                            <BsDownload />
                            <p className={styles.buttonText}>Download Data</p>
                        </div>
                        <div className={styles.submitBtnContainer}>
                            <button className={styles.submitBtn} type="submit">Save</button>
                        </div>
                    </div>
                </form>
                {shouldShowConfirmationModal && (
                    <div className={styles.confirmationModal}>
                        <div className={styles.confirmationModalCloseBtn} onClick={() => setShouldShowConfirmationModal(false)}>
                            <IoCloseSharp />
                        </div>
                        <div className={styles.confirmationPopup}>
                            <p className={styles.confirmationTitle}>
                                Confirm Disable?
                            </p>
                            <p className={styles.confirmationSubtitle}>
                                <span>{asset.id} </span>
                                <span>{asset.brand} </span>
                                <span>{asset.model}</span>
                            </p>
                            <p className={styles.confirmationText}>The asset will be <span className={styles.confirmationTextBold}>disabled</span>. Are you sure?</p>
                            <div>
                                <button className={styles.confirmBtnNo} onClick={() => setShouldShowConfirmationModal(false)}>
                                    No
                                </button>
                                <button className={styles.confirmBtnYes}>
                                    Yes
                                </button>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    );
}

export default ServiceSummary;