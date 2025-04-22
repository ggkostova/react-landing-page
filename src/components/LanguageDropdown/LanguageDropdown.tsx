import React, { useState, useRef, useEffect } from "react";
import styles from "./LanguageDropdown.module.scss";
import { FaChevronDown } from "react-icons/fa";
import IconWrapper from "@/components/IconWrapper/IconWrapper"; 
import flagEN from "@/assets/images/united-kingdom.png"; 
import flagBG from "@/assets/images/bulgaria.png";

const LanguageDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<"EN" | "BG">("EN");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOutsideClick = (e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleLanguageChange = (lang: "EN" | "BG") => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className={styles.container} ref={dropdownRef}>
      <div className={styles.selected} onClick={toggleDropdown}>
        <img
          src={language === "EN" ? flagEN : flagBG}
          width={40}
          height={35}
          className={styles.flag}
          alt={`${language} flag`}
        />
        <span className={styles.lang}>{language}</span>
        <IconWrapper icon={FaChevronDown} className={styles.chevronDown} />
      </div>

      {isOpen && (
        <div className={styles.dropdown}>
          {language !== "EN" && (
            <div onClick={() => handleLanguageChange("EN")} className={styles.option}>
              <img src={flagEN} width={30} height={25} className={styles.flag} alt="UK flag" />
              <span className={styles.lang}>EN</span>
            </div>
          )}
          {language !== "BG" && (
            <div onClick={() => handleLanguageChange("BG")} className={styles.option}>
              <img src={flagBG} width={30} height={25} className={styles.flag} alt="BG flag" />
              <span className={styles.lang}>BG</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
