import React from "react";
import logo from "@/assets/images/app-logo.svg";
import styles from "./Logo.module.scss";

const Logo: React.FC = () => {
  return <img src={logo} alt="Logo" className={styles.logo}/>
};

export default Logo
