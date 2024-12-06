import { supabase } from '../lib/supabase';

export const fetchRecipes = async () => {
  const { data, error } = await supabase.from('recipes').select('*');
  if (error) throw error;
  return data;
};
