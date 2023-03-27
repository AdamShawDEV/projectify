import styles from "./modules/Menu.module.css";
import PropTypes from "prop-types";
import useHandleOusideClick from "../../hooks/useHandleOusideClick";
import { useRef } from "react";

function Menu({ closeMenu, side = "right", children }) {
  const wrapperRef = useRef(null);
  useHandleOusideClick(wrapperRef, closeMenu);

  return (
    <div ref={wrapperRef} onClick={closeMenu}>
      <div
        className={styles.menu}
        style={side === "right" ? { right: ".4rem" } : { left: ".4rem" }}
      >
        {children}
      </div>
    </div>
  );
}

Menu.propTypes = {
  closeMenu: PropTypes.func.isRequired,
  side: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Menu;
