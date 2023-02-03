import * as React from "react";
import axios from "axios";
import { Input, Switch, Select, Table } from "@douyinfe/semi-ui";
import { IconSearch } from "@douyinfe/semi-icons";
import { TABLE_SIZE_LIST, REPAIR_SCHEMA } from "../../constants";
import { transformFullRepair } from "../../utils";
import { GET_ALL_REPAIRS } from "../../api";
import NavBar from "../NavBar/NavBar";
import SecondaryNavBar from "../SecondaryNavBar/SecondaryNavBar";
import RepairPopup from "./RepairPopup/RepairPopup";

import styles from "./RepairsPage.module.css";

const RepairsPage = () => {
  const [repairs, setRepairs] = React.useState([]);
  const [editingRepair, setEditingRepair] = React.useState(null);
  const [showHistory, setShowHistory] = React.useState(false);
  const [tableSize, setTableSize] = React.useState(6);
  const [shouldShowEditModal, setShouldShowEditModal] = React.useState(false);

  const getRepairs = async () => {
    const repairsFromAPI = await axios.get(GET_ALL_REPAIRS);
    if (repairsFromAPI.status === 200) {
      setRepairs(
        repairsFromAPI.data.map((repair) => transformFullRepair(repair))
      );
    }
  };

  const handleToggleSwitch = () => {
    setShowHistory(!showHistory);
  };

  const handleChangeTableSize = (value) => {
    setTableSize(value);
  };

  const handleCloseModal = () => {
    setEditingRepair(null);
    setShouldShowEditModal(false);
  };

  const showPopup = (event, repair) => {
    if (event.detail === 2) {
      setShouldShowEditModal(true);
      setEditingRepair(repair);
    }
  };

  React.useEffect(() => {
    getRepairs();
  }, []);

  console.log(repairs);

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
          ></Input>
          <div className={styles.switchWrapper}>
            <Switch
              checked={showHistory}
              onChange={handleToggleSwitch}
              className={styles.switch}
            />
            Show history
          </div>
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
        columns={REPAIR_SCHEMA}
        dataSource={repairs}
        className={styles.repairsTable}
        // rowKey="id"
        pagination={{
          formatPageText: false,
          className: styles.repairsTablePagination,
          pageSize: tableSize,
        }}
        onRow={(repair) => {
          return {
            onClick: (event) => showPopup(event, repair),
          };
        }}
        footer={<div>Total: {repairs.length} result(s)</div>}
      />
      {shouldShowEditModal && (
        <RepairPopup repair={editingRepair} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default RepairsPage;
