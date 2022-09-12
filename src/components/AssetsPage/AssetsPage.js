import * as React from 'react';
import { Table } from '@douyinfe/semi-ui';
import NavBar from '../NavBar/NavBar';
import { ASSETS } from '../../mock/assets';

import styles from './AssetsPage.module.css';

const AssetsPage = () => {

    const columns = [{
            title: 'Asset ID',
            dataIndex: 'id',
            render: (text) => text
        }, {
            title: 'Brand',
            dataIndex: 'brand',
            render: (text) => text
        }, {
            title: 'Model',
            dataIndex: 'model',
            render: (text) => text
        }, {
            title: 'Serial',
            dataIndex: 'serial',
            render: (text) => text,
        }, {
            title: 'Age',
            dataIndex: 'age',
            render: (text) => text,
        }, {
            title: 'Activation Date',
            dataIndex: 'activationDate', 
            render: (date) => date.toLocaleDateString(),
        }, 
        {
            title: 'Level',
            dataIndex: 'level',
            render: (text) => text,
        }, {
            title: 'PM/Cal Vendor',
            dataIndex: 'pmCalVendor',
            render: (text) => text,
        }, {
            title: 'Repair Vendor',
            dataIndex: 'repairVendor',
            render: (text) => text,
        }, {
            title: 'Instrument Description',
            dataIndex: 'description',
            render: (text) => text,
        }, {
            title: 'USP1058',
            dataIndex: 'usp1058',
            render: (text) => text,
        }, {
            title: 'PM',
            dataIndex: 'pm',
            render: (text) => text,
        }, {
            title: 'Cal',
            dataIndex: 'cal',
            render: (text) => text,
        }, {
            title: 'ISO17025',
            dataIndex: 'iso17025',
            render: (text) => text,
        }, {
            title: 'Labour Entitled',
            dataIndex: 'labourEntitled',
            render: (text) => text,
        }, {
            title: 'Parts Entitled',
            dataIndex: 'partsEntitled',
            render: (text) => text,
        }, {
            title: 'Maintenance Cost ($)',
            dataIndex: 'maintenanceCost',
            render: (text) => text,
        }, {
            title: 'Contract End Date',
            dataIndex: 'contractEndDate',
            render: (date) => date.toLocaleDateString(),
        }
    ];

    const rowSelection = React.useMemo(() => ({
        getCheckboxProps: (record) => ({
            id: record.id,
        })
    }), []);

    console.log(ASSETS);

    return (
        <div className={styles.pageContainer}>
            <NavBar />
            <div>
                <Table 
                    className={styles.assetsTable}
                    columns={columns}
                    dataSource={ASSETS}
                    rowSelection={rowSelection}
                    rowKey={(record) => record.id}
                    pagination={{ formatPageText: false, className: styles.assetsTablePagination }}
                />
            </div>
        </div>
    )
}


export default AssetsPage;