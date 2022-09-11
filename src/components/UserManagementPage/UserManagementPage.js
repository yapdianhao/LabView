import * as React from 'react';
import NavBar from '../NavBar/NavBar';
import { IconMail } from '@douyinfe/semi-icons';
import { Table } from '@douyinfe/semi-ui';
import { USERS } from '../../mock/users';

import styles from './UserManagementPage.module.css';

const UserManagementPage = () => {
    const columns = [
        {
            title: 'First Name',
            dataIndex: 'firstName',
            render: (text) => text
        },
        {
            title: 'Last Name',
            dataIndex: 'lastName',
            render: (text) => text
        },
        {
            title: 'Title',
            dataIndex: 'title',
            render: (text) => text
        },
        {
            title: 'Email', 
            dataIndex: 'email',
            render: (email) => {
                return (
                    <div>
                        {email}
                    </div>
                )
            }
        },
        {
            title: 'Access Level',
            dataIndex: 'accessLevel',
            render: (text) => text,
        }
    ]

    const rowSelection = React.useMemo(() => ({
        // onChange: (selectedRowKeys, selectedRows) => {
        //     console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        // },   
        getCheckboxProps: (record) => ({
            firstName: record.firstName,
        })    
    }), []);

    return (
        <div className={styles.pageContainer}>
            <NavBar />
            <div className={styles.contentWrapper}>
                <Table
                    columns={columns}
                    dataSource={USERS}
                    rowSelection={rowSelection}
                    rowKey={(record) => record.email}
                    pagination={{ formatPageText: false }}
                />
            </div>
        </div>
    );
}

export default UserManagementPage;