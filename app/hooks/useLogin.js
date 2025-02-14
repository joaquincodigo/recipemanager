import { useState } from "react";

export function useLogin() {
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState(null);

  async function loginUser(email, password) {
    setIsLoginLoading(true);
    setLoginError(null);

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Login failed");

      return data;
    } catch (err) {
      setLoginError(err.message);
      setIsLoginLoading(false);
      throw err;
    }
  }

  return { loginUser, isLoginLoading, loginError };
}
