import * as React from "react";
import { useNavigate } from "react-router-dom";
import { MainMenuData } from "./MainMenuData";
import { useDispatch } from "react-redux";
import { pageIndexSlice } from "../../slices/pageIndex/pageIndexSlice";
import MainMenuItem from "./MainMenuItem/MainMenuItem";
import styles from "./MainMenu.module.css";

const MainMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { setPageIndex } = pageIndexSlice.actions;

  const handleClickMainMenuItem = (item, index) => {
    navigate(item.path);
    console.log(item);
    if (item.pageIndex !== undefined) {
      dispatch(setPageIndex({ pageIndex: item.pageIndex }));
    }
  };

  return (
    <div className={styles.mainMenu}>
      {MainMenuData.map((item, index) => (
        <MainMenuItem
          item={item}
          onClick={() => handleClickMainMenuItem(item, index)}
          key={item.itemName}
        />
      ))}
    </div>
  );
};

export default MainMenu;
