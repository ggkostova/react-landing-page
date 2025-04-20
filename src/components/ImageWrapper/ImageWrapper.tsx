import React from "react";
import styles from "./ImageWrapper.module.scss";

interface ImageProps {
  title?: string;
  subtitle?: string;
  imagePath?: string;
}

const ImageWrapper: React.FC<ImageProps> = ({ title, subtitle, imagePath }) => {
  return (
    <div className={styles.container}>
      <img src={imagePath} alt={title} className={styles.image} />
      <div className={styles.textContainer}>
        <span className={styles.title}>{title}</span>
        <span className={styles.subtitle}>{subtitle}</span>
      </div>
    </div>
  );
};

export default ImageWrapper;
