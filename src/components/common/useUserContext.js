import { useState } from "react";
import { createContext, useContext } from "react";

const UserContext = createContext();

function useUser() {
  return useContext(UserContext);
}

function UserContextProvider({ children }) {
  const [userId, setUserId] = useState(null);

  function changeUser(userId) {
    setUserId(userId);
  }

  return (
    <UserContext.Provider value={{ userId, changeUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
export { useUser };
