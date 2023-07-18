import * as React from 'react';
import axios from 'axios';
import { IoCloseSharp } from 'react-icons/io5';
import { BsBoxes } from 'react-icons/bs';
import { Form, Button, Toast } from '@douyinfe/semi-ui';
import { IconSave } from '@douyinfe/semi-icons';
import { ADD_VENDOR } from '../../../api';
import styles from './AddVendorsPopup.module.css';

const AddVendorsPopup = (props) => {
  const { onClose } = props;

  const handleSubmit = async (values) => {
    const res =  await axios.post(ADD_VENDOR, {
      vendor: values
    });
    if (res.status === 200) {
      Toast.success('Add vendor success');
    } else {
      Toast.error('Error when add vendor');
    }
    onClose();
  }

  return (
    <div className={styles.editingModal}>
      <div className={styles.modalCloseBtn} onClick={onClose}>
        <IoCloseSharp />
      </div>
      <div className={styles.popupBody}>
        <div className={styles.title}>
          <BsBoxes className={styles.titleIcon}/>
          <span>Add Vendor</span>
        </div>
        <Form onSubmit={handleSubmit}>
        <div className={styles.row}>
          <Form.Input
            style={{ width: '400px' }}
            label={{
              required: true,
              text: 'Name'
            }}
            field="name"
          />
        </div>
        <div className={styles.row}>
          <Form.Input
                style={{ width: '200px' }}
                label={{
                  required: true,
                  text: 'Phone 1'
                }}
                field="phone1"
              />
              <Form.Input
                style={{ width: '200px' }}
                label={{
                  required: true,
                  text: 'Email 1'
                }}
                field="email1"
              />
          </div>
          <div className={styles.row}>
              <Form.Input
                style={{ width: '200px' }}
                label="Phone 2"
                field="phone2"
              />
              <Form.Input
                style={{ width: '200px' }}
                label="Email 2"
                field="email2"
              />
            </div>
            <div className={styles.row}>
              <Form.Input
                label="Remarks"
                field="remarks"
                style={{ width: '440px' }}
              />
            </div>
            <div className={`${styles.row} ${styles.btnArea}`}>
              <Button
                theme="solid"
                icon={<IconSave />}
                style={{ width: '200px', padding: '20px 0' }}
                htmlType='submit'
              >
                Save
              </Button>
            </div>
        </Form>
      </div>
    </div>
  );
}

export default AddVendorsPopup;