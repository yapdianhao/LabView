import * as React from 'react';
import styles from './LoginPage.module.css';
import { ReactComponent as LabViewSvg } from '../../assets/labview-logo.svg';
import LoginForm from './LoginForm/LoginForm';

const LoginPage = () => {
    return (
        <div className={styles.loginPage}>
            <div className={styles.logoArea}>
                <LabViewSvg className={styles.logo} />
            </div>
            <LoginForm />
        </div>
    )
}

export default LoginPage;