import styles from "./modules/Form.module.css";

function Form({ children, onSubmit }) {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      {children}
    </form>
  );
}

export default Form;
