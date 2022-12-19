import * as React from 'react';
import axios from 'axios';
import { TABLE_SIZE_LIST, REPAIR_SCHEMA } from '../../constants';
import { transformFullRepair } from '../../utils';
import { GET_ALL_REPAIRS } from '../../api';
import NavBar from '../NavBar/NavBar';
import SecondaryNavBar from '../SecondaryNavBar/SecondaryNavBar';

import styles from './RepairsPage.module.css';

const RepairsPage = () => {

    const [repairs, setRepairs] = React.useState([]);
    const [showHistory, setShowHistory] = React.useState(false);
    const [tableSize, setTableSize] = React.useState(6);

    const getRepairs = async() => {
        const repairsFromAPI = await axios.get(GET_ALL_REPAIRS);
        if (repairsFromAPI.status === 200) {
            setRepairs(repairsFromAPI.data);
        }
    }

    const handleChangeTableSize = (value) => {
        setTableSize(value);
    }

    React.useEffect(() => {
        getRepairs();
    }, []);

    return (
        <div className={styles.pageContainer}>
            <NavBar />
            <SecondaryNavBar />
            <div>
                <div>
                    {/* Input bar here */}
                    {/* Switch show history here */}
                    {/* Select table size here */}
                </div>
            </div>
        </div>
    )
}

export default RepairsPage;