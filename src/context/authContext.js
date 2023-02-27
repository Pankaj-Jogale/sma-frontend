import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    setCurrentUser({
      id: 1,
      name: "User name",
      profilePic:
        "https://images.pexels.com/photos/3228732/pexels-photo-3228732.jpeg?auto=compress&cs=tinysrgb&w=1600",
    });
  };
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]); //as value changes effect happen &new value tored in local storage

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
