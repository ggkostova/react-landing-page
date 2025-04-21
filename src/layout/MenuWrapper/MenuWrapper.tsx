import React, { useState, useEffect } from "react";
import Dropdown from "@/components/Dropdown/Dropdown";
import IconWrapper from "@/components/IconWrapper/IconWrapper";
import siteData from "@/Data.json";
import { FaChevronDown } from "react-icons/fa6";

import flag from "@/assets/images/united-kingdom.png";
import darkModeIcon from "@/assets/images/app-dark-mode.svg";
import lightModeIcon from "@/assets/images/app-light-mode.svg";

import styles from "./MenuWrapper.module.scss";

const MenuWrapper = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const dropdownItems = siteData.dropdownItems;
  const companyDetails = siteData.companyDetails;

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newValue = !prev;

      if (newValue) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }

      localStorage.setItem("theme", newValue ? "dark" : "light");

      return newValue;
    });
  };

  return (
    <div className={styles.container}>
      <Dropdown items={dropdownItems} className={styles.productLineList} />

      <div className={styles.helpers}>
        <ul className={styles.companyDetails}>
          {companyDetails.map((item, index) => (
            <li key={index}>{item.label}</li>
          ))}
        </ul>
        <div className={styles.siteSettings}>
          <div className={styles.langContainer}>
            <img
              src={flag}
              width={40}
              height={35}
              className={styles.flag}
              alt="UK flag"
            />
            <span className={styles.lang}>EN</span>
            <IconWrapper icon={FaChevronDown} className={styles.chevronDown} />
          </div>



          <div onClick={toggleDarkMode} className={styles.themeToggle}>
            <img
              src={isDarkMode ? darkModeIcon : lightModeIcon}
              alt={isDarkMode ? "Dark mode icon" : "Light mode icon"}
              width={25}
              height={25}
              className={isDarkMode ? styles.dark : styles.light}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuWrapper;
