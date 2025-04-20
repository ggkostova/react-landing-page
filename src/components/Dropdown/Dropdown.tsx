import React from "react";
import DropdownItem from "./DropdownItem/DropdownItem";
import styles from "./Dropdown.module.scss";

interface DropdownProps {
  items: { label: string; subItems?: string[] }[];
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ items, className}) => {
  return (
    <ul className={`${styles.dropdownList} ${className ? className : ''}`}>
      {items.map((item, index) => (
        <DropdownItem key={index} label={item.label} subItems={item.subItems} />
      ))}
    </ul>
  );
};

export default Dropdown;
