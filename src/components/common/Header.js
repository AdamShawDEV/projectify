import React from "react";
import styles from "./modules/Header.module.css";
import NavMenu from "./NavMenu";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <NavMenu />
        <span className={styles.logo}>Projectify</span>
      </div>
      <div className={styles.about}></div>
    </header>
  );
}

export default Header;
