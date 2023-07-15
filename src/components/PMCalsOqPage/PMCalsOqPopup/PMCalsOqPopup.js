import * as React from 'react';
import axios from 'axios';
import { GET_ALL_VENDORS, EDIT_PM_CAL_OQ } from '../../../api';
import { IoCloseSharp } from 'react-icons/io5';
import { IconUserCardPhone, IconMail, IconDelete, IconSave } from '@douyinfe/semi-icons';
import { TextArea, Button, Form } from '@douyinfe/semi-ui';
import styles from './PMCalsOqPopup.module.css';
import { transformDateToStringHHMM, transformDateToStringYYMMDD, transformDateToStringDDMMYYHHMM } from '../../../utils';

const PMCalsOqPopup = (props) => {
  const { pmCalOq, onClose } = props;
  
  const [isOpen, setIsOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [pmCalOqToEdit, setPmCalOqToEdit] = React.useState(pmCalOq);
  const [vendors, setVendors] = React.useState([]);

  console.log(pmCalOqToEdit);

  const handleSubmit = async (values) => {
    await axios.post(EDIT_PM_CAL_OQ, {
      pmCalOq: pmCalOqToEdit
    });
    onClose();
  }

  const handleToggleDropDown = async() => {
    if (!isOpen) {
      try {
        setLoading(true);
        const vendorsFromAPI = await axios.get(GET_ALL_VENDORS);
        if (vendorsFromAPI.status === 200) {
          setVendors(
            vendorsFromAPI.data.map((vendor) => {
              return {
                label: vendor.name,
                value: vendor.id
              }
            })
          )
        }
      } catch(e) {
        console.log(e);
      } finally {
        console.log(vendors);
        setLoading(false);
      }
    }
    setIsOpen(!isOpen);
  }

  const handleFormChange = (currentValues, changeValue) => {
    console.log('current values', currentValues);
    console.log('change value', changeValue);
    const changedKey = Object.keys(changeValue)[0];
    switch(changedKey) {
      case 'vendor_id':
        setPmCalOqToEdit({
          ...pmCalOqToEdit,
          pmCalOqVendorId: changeValue[changedKey]
        });
        break;
      case 'type':
        setPmCalOqToEdit({
          ...pmCalOqToEdit,
          type: changeValue[changedKey]
        });
        break;
      case 'is_routine':
        setPmCalOqToEdit({
          ...pmCalOqToEdit,
          isRoutine: changeValue[changedKey]
        });
        break;
      case 'completed_hour':
        let [completedHours, completedMinutes] = changeValue[changedKey].split(':');
        let updatedCompletedHour = pmCalOqToEdit.completedDateTime;
        updatedCompletedHour.setHours(parseInt(completedHours), parseInt(completedMinutes));
        setPmCalOqToEdit({
          ...pmCalOqToEdit,
          completedDateTime: updatedCompletedHour,
          completedTime: transformDateToStringDDMMYYHHMM(updatedCompletedHour)
        });
        break;
      case 'scheduled_hour':
        const [scheduledHours, scheduledMinutes] = changeValue[changedKey].split(':');
        let updatedScheduledHour = pmCalOqToEdit.scheduledDateTime;
        updatedScheduledHour.setHours(parseInt(scheduledHours), parseInt(scheduledMinutes));
        setPmCalOqToEdit({
          ...pmCalOqToEdit,
          scheduledDateTime: updatedScheduledHour,
          scheduledTime: transformDateToStringDDMMYYHHMM(updatedScheduledHour)
        });
        break;
      case 'scheduled_date':
        const [scheduledYear, scheduledMonth, scheduledDay] = changeValue[changedKey].split('-');
        let updatedScheduledDate = pmCalOqToEdit.scheduledDateTime;
        updatedScheduledDate.setFullYear(parseInt(scheduledYear), parseInt(scheduledMonth), parseInt(scheduledDay));
        setPmCalOqToEdit({
          ...pmCalOqToEdit,
          scheduledDateTime: updatedScheduledDate,
          scheduledTime: transformDateToStringDDMMYYHHMM(updatedScheduledDate)
        });
        break;
      case 'completed_date':
        const [completedYear, completedMonth, completedDay] = changeValue[changedKey].split('-');
        let updatedCompletedDate = pmCalOqToEdit.scheduledDateTime;
        updatedCompletedDate.setFullYear(parseInt(completedYear), parseInt(completedMonth), parseInt(completedDay));
        setPmCalOqToEdit({
          ...pmCalOqToEdit,
          completedDateTime: updatedCompletedDate,
          completedTime: transformDateToStringDDMMYYHHMM(updatedCompletedDate)
        });
        break;
      case 'remarks':
        setPmCalOqToEdit({
          ...pmCalOqToEdit,
          remarks: changeValue[changedKey]
        });
        break;
      default:
        break;
    }
  }

  console.log('pm cal oq to edit', pmCalOqToEdit);

  return (
    <div className={styles.editingModal}>
      <div className={styles.modalCloseBtn} onClick={onClose}>
        <IoCloseSharp />
      </div>
      <div className={styles.popupBody}>
        <div className={styles.title}>
          <span>Edit {pmCalOqToEdit.type}</span>
        </div>
        <div className={styles.assetId}>
          {pmCalOqToEdit.assetId}
        </div>
        {/* brand */}
        <div className={styles.fieldCol}>
          <div className={styles.fieldContainer}>
            <div className={styles.fieldName}>Brand:</div>
            <div>{pmCalOqToEdit.brand}</div>
          </div>
          {/* model */}
          <div className={styles.fieldContainer}>
            <div className={styles.fieldName}>Model:</div>
            <div>{pmCalOqToEdit.model}</div>
          </div>
          {/* serial */}
          <div className={styles.fieldContainer}>
            <div className={styles.fieldName}>Serial:</div>
            <div>{pmCalOqToEdit.serial}</div>
          </div>
          {/* default vendor */}
          <div className={styles.fieldContainer}>
            <div className={styles.fieldName}>Default Vendor:</div>
            <div className={styles.fieldValue}>
              <div>
                {pmCalOqToEdit.pmCalOqVendor}
              </div>
              <div className={styles.vendorDetail}>
                <IconUserCardPhone />
                {pmCalOqToEdit.pmCalOqVendorPhone}
              </div>
              <div className={styles.vendorDetail}>
                <IconMail />
                {pmCalOqToEdit.pmCalOqVendorEmail}
              </div>
            </div>
          </div>
          <Form onValueChange={handleFormChange} onSubmit={handleSubmit}>
            <div className={styles.selectArea}>
              <div className={styles.select}>
                <Form.Select
                  className={styles.select}
                  label="Vendor"
                  loading={loading}
                  initValue={pmCalOqToEdit.pmCalOqVendor}
                  onDropdownVisibleChange={handleToggleDropDown}
                  optionList={vendors}
                  field="vendor_id"
                />
              </div>
              <Form.Select
                className={styles.select}
                label="Type"
                initValue={pmCalOqToEdit.type}
                field="type"
              >
                <Form.Select.Option value="PM">PM</Form.Select.Option>
                <Form.Select.Option value="CAL">CAL</Form.Select.Option>
                <Form.Select.Option value="OQ">OQ</Form.Select.Option>
              </Form.Select>
              <Form.Select
                className={styles.select}
                label="Routine"
                initValue={pmCalOqToEdit.isRoutine}
                field="is_routine"
              >
                <Form.Select.Option value={1}>Yes</Form.Select.Option>
                <Form.Select.Option value={0}>No</Form.Select.Option>
              </Form.Select>
            </div>
            <div>
              <Form.TextArea initValue={pmCalOqToEdit.remarks || 'NA' } field="remarks" label="Remarks" />
            </div>
            <div className={styles.dateTimeArea}>
              <div className={styles.dateTimeInput}>
                <Form.Input
                  type="date"
                  label="Scheduled Date"
                  field="scheduled_date"
                  initValue={transformDateToStringYYMMDD(pmCalOqToEdit.scheduledDateTime)}
                  className={styles.dateTimeInput}
                />
              </div>
              <div className={styles.dateTimeInput}>
                <Form.Input
                  type="time"
                  label="Scheduled Time"
                  field="scheduled_hour"
                  initValue={transformDateToStringHHMM(pmCalOqToEdit.scheduledDateTime)}
                  className={styles.dateTimeInput}
                />
              </div>
            </div>
            <div className={styles.dateTimeArea}>
              <div className={styles.dateTimeInput}>
                <Form.Input
                  type="date"
                  label="Complete Date"
                  field="completed_date"
                  initValue={transformDateToStringYYMMDD(pmCalOqToEdit.completedDateTime)}
                  className={styles.dateTimeInput}
                />
              </div>
              <div className={styles.dateTimeInput}>
                <Form.Input
                  type="time"
                  label="Complete Time"
                  field="completed_hour"
                  initValue={transformDateToStringHHMM(pmCalOqToEdit.completedDateTime)}
                  className={styles.dateTimeInput}
                />
              </div>
            </div>
            <div className={styles.dateTimeArea}>
              <div className={styles.dateTimeInput}>
                <Button
                  theme="borderless"
                  className={`${styles.btn} ${styles.btnErr}`}
                  icon={<IconDelete />}
                >
                  Delete
                </Button>
              </div>
              <div className={styles.dateTimeInput}>
                <Button
                  className={styles.btn}
                  theme="solid"
                  icon={<IconSave />}
                  htmlType='submit'
                >
                  Save
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default PMCalsOqPopup;
