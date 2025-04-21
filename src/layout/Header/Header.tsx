import React from "react";
import Navigation from "@/components/Navigation/Navigation";

import styles from "./Header.module.scss";
import Logo from "@/components/Logo/Logo"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.nav}>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
