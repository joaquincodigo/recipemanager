"use client";

import { CubeTransparentIcon } from "@heroicons/react/24/outline";
import useFetchRecipes from "@/app/hooks/useFetchRecipes";

export default function PasswordRecoveryPage() {
  const { recipes, recipesError } = useFetchRecipes(1);

  return (
    <div className="h-full w-full min-h-screen px-12 pt-28 flex flex-col justify-top">
      <div className="absolute bottom-5 right-6 z-0">
        <CubeTransparentIcon className="w-full h-full text-gray-100" />
      </div>
      <div className="z-50">
        <h1 className="text-4xl text-slate-400 font-thin mb-10">Oh oh!</h1>
        <div className="flex flex-col gap-y-3">
          <p className="text-xl">
            The <strong>password recovery</strong> functionality isn't
            implemented in this demo yet.
          </p>
          <p className="text-xl">Stay tuned!</p>

          <div>Recipes: {JSON.stringify(recipes)}</div>
          <div>Error: {JSON.stringify(recipesError)}</div>
        </div>
      </div>
    </div>
  );
}
