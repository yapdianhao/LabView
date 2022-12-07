import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { navContents } from '../../constants';
import { pageIndexSlice } from '../../slices/pageIndex/pageIndexSlice';
import { MainMenuData } from '../MainMenu/MainMenuData';
import styles from './SecondaryNavBar.module.css';

const SecondaryNavBar = () => {

    const navigate = useNavigate();
    const { pageIndex } = useSelector((state) => state.pageIndex);
    const dispatch = useDispatch();
    const { setPageIndex } = pageIndexSlice.actions;

    const handleClickMenuItem = (index) => {
        dispatch(setPageIndex({ pageIndex: index }));
        const selectedItem = MainMenuData[MainMenuData.findIndex(mainMenuItem => mainMenuItem.pageIndex === index)];
        navigate(selectedItem.path);
    };

    return (
        <div className={styles.wrapper}>
            {navContents.map((navContent, index) => (
                index === pageIndex ? 
                    <div className={styles.contentWrapperSelected} onClick={() => handleClickMenuItem(index)}>{navContent}</div> : 
                    <div className={styles.contentWrapper} onClick={() => handleClickMenuItem(index)}>{navContent}</div>
            ))}
        </div>
    )
}

export default SecondaryNavBar;