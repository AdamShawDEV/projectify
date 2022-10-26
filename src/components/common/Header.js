import React from "react";
import styles from "./modules/Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <span className={styles.logo}>Projectify</span>
      <div className={styles.about}></div>
    </header>
  );
}

export default Header;
