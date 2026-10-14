import React from "react";
import AddToCard from "./AddToCard";
import styles from "./productCard.module.css";
import st from "./../style.module.css"

const ProductCard = () => {
  return (
    <div className={styles.card}>
      <AddToCard />
    </div>
  );
};

export default ProductCard;
