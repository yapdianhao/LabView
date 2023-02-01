import * as React from "react";
import axios from "axios";
import { Input, Switch, Select, Table, Button } from "@douyinfe/semi-ui";
import { IconSearch } from "@douyinfe/semi-icons";
import { TABLE_SIZE_LIST, UTIL_SCHEMA } from "../../constants";
import { GET_ALL_UTILS } from "../../api";
import { transformFullUtil } from "../../utils";
import SecondaryNavBar from "../SecondaryNavBar/SecondaryNavBar";
import NavBar from "../NavBar/NavBar";

import styles from "./UtilizationsPage.module.css";

const UtilizationsPage = () => {
  const [utils, setUtils] = React.useState([]);
  const [editingUtil, setEditingUtil] = React.useState(null);
  const [showHistory, setShowHistory] = React.useState(false);
  const [tableSize, setTableSize] = React.useState(6);
  const [shouldShowEditModal, setShouldShowEditModal] = React.useState(false);

  const getUtils = async () => {
    const utilsFromAPI = await axios.get(GET_ALL_UTILS);
    if (utilsFromAPI.status === 200) {
      setUtils(
        utilsFromAPI.data.map((util) => transformFullUtil(util))
      )
    }
    console.log(utilsFromAPI);
  };

  const handleToggleSwitch = () => {
    setShowHistory(!showHistory);
  };

  const handleChangeTableSize = (value) => {
    setTableSize(value);
  };

  const handleCloseModal = () => {
    setEditingUtil(null);
    setShouldShowEditModal(false);
  };

  const showPopup = () => {};

  React.useEffect(() => {
    getUtils();
  }, []);

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
        <Table
          columns={UTIL_SCHEMA}
          dataSource={utils}
          className={styles.utilsTable}
          pagination={{
            formatPageText: false,
            className: styles.utilsTablePagination,
            pageSize: tableSize
          }}
        />
        {/* buttons area */}
        <div className={styles.btnArea}>
          <Button className={`${styles.btn}`}>Start New</Button>
          <Button className={`${styles.btn}`}>Stop</Button>
          <Button className={`${styles.btn}`}>Export</Button>
          <Button className={`${styles.btn}`}>Export All</Button>
          <Button className={`${styles.btn}`}>Delete</Button>
        </div>
      </div>
    </div>
  );
};

export default UtilizationsPage;
