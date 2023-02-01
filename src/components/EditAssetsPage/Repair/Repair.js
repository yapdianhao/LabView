/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import { Table, Select } from "@douyinfe/semi-ui";
import { GET_REPAIRS_BY_ASSET } from "../../../api";
import { EDIT_REPAIR_SCHEMA, TABLE_SIZE_LIST } from "../../../constants";
import { transformRepair } from "../../../utils";
import axios from "axios";
import styles from "./Repair.module.css";

const Repair = (props) => {
  const { asset } = props;

  const [repairData, setRepairData] = React.useState([]);
  const [tableSize, setTableSize] = React.useState(6);

  const getData = async () => {
    const repairsFromAPI = await axios.get(GET_REPAIRS_BY_ASSET, {
      params: {
        asset_id: asset.id,
      },
    });
    if (repairsFromAPI.status === 200) {
      setRepairData(
        repairsFromAPI.data.map((repair) => transformRepair(repair))
      );
    }
  };

  const handleChangeTableSize = (value) => {
    setTableSize(value);
  };

  React.useEffect(() => {
    getData();
  }, []);

  console.log(repairData);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.rowCountSelectorWrapper}>
        <p className={styles.rowCountSelectorTitle}>Rows:</p>
        <Select
          optionList={TABLE_SIZE_LIST}
          defaultValue={tableSize}
          value={tableSize}
          onChange={handleChangeTableSize}
        ></Select>
      </div>
      <Table
        columns={EDIT_REPAIR_SCHEMA}
        dataSource={repairData}
        pagination={{
          formatPageText: false,
          pageSize: tableSize,
        }}
        footer={<div>Total: {repairData.length} repair(s)</div>}
      />
      <div></div>
    </div>
  );
};

export default Repair;
