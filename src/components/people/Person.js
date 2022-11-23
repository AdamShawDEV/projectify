import styles from "./modules/Person.module.css";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import UserImage from "../common/UserImage";

function Person({ person }) {
  const navigate = useNavigate();

  return (
    <div
      className={styles.person}
      onClick={() => navigate(`/person/${person.id}`)}
    >
      <UserImage
        styles={styles.image}
        src={"/images/" + person.image}
        alt={`${person.firstName} ${person.lastName}`}
      />
      <h2>{`${person.firstName} ${person.lastName}`}</h2>
    </div>
  );
}

Person.propTypes = {
  person: PropTypes.object.isRequired,
};

export default Person;
