import * as React from 'react';
import axios from 'axios';
import { EDIT_VENDOR } from '../../../api';
import { IoCloseSharp } from 'react-icons/io5';
import { BsBoxes } from 'react-icons/bs';
import { Form, Button, Toast } from '@douyinfe/semi-ui';
import { IconSave } from '@douyinfe/semi-icons'
import styles from './VendorsPopup.module.css';

const VendorPopup = (props) => {
  const { onClose, vendor } = props;
  const [vendorToEdit, setVendorToEdit] = React.useState(vendor);

  console.log(vendor);

  const handleSubmit = async (values) => {
    console.log(values);
    const res = await axios.post(EDIT_VENDOR, {
      vendor: {
        id: vendor.id,
        ...values
      }
    });
    if (res.status === 200) {
      Toast.success('Edit vendor success');
    } else {
      Toast.error('Error when edit vendor');
    }
    onClose();
  }

  return(
    <div className={styles.editingModal}>
      <div className={styles.modalCloseBtn} onClick={onClose}>
        <IoCloseSharp />
      </div>
      <div className={styles.popupBody}>
        <div className={styles.title}>
          <BsBoxes className={styles.titleIcon} />
          <span>Edit Vendor</span>
        </div>
        <Form onSubmit={handleSubmit}>
          <div className={styles.row}>
            <Form.Input 
              style={{ width: '440px' }}
              label={{
                required: true,
                text: 'Name'
              }}
              field="name"
              initValue={vendor.name}
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
              initValue={vendor.phone1}
            />
            <Form.Input
              style={{ width: '200px' }}
              label={{
                required: true,
                text: 'Email 1'
              }}
              field="email1"
              initValue={vendor.email1}
            />
          </div>
          <div className={styles.row}>
            <Form.Input
              style={{ width: '200px' }}
              label="Phone 2"
              field="phone2"
              initValue={vendor.phone2}
            />
            <Form.Input
              style={{ width: '200px' }}
              label="Email 2"
              field="email2"
              initValue={vendor.email2}
            />
          </div>
          <div className={styles.row}>
            <Form.Input
              label="Remarks"
              field="remarks"
              style={{ width: '440px' }}
              initValue={vendor.remarks}
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
};

export default VendorPopup;