import * as React from "react";
import { transformDateToStringYYMMDD } from "../../../utils";

import styles from './AssetInformation.module.css';

const AssetInformation = (props) => {
  const { asset, vendors, handleInputChange } = props;

  return (
    <>
      <div className={styles.mainTitle}>
        Asset Information
        <div className={styles.inUseIcon} />
        <div className={styles.inUseText}>Not in use</div>
      </div>
      <form className={styles.assetForm}>
        <div className={styles.row}>
          <label>
            Asset ID
            <input
                name="id"
                value={asset.id}
                onChange={handleInputChange} 
            />
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
            <input
                name="serial"
                value={asset.serial}
                onChange={handleInputChange} 
            />
          </label>
        </div>
        <div className={styles.row}>
          <label>
            Install Date
            <input
              type="date"
              name="installation_date"
              value={transformDateToStringYYMMDD(asset.installation_date)}
              onChange={handleInputChange}
            />
          </label>
          <label>
            location
            <input
                name="location"
                onChange={handleInputChange}
                value={asset.location}
            />
          </label>
          <label>
            Instrument Cost ($)
            <input
                name="instrument_cost"
                onChange={handleInputChange}
                value={asset.instrument_cost}
            />
          </label>
          <label>
            Activation Date
            <input
              type="date"
              name="activation_date"
              value={transformDateToStringYYMMDD(asset.activation_date)}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className={styles.row}>
          <label>
            Asset Level
            <select
              name="asset_level"
              onChange={handleInputChange}
            >
              <option selected={!asset.asset_level ? "selected" : ""} disabled hidden>
                -- Not Set --
              </option>
              <option value="standard" selected={asset.asset_level === "standard" ? "selected" : ""}>Standard</option>
              <option value="critical"  selected={asset.asset_level === "critical" ? "selected" : ""}>Critical</option>
              <option value="high-critical"  selected={asset.asset_level === "high-critical" ? "selected" : ""}>High Critical</option>
            </select>
          </label>
          <label>
            USP 1058 Category
            <select name="usp1058" onChange={handleInputChange}>
              <option disabled hidden selected={!asset.usp1058 ? "selected" : ""}>
                -- Not Set --
              </option>
              <option value="A" selected={asset.usp1058 === "A" ? "selected" : ""}>A</option>
              <option value="B" selected={asset.usp1058 === "B" ? "selected" : ""}>B</option>
              <option value="C" selected={asset.usp1058 === "C" ? "selected" : ""}>C</option>
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
        <div className={styles.row}>
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
        <div className={styles.row}>
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
