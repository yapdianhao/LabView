import * as React from "react";
import axios from "axios";
import { Input, Switch, Select, Table } from "@douyinfe/semi-ui";
import { IconSearch } from "@douyinfe/semi-icons";
import { useNavigate } from "react-router-dom";
import { assetSchema, TABLE_SIZE_LIST } from "../../constants";
import { GET_ALL_ASSETS } from "../../api";
import NavBar from "../NavBar/NavBar";
import SecondaryNavBar from "../SecondaryNavBar/SecondaryNavBar";

import styles from "./AssetsPage.module.css";

const AssetsPage = () => {
  const navigate = useNavigate();

  const [assets, setAssets] = React.useState([]);
  const [showDisabled, setShowDisabled] = React.useState(false);
  const [tableSize, setTableSize] = React.useState(6);

  const getPost = async () => {
    const assetsFromAPI = await axios.get(GET_ALL_ASSETS);
    if (assetsFromAPI.status === 200) {
      setAssets(assetsFromAPI.data);
    }
  };

  const handleToggleSwitch = () => {
    setShowDisabled(!showDisabled);
  };

  const handleChangeTableSize = (value) => {
    setTableSize(value);
  };

  React.useEffect(() => {
    getPost();
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
              checked={showDisabled}
              onChange={handleToggleSwitch}
              className={styles.switch}
            />
            Show disabled
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
        columns={assetSchema}
        dataSource={assets}
        className={styles.assetsTable}
        // rowKey="id"
        pagination={{
          formatPageText: false,
          className: styles.assetsTablePagination,
          pageSize: tableSize,
        }}
        onRow={(asset, index) => {
          return {
            onClick: (event) => {
              if (event.detail === 2) navigate(`/edit-asset?id=${asset.id}`);
            },
          };
        }}
        footer={<div>Total: {assets.length} result(s)</div>}
      />
    </div>
  );
};

export default AssetsPage;
