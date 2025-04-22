import React, { useState, useEffect } from "react";
import Dropdown from "@/components/Dropdown/Dropdown";
import siteData from "@/Data.json";
import LanguageDropdown from "@/components/LanguageDropdown/LanguageDropdown";
import darkModeIcon from "@/assets/images/app-dark-mode.svg";
import lightModeIcon from "@/assets/images/app-light-mode.svg";
import styles from "./MenuWrapper.module.scss";

const MenuWrapper = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const dropdownItems = siteData.dropdownItems;
  const companyDetails = siteData.companyDetails;

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if(savedTheme === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.body.classList.remove("dark");
    }
  }, []);

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
            <LanguageDropdown/>
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
