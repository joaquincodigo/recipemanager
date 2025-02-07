import React from "react";
import Spinner from "./Spinner";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/outline";



export default function RegistrationPending({ status }) {
  const ui = {
    loading: (
      <>
        <Spinner />
        <h1 className="text-2xl font-bold">Completing registration</h1>
        <p>Just a moment...</p>
      </>
    ),
    success: (
      <>
        <CheckCircleIcon className="text-[#7FC37E] w-14 h-14"/>        
        <h1 className="text-2xl font-bold">Registration completed!</h1>
        <p>Redirecting you...</p>
      </>
    ),
    error: (
      <>
        <XCircleIcon className="text-red-400 w-14 h-14"/>        
        <h1 className="text-2xl font-bold">Something went wrong</h1>
        <p>An error has occurred during the registration process.</p>
        <button className="bg-[#7FC37E] px-3 py-3 text-white font-bold rounded text-xl">
          Try again
        </button>
      </>
    ),
  };

  return (
    <div className="flex flex-col items-center justify-center text-center gap-y-8 max-w-80 text-lg">
      {ui[status]}
    </div>
  );
}
