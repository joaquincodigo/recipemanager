"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // The user will be stored in a state
  const [user, setUser] = useState(null);

  // Fetching the user data from SupaBase
  useEffect(() => {
    const getUser = async () => {
      const response = await supabase.auth.getUser();
      const user = response.data.user;
      setUser(user);
    };

    getUser();

    // Listening for Auth State Changes
    const response = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null); // The session, if there is one, contains the user
    });
    const subscription = response.data.subscription;

    // CleanUp
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn: supabase.auth.signInWithPassword,
        signOut: supabase.auth.signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
