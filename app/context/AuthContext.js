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
  const [loggedIn, setLoggedIn] = useState(false);

  // Refresh auth state by re-reading the cookie
  const refreshAuth = useCallback(() => {
    const match = document.cookie.match(/(^| )userId=([^;]+)/);
    if (match) {
      setUserId(match[2]);
      setLoggedIn(true);
    } else {
      setUserId(null);
      setLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    refreshAuth();
  }, [refreshAuth]);

  return (
    <AuthContext.Provider value={{ userId, loggedIn, refreshAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
