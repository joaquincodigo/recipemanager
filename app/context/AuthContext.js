// AuthContext.js
"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [username, setUsername] = useState(null); // Add username state
  const [loggedIn, setLoggedIn] = useState(false);

  // Refresh auth state by re-reading the cookies
  const refreshAuth = useCallback(() => {
    const userIdMatch = document.cookie.match(/(^| )userId=([^;]+)/);
    const usernameMatch = document.cookie.match(/(^| )username=([^;]+)/);

    if (userIdMatch && usernameMatch) {
      setUserId(userIdMatch[2]);
      setUsername(usernameMatch[2]); // Set the username from the cookie
      setLoggedIn(true);
    } else {
      setUserId(null);
      setUsername(null); // Reset username if not found
      setLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    refreshAuth();
  }, [refreshAuth]);

  return (
    <AuthContext.Provider value={{ userId, username, loggedIn, refreshAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
