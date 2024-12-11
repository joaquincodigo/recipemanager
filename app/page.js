"use client";

import { useEffect, useState } from "react";
import { useSearch } from "./context/SearchContext";
import { fetchRecipes } from "../utils/recipes";
import RecipeCard from "./components/RecipeCard";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const { query } = useSearch();

  useEffect(() => {
    const loadRecipes = async () => {
      const data = await fetchRecipes();
      setRecipes(data);
    };
    loadRecipes();
  }, []);

  useEffect(() => {
    const cleanQuery = query
      .trim()
      .toLowerCase()
      .replace(/[^\w\s]/g, "");
    //localhost:3000/
    http: query
      ? setFilteredRecipes(
          recipes.filter((recipe) =>
            recipe.title?.toLowerCase().includes(cleanQuery)
          )
        )
      : setFilteredRecipes(recipes);
  }, [query, recipes]);

  console.log("query", query);
  console.log("filteredRecipes", filteredRecipes);
  console.log("Recipes", recipes);

  return (
    <div className="p-3">
      <div
        className="
        px-16

        grid
        gap-4
        justify-items-center

        grid-cols-1

        md:grid-cols-3

        lg:grid-cols-4
        "
      >
        {filteredRecipes.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe.id} />
        ))}

        {/* TESTING */}
        {filteredRecipes.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe.id} />
        ))}
        {filteredRecipes.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe.id} />
        ))}
        {filteredRecipes.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe.id} />
        ))}
        {filteredRecipes.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe.id} />
        ))}
        {/* TESTING */}
      </div>
    </div>
  );
}
