import styles from "./modules/Menu.module.css";

function Menu({ closeMenu, side = "right", children }) {
  return (
    <div
      className={styles.menu}
      onClick={closeMenu}
      style={side === "right" ? { right: ".4rem" } : { left: ".4rem" }}
    >
      {children}
    </div>
  );
}

export default Menu;
