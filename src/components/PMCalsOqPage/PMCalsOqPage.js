import * as React from "react";
import axios from 'axios';
import { Input, Select, Switch, Table, Button } from "@douyinfe/semi-ui";
import { IconSearch, IconPlus, IconDelete } from "@douyinfe/semi-icons";
import { RiFileExcel2Fill } from "react-icons/ri";
import PMCalsOqPopup from "./PMCalsOqPopup/PMCalsOqPopup";
import AddPmCalOqPopup from "./AddPmCalOqPopup/AddPmCalOqPopup";
import NavBar from "../NavBar/NavBar";
import SecondaryNavBar from "../SecondaryNavBar/SecondaryNavBar";
import styles from "./PMCalsOqPage.module.css";
import { transformFullPmCalOq } from "../../utils";
import { GET_ALL_PM_CAL_OQ } from "../../api";
import { PM_CAL_OQ_SCHEMA, TABLE_SIZE_LIST, PM_CAL_OQ } from "../../constants";

const PMCalsOqPage = () => {
  const [pmCalOqs, setPmCalOqs] = React.useState([]);
  const [editingPmCalOq, setEditingPmCalOq] = React.useState(null);
  const [tableSize, setTableSize] = React.useState(6);
  const [shouldShowHistory, setShouldShowHistory] = React.useState(true);
  const [shouldShowPm, setShouldShowPm] = React.useState(true);
  const [shouldShowCal, setShouldShowCal] = React.useState(true);
  const [shouldShowOq, setShouldShowOq] = React.useState(true);
  const [shouldShowEditModal, setShouldShowEditModal] = React.useState(false);
  const [addModalType, setAddModalType] = React.useState('');
  
  const getPmCalOqs = React.useCallback(async() => {
    let typeArr = [];
    if (shouldShowPm) {
      typeArr.push('PM');
    }
    if (shouldShowCal) {
      typeArr.push('CAL');
    }
    if (shouldShowOq) {
      typeArr.push('OQ');
    }
    const pmCalOqsFromAPI = await axios.get(GET_ALL_PM_CAL_OQ, {
      params: {
        types: typeArr,
        ...(shouldShowHistory) && { shouldShowHistory: 1 }
      }
    });
    if (pmCalOqsFromAPI.status === 200) {
      setPmCalOqs(
        pmCalOqsFromAPI.data.map((pmCalOq) => transformFullPmCalOq(pmCalOq))
      );
    }
  }, [shouldShowPm, shouldShowCal, shouldShowOq, shouldShowHistory]);

  const handleToggleSwitchHistory = () => {
    setShouldShowHistory(!shouldShowHistory);
  };

  const handleToggleSwitchPm = () => {
    setShouldShowPm(!shouldShowPm);
  };

  const handleToggleSwitchCal = () => {
    setShouldShowCal(!shouldShowCal);
  };

  const handleToggleSwitchOq = () => {
    setShouldShowOq(!shouldShowOq);
  };

  const handleChangeTableSize = (value) => {
    setTableSize(value);
  }

  const handleClosePopup = () => {
    setEditingPmCalOq(null);
    setShouldShowEditModal(false);
  };

  const handleOpenPopup = (event, pmCalOq) => {
    if (event.detail === 2) {
      setShouldShowEditModal(true);
      setEditingPmCalOq(pmCalOq);
    }
  }

  const handleClickAddPopup = (value) => {
    setAddModalType(value);
  }

  const handleCloseAddPopup = () => {
    setAddModalType('');
  }

  React.useEffect(() => {
    getPmCalOqs();
  }, [shouldShowHistory, shouldShowCal, shouldShowPm, shouldShowOq, getPmCalOqs, editingPmCalOq, addModalType]);

  console.log(pmCalOqs);

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
          <div className={styles.switchWrapper}>
            <Switch
              checked={shouldShowHistory} 
              onChange={handleToggleSwitchHistory}
              className={styles.switch}
            ></Switch>
            Show History
          </div>
          <div className={styles.switchWrapper}>
            <Switch
              checked={shouldShowPm} 
              onChange={handleToggleSwitchPm}
              className={styles.switch}
            ></Switch>
            Show PM
          </div>
          <div className={styles.switchWrapper}>
            <Switch
              checked={shouldShowCal} 
              onChange={handleToggleSwitchCal}
              className={styles.switch}
            ></Switch>
            Show Cal
          </div>
          <div className={styles.switchWrapper}>
            <Switch
              checked={shouldShowOq} 
              onChange={handleToggleSwitchOq}
              className={styles.switch}
            ></Switch>
            Show OQ
          </div>
        </div>
      </div>
      <Table
        columns={PM_CAL_OQ_SCHEMA}
        dataSource={pmCalOqs}
        pagination={{
          formatPageText: false,
          className: styles.pmCalOqTablePagination,
          pageSize: tableSize
        }}
        className={styles.pmCalOqTable}
        onRow={(pmCalOq) => {
          return {
            onClick: (event) => handleOpenPopup(event, pmCalOq),
          }
        }}
      />
      <div className={styles.btnArea}>
        <Button
          className={styles.btn}
          theme="solid"
          icon={<IconPlus />}
          onClick={() => handleClickAddPopup(PM_CAL_OQ.CAL)}
        >
          Add PM
        </Button>
        <Button
          className={styles.btn}
          theme="solid"
          icon={<IconPlus />}
          onClick={() => handleClickAddPopup(PM_CAL_OQ.CAL)}
        >
          Add Cal
        </Button>
        <Button
          className={styles.btn}
          theme="solid"
          icon={<IconPlus />}
          onClick={() => handleClickAddPopup(PM_CAL_OQ.OQ)}
        >
          Add OQ 
        </Button>
        <Button
          className={styles.btn}
          theme="solid"
          icon={<RiFileExcel2Fill />}
        >
          Export
        </Button>
        <Button
          className={styles.btn}
          theme="solid"
          icon={<RiFileExcel2Fill />}
        >
          Export All
        </Button>
        <Button
          className={styles.btn}
          theme="solid"
          icon={<IconDelete />}
          type="danger"
        >
          Delete
        </Button>
      </div>
      {shouldShowEditModal && (
        <PMCalsOqPopup pmCalOq={editingPmCalOq} onClose={handleClosePopup} />
      )}
      {addModalType && (
        <AddPmCalOqPopup onClose={handleCloseAddPopup} type={addModalType} />
      )}
    </div>
  );
};

export default PMCalsOqPage;
