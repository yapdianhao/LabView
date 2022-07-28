import * as React from 'react';
import styles from './NavBarOption.module.css';

const NavBarOption = (props) => {
    return (
        <div className={styles.navBarOption} onClick={props.onClick} >
            <div className={styles.navBarIcon}>{props.optionIcon}</div>
            {props.optionName}
        </div>
    )
}

export default NavBarOption;