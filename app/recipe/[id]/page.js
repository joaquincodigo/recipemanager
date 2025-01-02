"use client";

import { useState, useEffect } from "react";
import { fetchRecipeById } from "../../../utils/fetchRecipes";
import { IoIosTimer } from "react-icons/io";

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
        <ul className="flex items-center">
          <IoIosTimer className="text-2xl font-extrabold text-slate-500 mr-1" />
          <li>{recipe?.preparation_time} minutes</li>
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
        <ul className=" relative">
          <div className="absolute left-[14px] top-0 h-full w-1 bg-[#dddddd] z-[0]"></div>

          {recipe.preparation_steps.map((step, index) => (
            <li className="flex items-center mb-3" key={index}>
              <div
                className="
                    z-10
                    flex
                    items-center
                    justify-center
                    h-8
                    w-8
                    rounded-full
                    border-solid
                    border-4
                    border-[#dddddd]
                    p-3
                    font-bold
                    mr-3
                    bg-white
                    text-slate-500
                  "
              >
                {index + 1}
              </div>

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
