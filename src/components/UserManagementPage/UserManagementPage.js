import * as React from 'react';
import NavBar from '../NavBar/NavBar';
import { List, Checkbox, CheckboxGroup, Pagination } from '@douyinfe/semi-ui';
import { USERS } from '../../mock/users';

import styles from './UserManagementPage.module.css';

const UserManagementPage = () => {
    return (
        <div className={styles.pageContainer}>
            <NavBar />
            <div className={styles.contentWrapper}>
                Test List
            </div>
        </div>
    );
}

export default UserManagementPage;