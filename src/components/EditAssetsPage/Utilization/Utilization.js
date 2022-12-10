/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import { Table, Select } from '@douyinfe/semi-ui';
import { TABLE_SIZE_LIST, EDIT_UTIL_SCHEMA } from '../../../constants';
import { transformUtil } from '../../../utils';
import { GET_UTILS_BY_ASSET } from '../../../api';
import QRCode from 'react-qr-code';
import axios from 'axios';

import styles from './Utilization.module.css';

const Utilization = (props) => {

    const { asset } = props;

    const [utilData, setUtilData] = React.useState([]);
    const [tableSize, setTableSize] = React.useState(6);

    const getData = async () => {
        const utilsFromAPI = await axios.get(GET_UTILS_BY_ASSET, { 
            params: {
                asset_id: asset.id
            }
        });
        if (utilsFromAPI.status === 200) {
            setUtilData(utilsFromAPI.data.map((util) => transformUtil(util)));
        }
    };

    const handleChangeTableSize = (value) => {
        setTableSize(value);
    }

    React.useEffect(() => {
        getData();
    }, []);

    return (
        <div className={styles.pageContainer}>
            <button className={styles.utilStartBtn}>
                Start
            </button>
            <p className={styles.utilTitle}>
                Total Utilization: 
            </p>
            <p className={styles.timeText}>
                0h 0m (0%)
            </p>
            <QRCode 
                size={132}
                value={'https://www.youtube.com/'}
            />
            <div className={styles.rowCountSelectorWrapper}>
                <Select 
                    optionList={TABLE_SIZE_LIST}
                    defaultValue={tableSize}
                    value={tableSize}
                    onChange={handleChangeTableSize}
                >
                </Select>
            </div>
            <Table
                className={styles.utilTable}
                columns={EDIT_UTIL_SCHEMA}
                dataSource={utilData}
                pagination={{
                    formatPageText: false,
                    className: styles.utilTablePagination,
                    pageSize: tableSize
                }}
                footer={<div>Total: {utilData.length} past utilizations</div>}
            />
        </div>
    )
}

export default Utilization;