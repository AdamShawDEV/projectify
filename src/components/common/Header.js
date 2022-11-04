import React from "react";
import styles from "./modules/Header.module.css";
import NavMenu from "./NavMenu";
import UserControl from "./UserControl";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <NavMenu />
        <span className={styles.logo}>Projectify</span>
      </div>
      <UserControl />
    </header>
  );
}

export default Header;
