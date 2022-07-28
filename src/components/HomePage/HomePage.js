import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import MainMenu from '../MainMenu/MainMenu';
import NavBar from '../NavBar/NavBar';
import styles from './HomePage.module.css';

const HomePage = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    React.useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate, dispatch]);


    return (
        <div className={styles.homePage}>
            <NavBar />
            <MainMenu />
        </div>
    );
}

export default HomePage;