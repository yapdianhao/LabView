import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { MainMenuData } from './MainMenuData';
import MainMenuItem from './MainMenuItem/MainMenuItem';
import styles from './MainMenu.module.css';

const MainMenu = () => {

    const navigate = useNavigate();

    return (
        <div className={styles.mainMenu}>
            {MainMenuData.map((item) => 
                <MainMenuItem 
                    item={item} 
                    onClick={() => navigate(item.path)} 
                    key={item.itemName}
                />
            )}
        </div>
    )
}

export default MainMenu;