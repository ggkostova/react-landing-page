import React from "react";
import { IconType } from "react-icons";

interface IconWrapperProps {
  icon: IconType;
  className?: string;
  onClick?: () => void;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ icon, className, onClick }) => {
  const IconComponent = icon as React.ElementType; 
  return <IconComponent className={className} onClick={onClick} />;
};

export default IconWrapper;
