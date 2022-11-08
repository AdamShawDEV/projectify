import styles from "./modules/MessageList.module.css";

function MessageList({ messages, people, userId }) {
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
            <img
              src={`${sender.image ? sender.image : "/images/noimage.png"}`}
              alt="user"
              style={
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

export default MessageList;
