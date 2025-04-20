import React, { useState, useEffect, useRef } from "react";
import styles from "./Navigation.module.scss";

import IconWrapper from "@/components/IconWrapper/IconWrapper";
import Dropdown from "@/components/Dropdown/Dropdown";
import siteData from "@/Data.json";

import { TfiMenu   } from "react-icons/tfi";
import { IoCloseSharp } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa6";

import flag from "@/assets/images/united-kingdom.png";
import darkModeIcon from "@/assets/images/app-dark-mode.svg";
import lightModeIcon from "@/assets/images/app-light-mode.svg";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
  
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.body.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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

  const dropdownItems = siteData.dropdownItems;
  const companyDetails = siteData.companyDetails;

  return (
    <nav className={styles.nav}>
      <div>
        <IconWrapper
          icon={isMenuOpen ? IoCloseSharp : TfiMenu }
          className={`${styles.icon} ${
            isMenuOpen ? styles.closeIcon : styles.menuIcon
          }`}
          onClick={toggleMenu}
        />
      </div>    

      <div
        ref={menuRef} 
        className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ""}`}
        >
        <Dropdown items={dropdownItems} className={styles.productLineList} />

        <ul className={styles.companyDetails}>
          {companyDetails.map((item, index) => (
            <li key={index}>{item.label}</li>
          ))}
        </ul>

        <div className={styles.siteSettings}>
          <div className={styles.container}>
            <img src={flag} width={40} height={35} className={styles.flag} alt="UK flag" />
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
    </nav>
  );
};

export default Navigation;
