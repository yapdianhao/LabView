import * as React from 'react';
import styles from './LoginForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
import { login, reset } from '../../../slices/auth/authSlice';

const LoginForm = () => {
    const [formData, setFormData] = React.useState({
        email: '',
        password: '',
    })

    const { email, password } = formData;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);
    
    React.useEffect(() => {
        if (isError) {
            console.error(message);
        }
        if (isSuccess || user) {
            navigate('/');
        }
        dispatch(reset());
    }, [user, isError, isSuccess, message, navigate, dispatch]);

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const userData = {
            email,
            password,
        }
        console.log(userData);
        dispatch(login(userData));
    }


    return (
        <div className={styles.loginForm}>
            <form className={styles.formArea} onSubmit={onSubmit}>
                <div className={styles.loginInputLabel}>
                    Email:
                </div>
                <input className={styles.loginInputField} type="text" name="email" onChange={onChange} />
                <div className={styles.loginInputLabel}>
                    Password:
                </div>
                <input className={styles.loginInputField} type="password" name="password" onChange={onChange} />
                <div className={styles.loginRadioButton}>
                    <input type="checkbox" id="remember-login"/>
                    <label htmlFor="remember-login">
                        Remember me on this device
                    </label>
                </div>
                <button className={styles.loginButton}>Submit</button>
            </form>
        </div>
    )
}

export default LoginForm;