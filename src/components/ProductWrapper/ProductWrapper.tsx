import React from "react";
import styles from "./ProductWrapper.module.scss";
import ProductCard from "./ProductCard/ProductCard";

interface ProductWrapperProps {
  title?: string;
  list: { name: string; imagePath?: string }[];
}

const ProductWrapper: React.FC<ProductWrapperProps> = ({ title, list }) => {
  return (
    <div className={styles.container}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {list.map((item, index) => {
        return (
          <ProductCard
            key={index}
            name={item.name}
            imagePath={`https://picsum.photos/200/300?random=${index + 1}`}
          />
        );
      })}
    </div>
  );
};

export default ProductWrapper;
