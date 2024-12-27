"use client";

import { useState, useEffect } from "react";
import { fetchRecipeById } from "../../../utils/fetchRecipes";

export default function RecipePage({ params }) {
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resolvedParams = await params; // Params is a promise in NextJS 15+
        const data = await fetchRecipeById(resolvedParams.id);

        if (!data.length) {
          throw new Error("Recipe not found"); // Explicitly throw an error for empty results
        }

        setRecipe(data[0]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>An error has ocurred</p>;
  return (
    <div className="p-3">
      <img
        className="w-full rounded-lg mb-3"
        src={recipe?.image}
        alt="The finished recipe"
      />

      <h1 className="font-bold text-2xl mb-3">{recipe?.title}</h1>

      <p className="mb-6">{recipe?.description}</p>


      <div className="text-xl font-bold">
        Ingredients:
        <ul>
          {recipe?.ingredients?.map((ingredient, index) => (
            <li className="text-base font-normal list-disc" key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

			
      <div>
        Category:
        <div className="bg-[#7FC37E] text-white rounded inline-flex px-0.5 py-0.2">{recipe?.category}</div>
      </div>

      <p>Preparation time: {recipe?.preparation_time} minutes</p>

      <div className="text-sm text-gray-400">Current ID: {recipe?.id}</div>
    </div>
  );
}
