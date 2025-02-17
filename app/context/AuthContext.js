"use client"

import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const match = document.cookie.match(/(^| )userId=([^;]+)/);
    if (match) {
      setUserId(match[2]);
      setLoggedIn(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ userId, loggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use AuthContext
export const useAuth = () => useContext(AuthContext);
