import * as React from 'react';
import NavBar from '../NavBar/NavBar';
import { USERS } from '../../mock/users';

const UserManagementPage = () => {
    console.log(USERS);
    return (
        <div>
            <NavBar />
        </div>
    );
}

export default UserManagementPage;