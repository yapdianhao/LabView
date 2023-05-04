import * as React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { BsGearWideConnected } from "react-icons/bs";
import { Input, TextArea, Button } from "@douyinfe/semi-ui";
import { IconDelete, IconSave } from "@douyinfe/semi-icons";
import styles from "./UtilizationPopup.module.css";
import { transformDateToStringHHMM, transformDateToStringYYMMDD } from "../../../utils";

const UtilizationPopup = (props) => {
  const { util, onClose } = props;
  const [utilToEdit, setUtilToEdit] = React.useState(util);

  return (
    <div className={styles.editingModal}>
      <div className={styles.modalCloseBtn} onClick={onClose}>
        <IoCloseSharp />
      </div>
      <div className={styles.popupBody}>
        <div className={styles.title}>
          <BsGearWideConnected className={styles.titleIcon} />
          <span>Utilization</span>
        </div>
        <div className={styles.subTitle}>
          <span>Asset: </span>
          <span className={styles.bold}>{`${utilToEdit.assetId} (`}</span>
          <span
            className={styles.bold}
          >{`${utilToEdit.brand} ${utilToEdit.model}`}</span>
          <span className={styles.bold}>{")"}</span>
        </div>
        <div className={styles.fieldBodyContainer}>
          <div className={styles.fieldCol}>
            <div className={styles.fieldName}>Start</div>
            <Input
              type="date" 
              value={transformDateToStringYYMMDD(utilToEdit.usedFromDate)}
            />
          </div>
          <div className={styles.fieldCol}>
            <div className={styles.fieldName}>Time</div>
            <Input
              type="time" 
              value={transformDateToStringHHMM(utilToEdit.usedFromDate)}
            />
          </div>
        </div>
        <div className={styles.fieldBodyContainer}>
          <div className={styles.fieldCol}>
            <div className={styles.fieldName}>Start</div>
            <Input
              type="date" 
              value={transformDateToStringYYMMDD(utilToEdit.usedToDate)}
            />
          </div>
          <div className={styles.fieldCol}>
            <div className={styles.fieldName}>Time</div>
            <Input
              type="time" 
              value={transformDateToStringHHMM(utilToEdit.usedToDate)}
            />
          </div>
        </div>
        <div className={`${styles.fieldName} ${styles.fieldBodyContainer}`}>
          <span>Duration: </span>
          <span className={styles.bold}>{utilToEdit.diff}</span>
        </div>
        <div className={styles.fieldBodyContainer}>
          <div className={styles.fieldCol}>
            <div className={styles.fieldName}>Remarks</div>
            <TextArea />
          </div>
        </div>
        <div className={styles.btnContainer}>
          <Button
          theme="light"
          icon={<IconDelete />}
          className={styles.btn}
          type="danger"
          >
            Delete
          </Button>
          <Button
          theme="solid"
          className={styles.btn}
          icon={<IconSave />}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UtilizationPopup;
