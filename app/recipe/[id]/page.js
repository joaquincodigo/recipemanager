"use client";

import { useState, useEffect } from "react";
import { fetchRecipeById } from "../../../utils/fetchRecipes";
import Spinner from "../../components/Spinner";

import { ClockIcon } from "@heroicons/react/24/outline";
import { ChartPieIcon } from "@heroicons/react/24/outline";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/outline";
import { TagIcon } from "@heroicons/react/24/outline";

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

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-full pb-36">
        <Spinner />
      </div>
    );
  }

  if (error) return <p>An error has ocurred</p>; // TODO ERROR ICON

  return (
    <div className="p-3 pb-10">
      {/* IMAGE */}
      <section className="mb-12">
        <img
          className="w-full rounded-lg mb-3"
          src={recipe?.image}
          alt="The finished recipe"
        />

        {/* TITLE */}
        <h1 className="font-bold text-4xl mb-3">
          {recipe?.title
            .split(" ") // Split the title into individual words
            .map(
              (word) =>
                // Check if the word is entirely uppercase (e.g., "BBQ")
                word === word.toUpperCase()
                  ? word // If it is, keep the word as is
                  : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() // Otherwise, capitalize the first letter and make the rest lowercase
            )
            .join(" ")}{" "}
          {/* Join the words back together into a single string */}
        </h1>

        {/* DESCRIPTION */}
        <p>{recipe?.description}</p>
      </section>

      {/* PREPARATION TIME */}
      <section className="mb-6">
        <h2 className="font-bold text-xl mb-3">Preparation time</h2>
        <ul className="flex items-center">
          <ClockIcon className="w-6 h-6 text-slate-500 me-0.5" />
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

      {/* SERVINGS */}
      <section className="mb-6">
        <h2 className="font-bold text-xl mb-3">Yield</h2>
        <ul>
          <li className="flex items-center">
            <ChartPieIcon className="w-6 h-6 text-slate-500 me-0.5" />
            {recipe?.servings} servings
          </li>
        </ul>
      </section>

      {/* CATEGORY */}
      <section className="mb-6">
        <h2 className="font-bold text-xl mb-3">Category</h2>
        <ul>
          <li className="flex items-center">
            <TagIcon className="w-6 h-6 text-slate-500 me-0.5" />
            {recipe?.category}
          </li>
        </ul>
      </section>

      {/* DIFFICULTY */}
      <section className="mb-6">
        <h2 className="font-bold text-xl mb-3">Difficulty</h2>
        <ul>
          <li className="flex items-center">
            <ChevronDoubleUpIcon className="w-6 h-6 text-slate-500 me-0.5" />
            {recipe?.difficulty}
          </li>
        </ul>
      </section>
    </div>
  );
}
