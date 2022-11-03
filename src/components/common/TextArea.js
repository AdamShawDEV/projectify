import styles from "./modules/TextArea.module.css";

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

export default TextArea;
