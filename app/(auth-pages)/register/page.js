"use client";

import { useState } from "react";
import { PauseCircleIcon } from "@heroicons/react/24/solid";

export default function RegisterPage() {
  const [name, setName] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [mail, setMail] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordVerification, setPasswordVerification] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);

  const handleNext = (e) => {
    e.preventDefault();
    if (currentPage === 1 || currentPage === 2) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handleBack = (e) => {
    e.preventDefault();
    if (currentPage === 2 || currentPage === 3) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <form className="p-3 flex flex-col gap-y-8" autoComplete="off">
      {/* +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-*/}
      {/* TODO: ADD LOGO AFTER YOU FINISH IT  */}
      {/* +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-*/}
      <PauseCircleIcon className="h-24 w-24 text-slate-500 mx-auto" />

      {/* HEADING */}
      <h1 className="text-xl text-center font-bold">Create your account</h1>

      {currentPage === 1 && (
        <>
          {/* NAME */}
          <div className="relative">
            <label
              className="absolute left-2 -top-3 px-2 z-10 rounded bg-white"
              htmlFor="name"
            >
              Name *
            </label>
            <input
              className="bg-white p-3 rounded-md border  border-slate-400 focus:outline-none focus:ring-2 focus:ring-[#7FC37E]"
              placeholder="Enter your name"
              type="text"
              id="name"
              name="name"
              autoComplete="off"
              required
            />
          </div>

          {/* LASTNAME */}
          <div className="relative">
            <label
              className="absolute left-2 -top-3 px-2 z-10 rounded bg-white"
              htmlFor="lastname"
            >
              Last name
            </label>
            <input
              className="bg-white p-3 rounded-md border border-slate-400 focus:outline-none focus:ring-2 focus:ring-[#7FC37E]"
              placeholder="Enter your last name"
              type="text"
              id="lastname"
              name="lastname"
              autoComplete="off"
            />
          </div>
        </>
      )}

      {currentPage === 2 && (
        <>
          {/* MAIL */}
          <div className="relative">
            <label
              className="absolute left-2 -top-3 px-2 z-10 rounded bg-white"
              htmlFor="mail"
            >
              Mail *
            </label>
            <input
              className="bg-white p-3 rounded-md border border-slate-400 focus:outline-none focus:ring-2 focus:ring-[#7FC37E]"
              placeholder="Enter your mail"
              type="email"
              id="email"
              name="email"
              autoComplete="new-mail"
            />
          </div>
        </>
      )}

      {currentPage === 3 && (
        <>
          {/* PASSWORD */}
          <div className="relative">
            <label
              className="absolute left-2 -top-3 px-2 z-10 rounded bg-white"
              htmlFor="password"
            >
              Password *
            </label>
            <input
              className="bg-white p-3 rounded-md border border-slate-400 focus:outline-none focus:ring-2 focus:ring-[#7FC37E]"
              placeholder="Enter your mail"
              type="password"
              id="password"
              name="password"
              autoComplete="new-password"
            />
          </div>

          {/* PASSWORD VERIFICATIOn */}
          <div className="relative">
            <label
              className="absolute left-2 -top-3 px-2 z-10 rounded bg-white"
              htmlFor="password-verification"
            >
              Password Verification *
            </label>
            <input
              className="bg-white p-3 rounded-md border border-slate-400 focus:outline-none focus:ring-2 focus:ring-[#7FC37E]"
              placeholder="Re-enter your password"
              type="password"
              id="password-verfication"
              name="password-verification"
              autoComplete="password-verification"
            />
          </div>
        </>
      )}

      {/* REGISTER BUTTON */}
      <div className="flex gap-x-3">
        {currentPage != 1 && (
          <button
            onClick={handleBack}
            className="flex-1 font-bold rounded-md hover:bg-slate-200"
          >
            Back
          </button>
        )}

        <button
          onClick={handleNext}
          className="p-3 flex-[2] text-white font-bold rounded-md bg-[#7FC37E]"
        >
          Next
        </button>
      </div>

      {/* TESTING TESTING TESTING  TESTING  TESTING  TESTING  TESTING  */}
      {currentPage}
      {/* TESTING TESTING TESTING  TESTING  TESTING  TESTING  TESTING  */}
    </form>
  );
}
