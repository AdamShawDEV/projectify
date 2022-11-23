import styles from "./modules/MessageList.module.css";
import { noUserImageUri } from "../../consts";
import PropTypes from "prop-types";
import { useUser } from "../common/useUserContext";
import UserImage from "../common/UserImage";

function MessageList({ messages, people }) {
  const { userId } = useUser();

  return (
    <div className={styles.messageContainer}>
      {messages.map((message) => {
        const sender = people.find((person) => person.id === message.user);

        return (
          <div
            key={message.id}
            className={styles.message}
            style={
              userId === message.user
                ? {
                    alignSelf: "flex-end",
                    backgroundColor: "#4b4bf9ff",
                    color: "#fff",
                  }
                : null
            }
          >
            <UserImage
              src={"/images/" + sender.image}
              alt={`${sender.firstName}`}
              styles={
                userId === message.user
                  ? { left: "auto", right: "0.2rem" }
                  : null
              }
            />
            {message.content}
            <div
              className={styles.senderName}
              style={userId === message.user ? { textAlign: "right" } : null}
            >
              {sender.firstName}
            </div>
          </div>
        );
      })}
    </div>
  );
}

MessageList.propTypes = {
  messages: PropTypes.array.isRequired,
  people: PropTypes.array.isRequired,
};

export default MessageList;
