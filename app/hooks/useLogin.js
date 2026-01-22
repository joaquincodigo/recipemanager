import { useState, useCallback } from "react";

const useLogin = () => {
  const [loginError, setLoginError] = useState(null);
  const [isLoginPending, setIsLoginPending] = useState(false);

  const handleLogin = useCallback(async (email, password) => {
    setIsLoginPending(true);

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      setLoginError(data.error || "Invalid credentials");
      setIsLoginPending(false);
      return false;
    }

    document.cookie = `userId=${data.userId}; path=/; SameSite=Lax`;
    document.cookie = `username=${data.username}; path=/; SameSite=Lax`;

    setLoginError(null);
    setIsLoginPending(false);
    return true;
  }, []);

  return { handleLogin, loginError, isLoginPending };
};

export default useLogin;
