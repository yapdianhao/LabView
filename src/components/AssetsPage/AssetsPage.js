import * as React from 'react';
import axios from 'axios';
import { Input, Switch, Select, Table } from '@douyinfe/semi-ui';
import { IconSearch } from '@douyinfe/semi-icons';
import NavBar from '../NavBar/NavBar';
import { assetSchema } from '../../constants';
import { GET_ALL_ASSETS } from '../../api';

import styles from './AssetsPage.module.css';

const AssetsPage = () => {

    const tableSizeList = [
        { value: 6, label: 6},
        { value: 12, label: 12 },
        { value: 24, label: 24 },
        { value: 48, label: 48 },
        { value: 96, label: 96 }
    ];

    const [assets, setAssets] = React.useState([]);
    const [showDisabled, setShowDisabled] = React.useState(false);
    const [tableSize, setTableSize] = React.useState(6);

    const getPost = async () => {
        const assetsFromAPI = await axios.get(GET_ALL_ASSETS);
        if (assetsFromAPI.status === 200) {
            setAssets(assetsFromAPI.data);
        }
    }

    const handleToggleSwitch = () => {
        setShowDisabled(!showDisabled);
    }

    const handleChangeTableSize=(value) => {
        setTableSize(value);
    }

    React.useEffect(() => {
        getPost();
    }, []);

    console.log(assets);

    return (
        <div className={styles.pageContainer}>
            <NavBar />
            <div>
                <div className={styles.header}>
                    <Input className={styles.searchBar} suffix={<IconSearch />} showClear>

                    </Input>
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
                            optionList={tableSizeList}
                            defaultValue={tableSize}
                            value={tableSize}
                            onChange={handleChangeTableSize}
                            className={styles.rowCountSelector}
                        >
                        </Select>
                    </div>
                </div>
            </div>
            <Table 
                columns={assetSchema}
                dataSource={assets}
                className={styles.assetsTable}
                rowKey="id"
                pagination={{ formatPageText: false, className: styles.assetsTablePagination }}
            />
        </div>
    )
}

export default AssetsPage;