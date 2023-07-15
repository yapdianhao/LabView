import * as React from 'react';
import axios from 'axios';
import { IoCloseSharp } from 'react-icons/io5';
import { AiFillTool } from 'react-icons/ai';
import { Button, Form, Toast } from '@douyinfe/semi-ui';
import { IconSave, IconDelete } from '@douyinfe/semi-icons';
import { GET_ALL_ASSETS, ADD_CONSUMABLE } from '../../../api';
import styles from './AddConsumablesPopup.module.css';

const AddConsumablesPopup = (props) => {
  const { onClose } = props;

  const [loading, setLoading] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [assets, setAssets] = React.useState([]);

  const handleToggleDropDown = async() => {
    if (!isOpen) {
      try {
        setLoading(true);
        const assetsFromAPI = await axios.get(GET_ALL_ASSETS);
        if (assetsFromAPI.status === 200) {
          setAssets(
            assetsFromAPI.data.map((asset) => {
              return {
                label: `${asset.id} (${asset.brand} ${asset.model}) Serial: ${asset.serial}`,
                value: asset.id
              }
            })
          )
        }
      } catch(e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    }
    setIsOpen(!isOpen);
  }

  const handleSubmit = async (values) => {
    const res = await axios.post(ADD_CONSUMABLE, {
      consumable: values
    });
    onClose();
    if (res?.status === 200) {
      Toast.success('Added consumable');
    } else {
      Toast.error('Error: add consumable fail');
    }
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modalCloseBtn} onClick={onClose}>
        <IoCloseSharp />
      </div>
      <div className={styles.popupBody}>
        <div className={styles.title}>
          <AiFillTool className={styles.titleIcon} />
          <span>Add Consumable</span>
        </div>
        <div>
          <Form onSubmit={handleSubmit}>
            <div className={styles.row}>
              <Form.Select 
                style={{ width: '600px' }}
                label="Asset"
                loading={loading}
                onDropdownVisibleChange={handleToggleDropDown}
                optionList={assets}
                field="assetId"
              />
            </div>
            <div className={styles.row}>
              <div className={styles.field}>
                <Form.Input
                  field="description"
                  label={{
                    text:'Description',
                    required: true
                  }}
                  rules={[{ required: true, message: 'Description required' }]}
                />
              </div>
              <div className={styles.halfRow}>
                <Form.Input
                  field="partNo"
                  label={{
                    text: "Part No.",
                    required: true
                  }}        
                  rules={[{ required: true, message: 'Part No. required' }]}
                />
                <Form.InputNumber
                  formatter={value => `${value}`.replace(/\D/g, '')}
                  field="cost"
                  label={{
                    text: "Cost ($)",
                    required: true,
                  }}
                  rules={[{ required: true, message: 'Cost required' }]}
                />
              </div>
            </div>
            <div className={styles.row}>
              <Form.Input 
                label={{
                  text: 'Consume Date',
                  required: true,
                }}
                type="date"
                field="consumedDate"
                rules={[{ required: true, message: 'Date required' }]}
              />
              <Form.Input 
                label={{
                  text: 'Consume Date',
                  required: true,
                }}
                type="time"
                field="consumedTime"
                rules={[{ required: true, message: 'Time required' }]}
              />
              <Button
                className={styles.field} 
                icon={<IconDelete />}
                theme="solid"
                type="warning"
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button
                className={styles.field}
                icon={<IconSave />} 
                theme="solid"
                htmlType='submit'
              >
                Save
              </Button>
            </div>
          </Form>
        </div>
        <div >

        </div>
      </div>
    </div>
  );
};

export default AddConsumablesPopup;