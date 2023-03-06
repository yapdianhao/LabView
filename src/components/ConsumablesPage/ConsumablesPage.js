import * as React from "react";
import axios from 'axios';
import { Table, Select, Button, Input } from "@douyinfe/semi-ui";
import { IconSearch, IconPlus, IconDelete } from "@douyinfe/semi-icons";
import { RiFileExcel2Fill } from "react-icons/ri";
import { transformFullConsumable } from "../../utils";
import { GET_ALL_CONSUMABLES } from "../../api";
import { TABLE_SIZE_LIST, CONSUMABLE_SCHEMA } from "../../constants";
import NavBar from "../NavBar/NavBar";
import SecondaryNavBar from "../SecondaryNavBar/SecondaryNavBar";

import styles from "./ConsumablesPage.module.css";

const ConsumablesPage = () => {

  const [consumables, setConsumables] = React.useState([]);
  const [tableSize, setTableSize] = React.useState(6);
  const [editingConsumable, setEditingConsumable] = React.useState(null);
  const [shouldShowEditModal, setShouldShowEditModal] = React.useState(false);

  const getConsumables = async() => {
    const consumablesFromAPI = await axios.get(GET_ALL_CONSUMABLES);
    if (consumablesFromAPI.status === 200) {
      setConsumables(
        consumablesFromAPI.data.map((consumable) => transformFullConsumable(consumable))
      );
    }
  };

  const handleChangeTableSize = (value) => {
    setTableSize(value);
  }

  const handleClosePopup = () => {
    setShouldShowEditModal(false);
  }

  const showPopup = (event, consumable) => {
    if (event.detail === 2) {
      setShouldShowEditModal(true);
      setEditingConsumable(consumable);
    }
  }

  React.useEffect(() => {
    getConsumables();
  }, []);

  console.log(consumables);

  return (
    <div className={styles.pageContainer}>
      <NavBar />
      <SecondaryNavBar />
      <div>
        <div className={styles.header}>
          <Input
            className={styles.searchBar}
            suffix={<IconSearch />}
            showClear
          >
          </Input>
          <div className={styles.rowCountSelectorWrapper}>
            Rows:
            <Select
              optionList={TABLE_SIZE_LIST}
              defaultValue={tableSize}
              value={tableSize}
              onChange={handleChangeTableSize}
              className={styles.rowCountSelector}
            ></Select>
          </div>
        </div>
      </div>
      <Table
        columns={CONSUMABLE_SCHEMA}
        dataSource={consumables}
        className={styles.consumablesTable}
        pagination={{
          formatPageText: false,
          className: styles.consumablesTablePagination,
          pageSize: tableSize
        }}
        onRow={(repair) => {
          return {
            onClick: (event) => showPopup(event, repair)
          }
        }}
        />
        <div className={styles.btnArea}>
          <Button className={styles.btn} theme="solid" icon={<IconPlus />}>
            Add New
          </Button>
          <Button className={styles.btn} theme="solid" disabled icon={<IconDelete />}>
            Delete
          </Button>
          <Button className={styles.btn} theme="solid" disabled icon={<RiFileExcel2Fill />}>
            Export
          </Button>
          <Button className={styles.btn} theme="solid" icon={<RiFileExcel2Fill />}>
            Export All
          </Button>
        </div>
        {/* {shouldShowEditModal && (
          
        )} */}
    </div>
  );
};

export default ConsumablesPage;
