"use client";

import { useEffect, useState } from "react";
import { useSearch } from "../../context/SearchContext";
import { useAuth } from "../../context/AuthContext";

import RecipeCard from "../../components/RecipeCard";

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const { query } = useSearch();

  useEffect(() => {
    const loadRecipes = async () => {
      const response = await fetch("/api/recipes");
      const data = await response.json();
      setRecipes(data.recipes);
    };
    loadRecipes();
  }, []);

  useEffect(() => {
    const cleanQuery = query
      .trim()
      .toLowerCase()
      .replace(/[^\w\s]/g, "");
    http: query
      ? setFilteredRecipes(
          recipes.filter((recipe) =>
            recipe.title?.toLowerCase().includes(cleanQuery)
          )
        )
      : setFilteredRecipes(recipes);
  }, [query, recipes]);


  return (
    <div className="p-3">
     <div
        className="
        grid
        grid-cols-1
        w-full
        gap-4
        justify-items-center
        "
      >
        {filteredRecipes.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe.id} />
        ))}
      </div>
    </div>
  );
}
