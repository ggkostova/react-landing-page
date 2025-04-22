import React, { useState, useEffect, useRef } from "react";
import IconWrapper from "@/components/IconWrapper/IconWrapper";
import { TfiMenu } from "react-icons/tfi";
import { IoCloseSharp } from "react-icons/io5";
import MenuWrapper from "@/layout/MenuWrapper/MenuWrapper";
import styles from "./Navigation.module.scss";
import useScreenWidth from "@/composables/useScreenWidth";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLargeScreen = useScreenWidth();
  const menuRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    if (isLargeScreen && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isLargeScreen, isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.nav}>
      <div>
        <IconWrapper
          icon={isMenuOpen ? IoCloseSharp : TfiMenu}
          className={`${styles.icon} ${
            isMenuOpen ? styles.closeIcon : styles.menuIcon
          }`}
          onClick={toggleMenu}
        />
      </div>

      {isLargeScreen && (
        <MenuWrapper/>
      )}

      <div
        ref={menuRef}
        className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ""}`}
      >
          <MenuWrapper/>
      </div>
    </nav>
  );
};

export default Navigation;
