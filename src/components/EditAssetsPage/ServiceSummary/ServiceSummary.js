import * as React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { BsDownload } from "react-icons/bs";
import { transformDateToStringYYMMDD } from "../../../utils";

import styles from "./ServiceSummary.module.css";

const ServiceSummary = (props) => {
  const { asset, frequencies, handleInputChange, handleSubmit } =
    props; 

  const [shouldShowConfirmationModal, setShouldShowConfirmationModal] =
    React.useState(false);

  console.log(asset);

  return (
    <div className={styles.summaryContainer}>
      <div className={styles.mainTitle}>Service Entitlement</div>
      <form className={styles.assetForm} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label>
            PM Frequency
            <select name="pm_freq" onChange={handleInputChange}>
              <option
                selected={!asset.pm_freq ? "selected" : ""}
                disabled
                hidden
              >
                -- Not Set --
              </option>
              {frequencies.map((frequency) => (
                <option
                  value={frequency.id}
                  selected={frequency.id === asset.pm_freq ? "selected" : ""}
                >
                  {frequency.description}
                </option>
              ))}
            </select>
          </label>
          <label>
            Cal Frequency
            <select name="cal_freq" onChange={handleInputChange}>
              <option
                selected={!asset.cal_freq ? "selected" : ""}
                disabled
                hidden
              >
                -- Not Set --
              </option>
              {frequencies.map((frequency) => (
                <option
                  value={frequency.id}
                  selected={frequency.id === asset.cal_freq ? "selected" : ""}
                >
                  {frequency.description}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className={styles.row}>
          <div className={`${styles.longField} ${styles.hugeInput}`}>
            <label>
              PM Details
              <textarea
                value={asset.pm_detail}
                name="pm_detail"
                onChange={handleInputChange}
              ></textarea>
            </label>
          </div>
          <div className={`${styles.longField} ${styles.hugeInput}`}>
            <label>
              Cal Details
              <textarea
                value={asset.cal_detail}
                name="cal_detail"
                onChange={handleInputChange}
              ></textarea>
            </label>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.halfWidth}>
            <label>
              OQ Frequency
              <select name="oq_freq" onChange={handleInputChange}>
                <option
                  selected={!asset.oq_freq ? "selected" : ""}
                  disabled
                  hidden
                >
                  -- Not Set --
                </option>
                {frequencies.map((frequency) => (
                  <option
                    value={frequency.id}
                    selected={frequency.id === asset.oq_freq ? "selected" : ""}
                  >
                    {frequency.description}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className={styles.halfWidth}>
            <label>
              Contact Start Date
              <input
                type="date"
                name="contract_start_date"
                value={transformDateToStringYYMMDD(asset.contract_start_date)}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Contract End Date
              <input
                type="date"
                name="contract_end_date"
                value={transformDateToStringYYMMDD(asset.contract_end_date)}
                onChange={handleInputChange}
              />
            </label>
          </div>
        </div>
        <div className={styles.row}>
          <div className={`${styles.longField} ${styles.hugeInput}`}>
            <label>
              OQ Details
              <textarea
                value={asset.oq_detail}
                name="oq_detail"
                onChange={handleInputChange}
              ></textarea>
            </label>
          </div>
          <div className={`${styles.longField} ${styles.hugeInput}`}>
            <label>
              Repair Contract Details
              <textarea
                value={asset.repair_detail}
                name="repair_detail"
                onChange={handleInputChange}
              ></textarea>
            </label>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.halfWidth}>
            <label>
              Labour Entitlement
              <select name="labour_entitlement" onChange={handleInputChange}>
                <option
                  disabled
                  hidden
                  selected={!asset.labour_entitlement ? "selected" : ""}
                >
                  --Not Set--
                </option>
                <option value={1}>Yes</option>
                <option value={0}>No</option>
              </select>
            </label>
            <label>
              Parts Entitlement
              <select>
                <option
                  disabled
                  hidden
                  selected={!asset.parts_entitlement ? "selected" : ""}
                >
                  --Not Set--
                </option>
                <option value={1}>Yes</option>
                <option value={0}>No</option>
              </select>
            </label>
          </div>
          <div className={styles.halfWidth}>
            <label>
              Maintenance cost
              <input
                type="number"
                name="maintenance_cost"
                onChange={handleInputChange}
                value={asset.maintenance_cost}
              />
            </label>
            <label>
              ISO 17025
              <select name="iso17025" onChange={handleInputChange}>
                <option
                  disabled
                  hidden
                  selected={!asset.iso17025 ? "selected" : ""}
                >
                  --Not Set--
                </option>
                <option value={1}>Yes</option>
                <option value={0}>No</option>
              </select>
            </label>
          </div>
        </div>
        <div className={styles.formControlContainer}>
          <div
            className={styles.disable}
            onClick={() => setShouldShowConfirmationModal(true)}
          >
            <IoCloseSharp />
            <p className={styles.buttonText}>Disable</p>
          </div>
          <div className={styles.download}>
            <BsDownload />
            <p className={styles.buttonText}>Download Data</p>
          </div>
          <div className={styles.submitBtnContainer}>
            <button className={styles.submitBtn} type="submit">
              Save
            </button>
          </div>
        </div>
      </form>
      {shouldShowConfirmationModal && (
        <div className={styles.confirmationModal}>
          <div
            className={styles.confirmationModalCloseBtn}
            onClick={() => setShouldShowConfirmationModal(false)}
          >
            <IoCloseSharp />
          </div>
          <div className={styles.confirmationPopup}>
            <p className={styles.confirmationTitle}>Confirm Disable?</p>
            <p className={styles.confirmationSubtitle}>
              <span>{asset.id} </span>
              <span>{asset.brand} </span>
              <span>{asset.model}</span>
            </p>
            <p className={styles.confirmationText}>
              The asset will be{" "}
              <span className={styles.confirmationTextBold}>disabled</span>. Are
              you sure?
            </p>
            <div>
              <button className={styles.confirmBtnNo}>No</button>
              <button className={styles.confirmBtnYes}>Yes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceSummary;
