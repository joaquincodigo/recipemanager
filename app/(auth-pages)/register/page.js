"use client";

import { useState, useRef, useEffect } from "react";
import { PauseCircleIcon } from "@heroicons/react/24/solid";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    passwordVerification: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const handleNext = (e) => {
    e.preventDefault();
    if (currentPage === 1 || currentPage === 2) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  // Auto-focus handling 
  useEffect(() => {
    if (currentPage === 1) {
      nameRef.current?.focus();
    }
    if (currentPage === 2) {
      emailRef.current?.focus();
    }
    if (currentPage === 3) {
      passwordRef.current?.focus();
    }
  }, [currentPage]); 


  const handleBack = (e) => {
    e.preventDefault();
    if (currentPage === 2 || currentPage === 3) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const isValidName = () => {
    return formData.name.length >= 2;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form className=" h-[400px] w-full p-3 flex flex-col" autoComplete="off">
      {/* +-+-+-+-+-+-+-+-+-+-+- HEADING  +-+-+-+-+-+-+-+-+-+-+-+-+*/}
      <div className=" flex-[2]">
        <PauseCircleIcon className="h-24 w-24 text-slate-500 mx-auto" />
        <h1 className="text-xl text-center font-bold">Create your account</h1>
      </div>

      {/* +-+-+-+-+-+-+-+- INPUTS CONTAINER  +-+-+-+-+-+-+-+-+-+-+-*/}
      <div className=" w-full flex flex-col justify-center items-center gap-y-8 flex-[4] ">
        {/* +-+-+-+-+-+-+-+-+-+-+- PAGE 1 +-+-+-+-+-+-+-+-+-+-+-+-+*/}
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
                className="bg-white w-64 p-3 rounded-md border  border-slate-400 focus:outline-none focus:ring-2 focus:ring-[#7FC37E]"
                placeholder="Enter your name"
                type="text"
                id="name"
                name="name"
                autoComplete="off"
                required
                ref={nameRef}
                onChange={handleChange}
                value={formData.name}
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
                className="bg-white w-64 p-3 rounded-md border border-slate-400 focus:outline-none focus:ring-2 focus:ring-[#7FC37E]"
                placeholder="Enter your last name"
                type="text"
                id="lastname"
                name="lastname"
                autoComplete="off"
                onChange={handleChange}
                value={formData.lastname}
              />
            </div>
          </>
        )}

        {/* +-+-+-+-+-+-+-+-+-+-+- PAGE 1 +-+-+-+-+-+-+-+-+-+-+-+-+*/}
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
                className="bg-white w-64 p-3 rounded-md border border-slate-400 focus:outline-none focus:ring-2 focus:ring-[#7FC37E]"
                placeholder="Enter your mail"
                type="email"
                id="email"
                name="email"
                autoComplete="new-mail"
                onChange={handleChange}
                value={formData.email}
                ref={emailRef}
              />
            </div>
          </>
        )}

        {/* +-+-+-+-+-+-+-+-+-+-+- PAGE 2 +-+-+-+-+-+-+-+-+-+-+-+-+*/}
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
                className="bg-white w-64 p-3 rounded-md border border-slate-400 focus:outline-none focus:ring-2 focus:ring-[#7FC37E]"
                placeholder="Enter your mail"
                type="password"
                id="password"
                name="password"
                autoComplete="new-password"
                value={formData.password}
                onChange={handleChange}
                ref={passwordRef}
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
                className="bg-white w-64 p-3 rounded-md border border-slate-400 focus:outline-none focus:ring-2 focus:ring-[#7FC37E]"
                placeholder="Re-enter your password"
                type="password"
                id="passwordVerfication"
                name="passwordVerification"
                autoComplete="passwordVerification"
                onChange={handleChange}
                value={formData.passwordVerification}
              />
            </div>
          </>
        )}
      </div>

      {/* +-+-+-+-+-+-+-+-+-+-+- FORM BUTTONS +-+-+-+-+-+-+-+-+-+-+-+-+*/}
      <div className=" w-full flex-1 flex justify-center items-center">
        <div className=" min-w-64 gap-x-3 flex">
          {currentPage != 1 && (
            <button
              onClick={handleBack}
              className="flex-1 font-bold rounded-md hover:bg-slate-200"
            >
              Back
            </button>
          )}

          <button
            disabled={!isValidName()}
            onClick={handleNext}
            className={`
            p-3
            flex-[2]
            font-bold
            rounded-md
            ${
              isValidName()
                ? "bg-[#7FC37E] text-white"
                : "bg-gray-400 text-gray-200"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </form>
  );
}
