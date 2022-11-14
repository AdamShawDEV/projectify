import styles from "./modules/MenuItem.module.css";

import PropTypes from "prop-types";

function MenuItem({ children, onClick }) {
  return (
    <div className={styles.menuItem} onClick={onClick}>
      {children}
    </div>
  );
}

MenuItem.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MenuItem;
