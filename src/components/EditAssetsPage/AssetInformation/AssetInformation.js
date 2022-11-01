import * as React from "react";

import styles from './AssetInformation.module.css';

const AssetInformation = (props) => {
  const { asset, vendors, handleInputChange } = props;

  const transformDateToString = (dateTime) => {
    if (dateTime === null || dateTime === undefined) return '';
    const year = '' + dateTime.getFullYear();
    const month = dateTime.getMonth() < 10 ? '0' + dateTime.getMonth() : '' + dateTime.getMonth();
    const day = dateTime.getDate();
    console.log(year, month, day);
    return `${year}-${month}-${day}`;
  }

  return (
    <>
      <div className={styles.mainTitle}>
        Asset Information
        <div className={styles.inUseIcon} />
        <div className={styles.inUseText}>Not in use</div>
      </div>
      <form className={styles.assetForm}>
        <div className={styles.firstRow}>
          <label>
            Asset ID
            <input name="id" value={asset.id} onChange={handleInputChange} />
          </label>
          <label>
            Brand
            <input
              name="brand"
              value={asset.brand}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Model
            <input
              name="model"
              value={asset.model}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Serial
            <input name="serial" value={asset.serial} />
          </label>
        </div>
        <div className={styles.firstRow}>
          <label>
            Install Date
            <input
              type="date"
              name="installation_date"
              value={transformDateToString(asset.installation_date)}
              onChange={handleInputChange}
            />
          </label>
          <label>
            location
            <input name="location" onChange={handleInputChange} value={asset.location}/>
          </label>
          <label>
            Instrument Cost ($)
            <input name="instrument_cost" onChange={handleInputChange} value={asset.instrument_cost}/>
          </label>
          <label>
            Activation Date
            <input
              type="date"
              name="activation_date"
              value={transformDateToString(asset.activation_date)}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className={styles.firstRow}>
          <label>
            Asset Level
            <select
              defaultValue={"DEFAULT"}
              name="asset_level"
              onChange={handleInputChange}
            >
              <option value="DEFAULT" disabled hidden>
                -- Not Set --
              </option>
              <option value="standard">Standard</option>
              <option value="critical">Critical</option>
              <option value="high-critical">High Critical</option>
            </select>
          </label>
          <label>
            USP 1058 Category
            <select name="usp1058" onChange={handleInputChange}>
              <option selected disabled hidden>
                -- Not Set --
              </option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>
          </label>
          <div className={styles.longField}>
            <label>
              Instrument description
              <input
                className={styles.longField}
                name="instrument_description"
                value={asset.instrument_description}
                onChange={handleInputChange}
              />
            </label>
          </div>
        </div>
        <div className={styles.firstRow}>
          <div className={styles.longField}>
            <label>
              PM/Cal/OQ Vendor
              <select name="pm_cal_oq_vendor" onChange={handleInputChange}>
                <option value="DEFAULT" disabled hidden>
                  --Not Set --
                </option>
                {vendors.map((vendor) => (
                  <option
                    value={vendor.id}
                    selected={
                      vendor.id === asset.pm_cal_oq_vendor ? "selected" : ""
                    }
                  >
                    {vendor.name}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
        <div className={styles.firstRow}>
          <div className={styles.longField}>
            <label>
              Repair Vendor
              <select name="repair_vendor" onChange={handleInputChange}>
                <option value="DEFAULT" disabled hidden>
                  -- Not Set --
                </option>
                {vendors.map((vendor) => (
                  <option
                    value={vendor.id}
                    selected={
                      vendor.id === asset.repair_vendor ? "selected" : ""
                    }
                  >
                    {vendor.name}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </form>
    </>
  );
};

export default AssetInformation;
