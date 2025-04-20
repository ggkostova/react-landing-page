import React from 'react';
import styles from '@/components/Button/Button.module.scss';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
}) => {
  const baseClass = styles.button;

  return (
    <button
      className={`${baseClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
