import { useEffect, useState } from "react";
import styles from "./modules/UserControl.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  loadPeople,
  selectAllPeople,
  selectPeopleStatus,
} from "../../redux/slices/peopleSlice";
import { useUser } from "./useUserContext";

function UserControl() {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const users = useSelector(selectAllPeople);
  const userStatus = useSelector(selectPeopleStatus);
  const { userId: currentUserId, changeUser } = useUser();

  useEffect(() => {
    if (userStatus === "idle") {
      dispatch(loadPeople());
    }
  }, [userStatus, dispatch]);

  if (userStatus !== "succeeded") return "loading...";

  const currentUser = currentUserId
    ? users.find((user) => user.id === currentUserId)
    : null;

  return (
    <div className={styles.userContainer}>
      <div
        className={styles.user}
        onClick={() => setMenuOpen((current) => !current)}
      >
        {currentUser ? (
          <>
            <span>{`${currentUser.firstName} ${currentUser.lastName}`}</span>
            <img src="/images/noimage.png" />
          </>
        ) : (
          "Login"
        )}
      </div>
      {menuOpen && (
        <div className={styles.menu} onClick={() => setMenuOpen(false)}>
          {users.map((user) => (
            <div
              key={user.id}
              className={styles.menuItem}
              onClick={() => changeUser(user.id)}
            >
              <img src={`${user.image ? user.image : "/images/noimage.png"}`} />
              <span>{`${user.firstName} ${user.lastName}`}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserControl;
