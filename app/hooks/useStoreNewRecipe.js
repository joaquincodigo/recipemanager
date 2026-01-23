"use client";

const useStoreNewRecipe = () => {
  const recordNewRecipe = async (formData) => {
    const res = await fetch("/api/add-recipe", {
      method: "POST",
      body: formData, // multipart/form-data
    });

    const json = await res.json();
    return json;
  };

  return { recordNewRecipe };
};

export default useStoreNewRecipe;
