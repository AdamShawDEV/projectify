import styles from "./modules/MenuItem.module.css";

function MenuItem({ children, onClick }) {
  return (
    <div className={styles.menuItem} onClick={onClick}>
      {children}
    </div>
  );
}

export default MenuItem;
