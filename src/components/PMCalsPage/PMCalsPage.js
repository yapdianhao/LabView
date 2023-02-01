import * as React from "react";
import NavBar from "../NavBar/NavBar";
import SecondaryNavBar from "../SecondaryNavBar/SecondaryNavBar";
import styles from "./PMCalsPage.module.css";

const PMCalsPage = () => {
  return (
    <div className={styles.pageContainer}>
      <NavBar />
      <SecondaryNavBar />
    </div>
  );
};

export default PMCalsPage;
