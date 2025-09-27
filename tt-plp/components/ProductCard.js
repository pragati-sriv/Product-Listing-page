import styles from "../styles/ProductCard.module.css";

export default function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={product.image}
          alt={product.title}
          className={styles.image}
          loading="lazy"
        />
      </div>
      <h3 className={styles.title}>{product.title}</h3>
      <p className={styles.price}>${product.price}</p>
      <button className={styles.button}>Buy Now</button>
    </div>
  );
}
