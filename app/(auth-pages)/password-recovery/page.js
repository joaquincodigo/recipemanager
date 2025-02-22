"use client";

import { CubeTransparentIcon } from "@heroicons/react/24/outline";

// Testing-testing-testing-testing-testing-testing-testing
import useFetchRecipes from "@/app/hooks/useFetchRecipes";
import PaginationControls from "@/app/components/pagination/PaginationControls";
// Testing-testing-testing-testing-testing-testing-testing

export default function PasswordRecoveryPage() {
  const { recipes, recipesError } = useFetchRecipes(1);

  return (
    <div className="h-full w-full min-h-screen px-12 pt-28 flex flex-col justify-top">
      <div className="absolute bottom-5 right-6 z-0">
        <CubeTransparentIcon className="w-full h-full text-gray-100" />
      </div>
      <div className="z-50">

        {/* // Testing-testing-testing-testing-testing-testing-testing */}
        <PaginationControls/>
        {/* // Testing-testing-testing-testing-testing-testing-testing */}

        <h1 className="text-4xl text-slate-400 font-thin mb-10">Oh oh!</h1>
        <div className="flex flex-col gap-y-3">
          <p className="text-xl">
            The <strong>password recovery</strong> functionality isn't
            implemented in this demo yet.
          </p>
          <p className="text-xl">Stay tuned!</p>

          {/* // Testing-testing-testing-testing-testing-testing-testing */}
          <ul>
            {recipes.map((r) => (
              <li key={r.id}>{r.title}</li>
            ))}
          </ul>

          {/* // Testing-testing-testing-testing-testing-testing-testing */}
        </div>
      </div>
    </div>
  );
}
