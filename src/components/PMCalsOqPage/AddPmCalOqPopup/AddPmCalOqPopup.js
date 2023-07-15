import * as React from 'react';
import axios from 'axios';
import { IoCloseSharp } from 'react-icons/io5';
import { IconUserCardPhone, IconMail, IconDelete, IconSave } from '@douyinfe/semi-icons';
import { Form, Button, Toast } from '@douyinfe/semi-ui';
import styles from './AddPmCalOqPopup.module.css';
import { GET_ALL_ASSETS, GET_ALL_VENDORS, GET_VENDOR_BY_NAME, ADD_PM_CAL_OQ } from '../../../api';
import { transformAsset, transformVendor } from '../../../utils';

const AddPmCalOqPopup = (props) => {
  const { type, onClose } = props;

  const [assetsLoading, setAssetsLoading] = React.useState(false);
  const [vendorsLoading, setVendorsLoading] = React.useState(false);
  const [isVendorsOpen, setIsVendorsOpen] = React.useState(false);
  const [isAssetsOpen, setIsAssetsOpen] = React.useState(false);
  const [assets, setAssets] = React.useState([]);
  const [defaultVendor, setDefaultVendor] = React.useState(null);
  const [vendors, setVendors] = React.useState([]);
  const [selectedAsset, setSelectedAssset] = React.useState(null);

  const handleToggleAssetsDropDown = async() => {
    if (!isAssetsOpen) {
      try {
        setAssetsLoading(true);
        const assetsFromAPI = await axios.get(GET_ALL_ASSETS);
        if (assetsFromAPI.status === 200) {
          setAssets(assetsFromAPI.data.map((asset) => {
            return {
              ...transformAsset(asset),
              label: `${asset.id} (${asset.brand} ${asset.model}) Serial: ${asset.serial}`
            }
          }));
        }
      } catch (e) {
        console.log(e);
      } finally {
        setAssetsLoading(false);
      }
    }
    setIsAssetsOpen(!isAssetsOpen);
  }

  const handleToggleVendorsDropDown = async() => {
    if (!isVendorsOpen) {
      try {
        setVendorsLoading(true);
        const vendorsFromAPI = await axios.get(GET_ALL_VENDORS);
        console.log(vendorsFromAPI);
        if (vendorsFromAPI.status === 200) {
          setVendors(
            vendorsFromAPI.data.map((vendor) => {
              return {
                label: vendor.name,
                value: vendor.id,
              }
            })
          )
        }
      } catch (e) {
        console.log(e);
      } finally {
        setVendorsLoading(false);
      }
    }
    setIsVendorsOpen(!isVendorsOpen);
  }

  const handleSelectAsset = (_, changedValue) => {
    if (changedValue.hasOwnProperty('assetId')) {
      setSelectedAssset(assets[changedValue.assetId])
    }
  }

  const handleGetVendorByName = async () => {
    const vendorFromAPI = await axios.post(GET_VENDOR_BY_NAME, {
      vendorName: selectedAsset.defaultVendor
    });
    if (vendorFromAPI.status === 200) {
      setDefaultVendor(transformVendor(vendorFromAPI.data[0]));
    }
  }

  const handleSubmit = async (values) => {
    const pmCalOq = {
      assetId: assets[values.assetId].assetId,
      isRoutine: values.isRoutine,
      type: values.type,
      vendorId: values.vendorId,
      completeDate: values.completeDate,
      completeTime: values.completeTime,
      scheduledDate: values.scheduledDate,
      scheduledTime: values.scheduledTime,
      remarks: values.remarks
    }
    const res = await axios.post(ADD_PM_CAL_OQ, {
      pmCalOq
    })
    console.log(res);
    onClose();
    if (res?.status === 200) {
      Toast.success(`Added ${pmCalOq.type}`);
    } else {
      Toast.error(`Error: add ${pmCalOq.type} fail`);
    }
  }

  console.log(assets);
  console.log(selectedAsset);

  React.useEffect(() => {
    if (selectedAsset) {
      handleGetVendorByName();
    }
  }, [selectedAsset]);

  return (
    <div className={styles.modal}>
      <div className={styles.modalCloseBtn} onClick={onClose}>
        <IoCloseSharp />
      </div>
      <div className={styles.popupBody}>
        <div className={styles.title}>
          <span>New PM / Cal / OQ</span>
        </div>
        <div className={styles.fieldCol}>
          <div className={styles.fieldContainer}>
            <div className={styles.fieldName}>
              Brand:
            </div>
            <div className={styles.fieldValue}>{selectedAsset?.brand || ''}</div>
          </div>
          <div className={styles.fieldContainer}>
            <div className={styles.fieldName}>
              Model: 
            </div>
            <div className={styles.fieldValue}>{selectedAsset?.model || ''}</div>
          </div>
          <div className={styles.fieldContainer}>
            <div className={styles.fieldName}>
              Serial:
            </div>
            <div className={styles.fieldValue}>{selectedAsset?.serial || ''}</div>
          </div>
          <div className={styles.fieldContainer}>
            <div className={styles.fieldName}>
              Default Vendor:
            </div>
            <div className={styles.fieldValue}>
              <div>{defaultVendor?.name || ''}</div>
              <div className={styles.vendorDetail}>
                <IconUserCardPhone />
                {defaultVendor?.phone || ''}
              </div>
              <div className={styles.vendorDetail}>
                <IconMail />
                 {defaultVendor?.email || ''}
              </div>
            </div>
          </div>
        </div>
        <div>
          <Form onValueChange={handleSelectAsset} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div>
                <Form.Select 
                  style={{ width: '280px' }}
                  label={{
                    text: 'Asset',
                    required: true
                  }}
                  field="assetId"
                  onDropdownVisibleChange={handleToggleAssetsDropDown}
                  optionList={assets.map(({ label }, index) => {
                    return {
                      label,
                      value: index
                    }
                  })}
                  loading={assetsLoading}
                  rules={[{ required: true, message: 'Asset required' }]}
                />
              </div>
              <div className={styles.row}>
                <Form.Select 
                  style={{ width: '150px' }}
                  label={{
                    text: 'Type',
                    required: true
                  }}
                  field="type"
                  rules={[{ required: true, message: 'Type required'}]}
                >
                  <Form.Select.Option value="PM">PM</Form.Select.Option>
                  <Form.Select.Option value="CAL">CAL</Form.Select.Option>
                  <Form.Select.Option value="OQ">OQ</Form.Select.Option>
                </Form.Select>
                <Form.Select 
                  label={{
                    text: 'Routine',
                    required: true
                  }}
                  style={{ width: '150px' }}
                  field="isRoutine"
                  rules={[{ required: true, message: 'Is Routine required' }]}
                >
                  <Form.Select.Option value={1}>Yes</Form.Select.Option>
                  <Form.Select.Option value={0}>No</Form.Select.Option>
                </Form.Select>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.flexItem}>
                <Form.Select
                  label={{
                    text: 'Vendor',
                    required: true
                  }}
                  className={styles.flexItem}
                  style={{ width: '600px' }}
                  field="vendorId"
                  onDropdownVisibleChange={handleToggleVendorsDropDown}
                  optionList={vendors}
                  loading={vendorsLoading}
                  rules={[{ required: true, message: 'Vendor required' }]}
                />
              </div>
            </div>
            <div className={styles.row}>
              <Form.TextArea
                field="remarks"
                label="Remarks"
                style={{ width: '600px' }}
              />
            </div>
            <div className={styles.row}>
              <div className={styles.flexItem}>
                <Form.Input
                  type="date"
                  label={{
                    text: "Schedule Date",
                    required: true
                  }}
                  field="scheduledDate"
                  rules={[{ required: true, message: 'Schedule date required' }]}
                />
              </div>
              <div className={styles.flexItem}>
                <Form.Input
                  type="time"
                  label={{
                    text: "Time",
                    required: true,
                  }}
                  field="scheduledTime"
                  rules={[{ required: true, message: 'Schedule time required' }]}
                />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.flexItem}>
                <Form.Input
                  type="date"
                  label={{
                    text: 'Complete Date',
                    required: true
                  }}
                  field="completeDate"
                  rules={[{ required: true, message: 'Complete date required' }]}
                />
              </div>
              <div className={styles.flexItem}>
                <Form.Input
                  type="time"
                  label={{
                    text: 'Time',
                    required: true
                  }}
                  field="completeTime"
                  rules={[{ required: true, message: 'Complete time required' }]}
                />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.flexItem}>
                <Button
                  className={styles.btn}
                  type="danger"
                  theme="borderless"
                  onClick={onClose}
                  icon={<IconDelete />}
                >
                  Delete
                </Button>
              </div>
              <div className={styles.flexItem}>
                <Button
                  className={styles.btn}
                  theme="solid"
                  htmlType="submit"
                  icon={<IconSave />}
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

export default AddPmCalOqPopup;