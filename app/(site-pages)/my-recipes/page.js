"use client";

import CardsList from "@/app/components/my-recipes/CardsList";
import Button from "@/app/components/ui/Button";
import Link from "next/link";
import { useEffect, useState } from "react";

async function getUserRecipes() {
  const res = await fetch("/api/user-recipes", {
    cache: "no-store",
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch recipes");
  }

  const { recipes } = await res.json();
  return recipes;
}

export default function RecipesPage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getUserRecipes().then(setRecipes);
  }, []);

  return (
    <div className="flex flex-col w-screen px-3 md:w-max md:mx-auto">
      <h1 className="text-xl font-bold mt-3">Your Recipes</h1>
      <h2 className="text-lg mb-5">Explore your own creations</h2>

      {recipes.length > 0 ? (
        <CardsList recipes={recipes} />
      ) : (
        <div className="mt-10 p-5 gap-y-3 flex flex-col text-center rounded-md bg-[#7fc37e21]">
          <p>Oops! You haven't created any recipes yet.</p>
          <p>You can start by creating your first one using the button below.</p>
          <div className="flex h-full justify-center mt-2">
            <Link href="/create-recipe">
              <Button enabled type="primary" label="Create a recipe" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}