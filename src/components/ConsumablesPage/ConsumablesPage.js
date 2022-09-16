import * as React from 'react';
import NavBar from '../NavBar/NavBar';
import { Table } from '@douyinfe/semi-ui';
import { CONSUMABLES } from '../../mock/consumables';

import styles from './ConsumablesPage.module.css';

const ConsumablesPage = () => {

    const columns = [{
        title: 'Asset Id',
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
        title: 'Description',
        dataIndex: 'description',
        render: (text) => text,
    }, {
        title: 'Part No.',
        dataIndex: 'partNo',
        render: (text) => text,
    }, {
        title: 'Cost',
        dataIndex: 'cost',
        render: (text) => text,
    }, {
        title: 'Consumed On',
        dataIndex: 'consumedOn',
        render: (date) => date.toLocaleDateString(),
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
                    className={styles.consumablesTable}
                    columns={columns}
                    dataSource={CONSUMABLES}
                    rowSelection={rowSelection}
                    rowKey={(record) => record.id}
                    pagination={{ formatPageText: false, className: styles.consumablesTablePagination }}
                />
            </div>
        </div>
    )
}

export default ConsumablesPage;