import styles from "./modules/InputText.module.css";

function InputText({ id, placeholder, value, onChange }) {
  return (
    <input
      className={styles.inputTextField}
      type="text"
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
    />
  );
}

export default InputText;
