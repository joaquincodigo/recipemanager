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

  if (loading) return <p>Loading...</p>; // TODO SPINNER
  if (error) return <p>An error has ocurred</p>; // TODO ERROR ICON

  return (
    <div className="p-3 pb-10">
      {/* TITLE AND PREVIEW */}
      <section className="mb-12">
        <img
          className="w-full rounded-lg mb-3"
          src={recipe?.image}
          alt="The finished recipe"
        />
        <h1 className="font-bold text-4xl mb-3">
          {recipe?.title.charAt(0).toUpperCase() +
            recipe?.title.slice(1).toLowerCase()}
        </h1>
        <p>{recipe?.description}</p>
      </section>

      {/* PREPARATION TIME */}
      <section className="mb-6">
        <h2 className="font-bold text-xl mb-3">Preparation time</h2>
        <ul>
          <li className="ms-5 list-disc">{recipe?.preparation_time} minutes</li>
        </ul>
      </section>

      {/* INGREDIENTS */}
      <section className="mb-6">
        <h2 className="mb-3 text-xl font-bold">Ingredients</h2>
        <ul className="mb-3">
          {recipe?.ingredients?.map((ingredient, index) => (
            <li className="ms-5 list-disc" key={index}>
              {ingredient}
            </li>
          ))}
        </ul>
      </section>

      {/* PREPARATIONS STEPS  */}
      <section className="mb-6">
        <h2 className="font-bold text-xl mb-3">Preparation Steps</h2>
        <ul>
          {recipe.preparation_steps.map((step, index) => (
            <li className="ms-5 list-decimal" key={index}>
              {recipe.preparation_steps[index]}
            </li>
          ))}
        </ul>
      </section>

      {/* CATEGORY */}
      <section className="mb-6">
        <h2 className="font-bold text-xl mb-3">Category</h2>
        <ul>
          <li className="ms-5 list-disc">{recipe?.category}</li>
        </ul>
      </section>

      {/* SERVINGS servings*/}
      <section className="mb-6">
        <h2 className="font-bold text-xl mb-3">Yield</h2>
        <ul>
          <li className="ms-5 list-disc">{recipe?.servings} servings</li>
        </ul>
      </section>

      {/* CATEGORY */}
      <section className="mb-6">
        <h2 className="font-bold text-xl mb-3">Category</h2>
        <ul>
          <li className="ms-5 list-disc">{recipe?.category}</li>
        </ul>
      </section>

      {/* DIFFICULTY */}
      <section className="mb-6">
        <h2 className="font-bold text-xl mb-3">Difficulty</h2>
        <ul>
          <li className="ms-5 list-disc">{recipe?.difficulty}</li>
        </ul>
      </section>
    </div>
  );
}
