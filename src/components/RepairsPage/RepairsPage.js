import * as React from 'react';
import axios from 'axios';
import { TABLE_SIZE_LIST } from '../../constants';
import { GET_ALL_REPAIRS } from '../../api';
import NavBar from '../NavBar/NavBar';
import SecondaryNavBar from '../SecondaryNavBar/SecondaryNavBar';

import styles from './RepairsPage.module.css';

const RepairsPage = () => {

    const getRepairs = async() => {
        const repairsFromAPI = await axios.get(GET_ALL_REPAIRS);
        console.log(repairsFromAPI);
    }

    React.useEffect(() => {
        getRepairs();
    })

    return (
        <div className={styles.pageContainer}>
            <NavBar />
            <SecondaryNavBar />
        </div>
    )
}

export default RepairsPage;