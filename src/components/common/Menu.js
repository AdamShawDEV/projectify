import styles from "./modules/Menu.module.css";
import PropTypes from "prop-types";

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

Menu.propTypes = {
  closeMenu: PropTypes.func.isRequired,
  side: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Menu;
