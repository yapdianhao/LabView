import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaUserAlt } from "react-icons/fa";
import { IoSettings, IoLogOut } from "react-icons/io5";
import { logout, reset } from '../../features/auth/authSlice';
import { ReactComponent as LabViewSvg } from '../../assets/labview-logo.svg';
import NavBarOption from './NavBarOption/NavBarOption';
import styles from "./NavBar.module.css";

const NavBar = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const onLogOut = () => {
        dispatch(logout());
        dispatch(reset());
        navigate('/');
    }
    return (
        <div className={styles.navbar}>
            <div className={styles.navLogo}>
                <LabViewSvg />
            </div>
            <div className={styles.navMenu}>
                <NavBarOption optionName="Account" optionIcon={<FaUserAlt />} />
                <NavBarOption optionName="Settings" optionIcon={<IoSettings />} />
                <NavBarOption optionName="Logout" optionIcon={<IoLogOut />} onClick={onLogOut} />
            </div>
        </div>
    );
}

export default NavBar;