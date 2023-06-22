import * as React from "react";
import axios from 'axios';
import { Input } from "@douyinfe/semi-ui";
import NavBar from "../NavBar/NavBar";
import SecondaryNavBar from "../SecondaryNavBar/SecondaryNavBar";
import styles from "./PMCalsOqPage.module.css";

const PMCalsOqPage = () => {
  const [pmCalOqs, setPmCalOqs] = React.useState([]);
  const [tableSize, setTableSize] = React.useState(6);
  const [shouldShowHistory, setShouldShowHistory] = React.useState(false);
  const [shouldShowPm, setShouldShowPm] = React.useState(true);
  const [shouldShowCal, setShouldShowCal] = React.useState(true);
  const [shouldShowOq, setShouldShowOq] = React.useState(true);
  const [shouldShowEditModal, setShouldShowEditModal] = React.useState(false);

  const getPmCalOqs = async() => {
    // todo
  };

  const handleClosePopup = () => {
    setShouldShowEditModal(false);
  };

  React.useEffect(() => {
    getPmCalOqs();
  }, [shouldShowHistory, shouldShowCal, shouldShowPm, shouldShowOq]);

  console.log(pmCalOqs);

  return (
    <div className={styles.pageContainer}>
      <NavBar />
      <SecondaryNavBar />
      <div>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default PMCalsOqPage;
