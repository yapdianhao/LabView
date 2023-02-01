import * as React from "react";

import styles from "./MainMenuItem.module.css";

const MainMenuItem = (props) => {
  const { item, onClick } = props;
  return (
    <div className={styles.mainMenuItemContainer} onClick={onClick}>
      <div className={styles.content}>
        <div className={styles.iconWrapper}>{item.icon}</div>
        {item.itemName}
      </div>
    </div>
  );
};

export default MainMenuItem;
