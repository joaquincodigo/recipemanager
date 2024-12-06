"use client"

import SearchBar from './components/SearchBar';

import { useEffect, useState } from 'react';
import { fetchRecipes } from '../utils/recipes';

export default function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const loadRecipes = async () => {
      const data = await fetchRecipes();
      setRecipes(data);
    };
    loadRecipes();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Recipe Manager</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="p-4 border rounded-lg">
            <h2 className="text-xl font-semibold">{recipe.title}</h2>
            <p>{recipe.description}</p>
            <img src={recipe.image} />
          </div>
        ))}
      </div>
    </div>
  );
}
