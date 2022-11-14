import styles from "./modules/Button.module.css";
import PropTypes from "prop-types";

const backgroundColor = {
  normal: "#4b4bf9ff",
  warning: "#fddd0eff",
  success: "#2fcc71ff",
  error: "#e84c3dff",
};

function Button({
  id,
  onClick,
  children,
  style,
  disabled = false,
  type = "success",
}) {
  return (
    <button
      id={id}
      className={styles.button}
      onClick={onClick}
      disabled={disabled}
      style={{
        backgroundColor: backgroundColor[type],
        ...style,
      }}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  id: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  type: PropTypes.string,
};

export default Button;
