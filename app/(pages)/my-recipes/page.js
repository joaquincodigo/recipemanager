"use client";

import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";

export default function MyRecipesPage() {
  const { user, signIn } = useAuth();

  useEffect(() => {
    const signInUser = async () => {
      try {
        const { user, error } = await signIn({
          email: "user@example.com",
          password: "12345",
        });

        if (error) {
          console.error("Sign-in error:", error.message);
        } else {
          console.log("User signed in:", user);
        }
      } catch (err) {
        console.error("Unexpected error:", err.message);
      }
    };

    if (!user) {
      signInUser();
    }
  }, [signIn, user]);

  return (
    <div className="p-3">
      <h1 className="text-xl font-bold">Your Recipes</h1>
    </div>
  );
}

