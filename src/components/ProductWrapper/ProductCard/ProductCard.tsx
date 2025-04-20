import React from "react";
import styles from "./ProductCard.module.scss";

interface ProductCardProps {
  name: string;
  imagePath?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, imagePath }) => {
  return (
    <div className={styles.container}>
      <img src={imagePath} alt={name} className={styles.image} />
      <span className={styles.title}>{name}</span>
    </div>
  );
};

export default ProductCard;
