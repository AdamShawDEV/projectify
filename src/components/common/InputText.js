import styles from "./modules/InputText.module.css";
import PropTypes from "prop-types";

function InputText({ id, placeholder, value, onChange, disabled }) {
  return (
    <input
      className={styles.inputTextField}
      type="text"
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      required
    />
  );
}

InputText.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default InputText;
