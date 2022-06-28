import * as React from 'react';
import styles from './LoginForm.module.css';

const LoginForm = () => {
    return (
        <div className={styles.loginForm}>
            <form className={styles.formArea}>
                <div className={styles.loginInputLabel}>
                    Email:
                </div>
                <input className={styles.loginInputField} type="text" />
                <div className={styles.loginInputLabel}>
                    Password:
                </div>
                <input className={styles.loginInputField} type="text" />
                <div className={styles.loginRadioButton}>
                    <input type="checkbox" id="remember-login"/>
                    <label for="remember-login">
                        Remember me on this device
                    </label>
                </div>
                <button className={styles.loginButton}>Submit</button>
            </form>
        </div>
    )
}

export default LoginForm;