import * as React from 'react';
import NavBar from '../NavBar/NavBar';
import { Table } from '@douyinfe/semi-ui';
import { UTILS } from '../../mock/utilizations';

import styles from './UtilizationsPage.module.css';

const UtilizationsPage = () => {

    const columns = [{
        title: 'Asset ID',
        dataIndex: 'id',
        render: (text) => text,
    }, {
        title: 'Brand',
        dataIndex: 'brand',
        render: (text) => text,
    }, {
        title: 'Model',
        dataIndex: 'model',
        render: (text) => text,
    }, {
        title: 'Serial',
        dataIndex: 'serial',
        render: (text) => text,
    }, {
        title: 'From',
        dataIndex: 'from',
        render: (date) => date.toLocaleDateString(),
    }, {
        title: 'To',
        dataIndex: 'to',
        render: (date) => date.toLocaleDateString(),
    }, {
        title: 'Total Hours',
        dataIndex: 'totalHours',
        render: (text) => text,
    }, {
        title: 'Remarks',
        dataIndex: 'remarks',
        render: (text) => text,
    }]

    const rowSelection = React.useMemo(() => ({
        getCheckboxProps: (record) => ({
            id: record.id,
        })
    }), []);

    return (
        <div className={styles.pageContainer}>
            <NavBar />
            <div>
                <Table 
                    className={styles.utilsTable}
                    columns={columns}
                    dataSource={UTILS}
                    rowSelection={rowSelection}
                    rowKey={(record) => record.id}
                    pagination={{ formatPageText: false }}
                />
            </div>
        </div>
    );
}

export default UtilizationsPage;