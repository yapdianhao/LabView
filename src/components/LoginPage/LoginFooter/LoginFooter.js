import * as React from "react";
import styles from "./LoginFooter.module.css";
import { ReactComponent as SiLogoSvg } from "../../../assets/synertec-logo.svg";

const LoginFooter = () => {
  return (
    <div className={styles.loginFooter}>
      <div className={styles.loginFooterText}>By Synertec Intelligence</div>
      <div className={styles.siLogoSvgWrapper}>
        <SiLogoSvg className={styles.siLogoSvg} />
      </div>
    </div>
  );
};

export default LoginFooter;
