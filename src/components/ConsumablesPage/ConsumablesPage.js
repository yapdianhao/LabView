import * as React from "react";
import NavBar from "../NavBar/NavBar";
import SecondaryNavBar from "../SecondaryNavBar/SecondaryNavBar";

import styles from "./ConsumablesPage.module.css";

const ConsumablesPage = () => {
  return (
    <div className={styles.pageContainer}>
      <NavBar />
      <SecondaryNavBar />
    </div>
  );
};

export default ConsumablesPage;
