import { useEffect, useState } from "react";
import styles from "./modules/UserControl.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  loadPeople,
  selectAllPeople,
  selectPeopleStatus,
} from "../../redux/slices/peopleSlice";
import { useUser } from "./useUserContext";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import UserImage from "./UserImage";

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
            <UserImage
              src={"/images/" + currentUser.image}
              alt={currentUser.firstName}
            />
          </>
        ) : (
          "Login"
        )}
      </div>
      {menuOpen && (
        <Menu closeMenu={() => setMenuOpen(false)}>
          {!currentUserId ? (
            users.map((user) => (
              <MenuItem key={user.id} onClick={() => changeUser(user.id)}>
                <UserImage
                  styles={styles.userImage}
                  src={"/images/" + user.image}
                  alt={user.firstName}
                />
                <span>{`${user.firstName} ${user.lastName}`}</span>
              </MenuItem>
            ))
          ) : (
            <MenuItem onClick={() => changeUser(null)}>
              <span>logout</span>
            </MenuItem>
          )}
        </Menu>
      )}
    </div>
  );
}

export default UserControl;
