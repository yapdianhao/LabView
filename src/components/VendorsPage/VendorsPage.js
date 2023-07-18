import * as React from "react";
import axios from 'axios';
import { Table, Input, Switch, Select, Button } from "@douyinfe/semi-ui";
import { IconPlus } from '@douyinfe/semi-icons';
import { TABLE_SIZE_LIST, VENDOR_SCHEMA } from '../../constants';
import { GET_ALL_VENDORS } from "../../api";
import { IconSearch } from '@douyinfe/semi-icons';
import { transformFullVendor } from "../../utils";
import NavBar from "../NavBar/NavBar";
import VendorPopup from "./VendorsPopup/VendorsPopup";
import AddVendorsPopup from "./AddVendorsPopup/AddVendorsPopup";

import styles from './VendorsPage.module.css';

const VendorsPage = () => {
  const [vendors, setVendors] = React.useState([]);
  const [editingVendor, setEditingVendor] = React.useState(null);
  const [shouldShowDisabled, setShouldShowDisabled] = React.useState(false);
  const [tableSize, setTableSize] = React.useState(6);
  const [shouldShowEditModal, setShouldShowEditModal] = React.useState(false);
  const [shouldShowAddModal, setShouldShowAddModal] = React.useState(false);

  const getVendors = async () => {
    const vendorsFromAPI = await axios.get(GET_ALL_VENDORS);
    if (vendorsFromAPI.status === 200) {
      setVendors(
        vendorsFromAPI.data.map((vendor) => transformFullVendor(vendor))
      )
    }
  }

  const handleToggleSwitch = () => {
    setShouldShowDisabled(!shouldShowDisabled);
  }

  const handleChangeTableSize = (value) => {
    setTableSize(value);
  }

  const handleCloseEditingModal = () => {
    setEditingVendor(null);
    setShouldShowEditModal(false);
  }

  const showEditPopup = (event, vendor) => {
    if (event.detail === 2) {
      setShouldShowEditModal(true);
      setEditingVendor(vendor);
    }
  }

  const handleClickAddPopup = () => {
    setShouldShowAddModal(true);
  }

  const handleCloseAddPopup = () => {
    setShouldShowAddModal(false);
  }

  React.useEffect(() => {
    getVendors();
  }, [shouldShowEditModal, shouldShowAddModal]);

  return (
    <div className={styles.pageContainer}>
      <NavBar />
      <div>
        <div className={styles.header}>
          <Input
            className={styles.searchBar}
            suffix={<IconSearch />}
            showClear
          />
          <div className={styles.rowCountSelectorWrapper}>
            Rows:
            <Select
              optionList={TABLE_SIZE_LIST}
              defaultValue={tableSize}
              value={tableSize}
              onChange={handleChangeTableSize}
              className={styles.rowCountSelector}
            />
          </div>
          <div className={styles.switchWrapper}>
            <Switch
              checked={shouldShowDisabled}
              onChange={handleToggleSwitch}
              className={styles.switch}
            />
            Show Disabled
          </div>
        </div>
      </div>
      <Table
        columns={VENDOR_SCHEMA}
        dataSource={vendors}
        pagination={{
          formatPageText: false,
          className: styles.vendorsTablePagination,
          pageSize: tableSize
        }}
        className={styles.vendorsTable}
        onRow={(vendor) => {
          return {
            onClick: (event) => showEditPopup(event, vendor)
          }
        }}
      />
      <div className={styles.btnArea}>
        <Button
          className={styles.btn}
          theme="solid"
          icon={<IconPlus />}
          onClick={handleClickAddPopup}
        >
          Add
        </Button>
      </div>
      {shouldShowEditModal && 
        <VendorPopup onClose={handleCloseEditingModal} vendor={editingVendor} />
      }
      {shouldShowAddModal && 
        <AddVendorsPopup onClose={handleCloseAddPopup} />
      }
    </div>
  )
};

export default VendorsPage;
