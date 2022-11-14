import styles from "./modules/TextArea.module.css";
import PropTypes from "prop-types";

function TextArea({ id, placeholder, value, onChange }) {
  return (
    <textarea
      className={styles.textArea}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
    />
  );
}

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextArea;
