import styles from "./modules/Button.module.css";

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
      style={{ backgroundColor: backgroundColor[type], ...style }}
    >
      {children}
    </button>
  );
}

export default Button;
