import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { MainMenuData } from './MainMenuData';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import styles from './MainMenu.module.css';

const MainMenu = () => {

    const navigate = useNavigate();

    return (
        <div className={styles.mainMenu}>
            <Box className={styles.mainMenuBox}>
                {MainMenuData.map((item) => 
                    <Paper 
                        key={item.itemName} 
                        id={styles['mainMenuItemPaper']} 
                        elevation={5} 
                        className={styles.mainMenuItemPaper}
                        onClick={() => navigate(item.path)}
                    >
                        {item.itemName}
                    </Paper>
                )}
            </Box>
        </div>
    )
}

export default MainMenu;