import React, { useState, useRef, useEffect} from "react";
import styles from "@/components/Dropdown/DropdownItem/DropdownItem.module.scss";
import { FaChevronDown } from "react-icons/fa6";
import IconWrapper from "@/components/IconWrapper/IconWrapper";

interface DropdownItemProps {
  label: string;
  subItems?: string[];
}

const DropdownItem: React.FC<DropdownItemProps> = ({ label, subItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false); 
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside); 
    };
  }, []);

  return (
    <li
      ref={dropdownRef}
      className={`${styles.item} ${isOpen ? styles.open : ""}`}
      onClick={toggleDropdown}
    >
      <span className={styles.label}>{label}</span>
      <IconWrapper icon={FaChevronDown} className={styles.chevronDown} />
      {subItems && (
        <ul className={`${styles.subMenu} ${isOpen ? styles.subMenuOpen : ""}`}>
          {subItems.map((subItem, index) => (
            <li key={index}>{subItem}</li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default DropdownItem;
