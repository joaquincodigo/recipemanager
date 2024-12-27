'use client'

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
	if (error) return <p>An error has ocurred</p>
  return (
    <>
      <div>Current ID: {recipe?.id}</div>
      <h1>{recipe?.title}</h1>
      <p>{recipe?.description}</p>
      <p>Category: {recipe?.category}</p>
      <p>Prep time: {recipe?.preptime} minutes</p>
      <img src={recipe?.image} alt="The finished recipe" />
    </>
  );
}