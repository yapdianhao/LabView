import * as React from 'react';
import axios from 'axios';
import { IoCloseSharp } from 'react-icons/io5';
import { BsFillGearFill } from 'react-icons/bs';
import { Input, Button } from '@douyinfe/semi-ui';
import { IconSave } from '@douyinfe/semi-icons';
import styles from './ConsumablesPopup.module.css';
import { EDIT_CONSUMABLE } from '../../../api';
import { transformDateToStringHHMM, transformDateToStringYYMMDD, transformDateToStringDDMMYYHHMM } from '../../../utils';

const ConsumablesPopup = (props) => {
  const { consumable, onClose } = props;
  const [consumableToEdit, setConsumableToEdit] = React.useState(consumable);

  console.log(consumableToEdit);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post(EDIT_CONSUMABLE, {
      consumable: consumableToEdit
    });
    onClose();
  }

  return (
    <div className={styles.editingModal}>
      <div className={styles.modalCloseBtn} onClick={onClose}>
        <IoCloseSharp />
      </div>
      <div className={styles.popupBody}>
        <div className={styles.title}>
          <BsFillGearFill className={styles.titleIcon} />
          <span>Edit Consumable</span>
        </div>
        <div className={styles.subTitle}>
          {consumableToEdit.assetId}
        </div>
        <div className={styles.fieldBodyContainer}>
          <div className={styles.fieldCol}>
            <div className={styles.fieldName}>
              Brand: 
            </div>
            <div className={styles.fieldValue}>
              {consumableToEdit.brand}
            </div>
          </div>
          <div className={styles.fieldCol}>
            <div className={styles.fieldName}>
              Model: 
            </div>
            <div className={styles.fieldValue}>
              {consumableToEdit.model}
            </div>
          </div>
          <div className={styles.fieldCol}>
            <div className={styles.fieldName}>
              Serial: 
            </div>
            <div className={styles.fieldValue}>
              {consumableToEdit.serial}
            </div>
          </div>
        </div>
        <div className={styles.formArea}>
          <div className={styles.halfLength}>
            <p className={styles.label}>Description</p>
            <Input 
              value={consumableToEdit.description}
              onChange={(value) => setConsumableToEdit({
                ...consumableToEdit,
                description: value,
              })}
            />
          </div>
          <div className={styles.quarterLength}>
            <p className={styles.label}>Part No.</p>
            <Input 
              value={consumableToEdit.partNumber}
              onChange={(value) => setConsumableToEdit({
                ...consumableToEdit,
                partNumber: value
              })}
            />
          </div>
          <div className={styles.quarterLength}>
            <p className={styles.label}>Cost ($)</p>
            <Input 
              type="number"
              value={consumableToEdit.cost}
              onChange={(value) => setConsumableToEdit({
                ...consumableToEdit,
                cost: value,
              })}
            />
          </div>
        </div>
        <div className={styles.formArea}>
          <div className={styles.quarterLength}>
            <p className={styles.label}>Consume Date</p>
            <Input
              type="date"
              value={transformDateToStringYYMMDD(consumableToEdit.consumedOnDate)}
              onChange={(value) => {
                const newConsumedOn = new Date(
                  `${value} ${transformDateToStringHHMM(
                    consumableToEdit.consumedOnDate
                  )}`
                );
                setConsumableToEdit({
                  ...consumableToEdit,
                  consumedOnDate: newConsumedOn,
                  consumedOn: transformDateToStringDDMMYYHHMM(newConsumedOn)
                });
              }}
            />
          </div>
          <div className={styles.quarterLength}>
            <p className={styles.label}>Time</p>
            <Input 
              type="time"
              value={transformDateToStringHHMM(consumableToEdit.consumedOnDate)}
              onChange={(value) => {
                const newConsumedOn = new Date(
                  `${transformDateToStringYYMMDD(
                    consumableToEdit.consumedOnDate
                  )} ${value}`
                );
                console.log(newConsumedOn);
                setConsumableToEdit({
                  ...consumableToEdit,
                  consumedOnDate: newConsumedOn,
                  consumedOn: transformDateToStringDDMMYYHHMM(newConsumedOn)
                })
              }}
            />
          </div>
          <div className={styles.quarterLength} />
          <div className={styles.quarterLength}>
            <Button
              icon={<IconSave />}
              theme="solid"
              onClick={handleSubmit}
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsumablesPopup;