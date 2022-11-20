import * as React from 'react';
import NavBar from '../NavBar/NavBar';
import RepairPopup from '../Popup/RepairPopup/RepairPopup';
import { Table } from '@douyinfe/semi-ui';
import { REPAIRS } from '../../mock/repairs';

import styles from './RepairsPage.module.css';

const RepairsPage = () => {

    const [shouldShowPopup, setShouldShowPopup] = React.useState()

    
    const columns = [{
        title: 'Asset ID',
        dataIndex: 'id',
        render: (text) => (
            <div>
                {text}
            </div>
        ),
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
        title: 'Problem',
        dataIndex: 'problem',
        render: (text) => text,
    }, {
        title: 'Solution',
        dataIndex: 'solution',
        render: (text) => text,
    }, {
        title: 'Reported On',
        dataIndex: 'reportedOn',
        render: (date) => date.toLocaleDateString(),
    }, {
        title: 'Recovered On',
        dataIndex: 'recoveredOn',
        render: (date) => date.toLocaleDateString(),
    }, {
        title: 'Down Time',
        dataIndex: 'downTime',
        render: (text) => text,
    }, {
        title: 'Repair Vendor',
        dataIndex: 'repairVendor',
        render: (text) => text,
    }, {
        title: '1st Visit Complete',
        dataIndex: 'firstVisitComplete',
        render: (text) => text,
    }, {
        title: 'Cost on parts ($)',
        dataIndex: 'costOnParts',
        render: (text) => text,
    }, {
        title: 'Cost on labor ($)',
        dataIndex: 'costOnLabor',
        render: (text) => text,
    }, {
        title: 'Total Cost($)',
        dataIndex: 'totalCost',
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
            <Table 
                className={styles.repairsTable}
                columns={columns}
                dataSource={REPAIRS}
                rowSelection={rowSelection}
                rowKey={(record) => record.id}
                pagination={{ formatPageText: false, className: styles.repairsTablePagination }}
            />
        </div>
    )
}

export default RepairsPage;