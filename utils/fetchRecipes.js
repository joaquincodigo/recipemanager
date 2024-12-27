import { supabase } from '../lib/supabase';

export const fetchRecipes = async () => {
  const { data, error } = await supabase.from('recipes').select('*');
  if (error) throw error;
  return data;
};


export const fetchRecipeById = async (id) => {

// Example usage
// fetchRecipeById('1').then(console.log).catch(console.error);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/recipes?id=eq.${id}`,
    {
      headers: {
        apikey: process.env.NEXT_PUBLIC_SUPABASE_KEY, 
        Authorization: process.env.NEXT_PUBLIC_SUPABASE_KEY
      },
    }
  );

  if (!response.ok) throw new Error('Failed to fetch recipe');
  return response.json();
};

