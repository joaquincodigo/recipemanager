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
  const [warning, setWarning] = useState({ message: null, field: null });

  const [currentPage, setCurrentPage] = useState(1);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

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
    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]{2,50}$/;
    return regex.test(formData.name);
  };

  const isValidEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(formData.email);
  };

  const isValidPassword = () => {
    const regex = /^.{6,}$/;
    return regex.test(formData.password);
  };

  const isValidPasswordVerification = () => {
    return formData.password === formData.passwordVerification;
  };

  const handleWarning = (e) => {
    switch (e.target.name) {
      case "name":
        if (!isValidName())
          setWarning({ message: "Invalid name", field: "name" });
        break;

      case "email":
        if (!isValidEmail())
          setWarning({ message: "Invalid mail", field: "email" });
        break;

      case "password":
        if (!isValidPassword())
          setWarning({ message: "Invalid password", field: "password" });
        break;

      case "password-verification":
        if (!isValidPasswordVerification())
          setWarning({
            message: "Passwords do not match",
            field: "password-verification",
          });
        break;

      default:
        break;
    }
  };

  const resetWarning = () => {
    setWarning({ message: "", field: "" });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form className=" h-[400px] w-full p-3 flex flex-col" autoComplete="off">
      {/* +-+-+-+-+-+-+-+-+-+-+- HEADING  +-+-+-+-+-+-+-+-+-+-+-+-+*/}
      <div className=" flex-[4]">
        <PauseCircleIcon className="h-20 w-20 text-slate-500 mx-auto" />
        <h1 className="mb-5 text-xl text-center font-bold">
          Create your account
        </h1>
      </div>

      {/* +-+-+-+-+-+-+-+- INPUTS CONTAINER  +-+-+-+-+-+-+-+-+-+-+-*/}
      <div className=" w-full flex flex-col justify-center items-center gap-y-9 flex-[8] ">
        {/* +-+-+-+-+-+-+-+-+-+-+- PAGE 1 +-+-+-+-+-+-+-+-+-+-+-+-+*/}
        {currentPage === 1 && (
          <>
            {/* NAME */}
            <div className="relative">
              <label
                className={`${
                  warning.field === "name" ? "text-red-500" : ""
                } absolute left-2 -top-3 px-2 z-10 rounded bg-white`}
                htmlFor="name"
              >
                {warning.field === "name" ? "Invalid name" : "Name *"}
              </label>
              <input
                className={`${
                  warning.field === "name"
                    ? "text-red-500 border-red-500 border-2 "
                    : "border-slate-400"
                }  
                "bg-white w-64 p-3 rounded-md border  focus:outline-none focus:ring-2 focus:ring-[#7FC37E]`}
                placeholder="Enter your name"
                type="text"
                id="name"
                name="name"
                autoComplete="off"
                required
                ref={nameRef}
                onChange={handleChange}
                onBlur={handleWarning}
                onClick={resetWarning}
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
                className={`${
                  warning.field === "email" ? "text-red-500" : ""
                } absolute left-2 -top-3 px-2 z-10 rounded bg-white`}
                htmlFor="email"
              >
                {warning.field === "email" ? "Invalid mail" : "Mail *"}
              </label>
              <input
                className={`${
                  warning.field === "email"
                    ? "text-red-500 border-red-500 border-2 "
                    : "border-slate-400"
                }  
                "bg-white w-64 p-3 rounded-md border  focus:outline-none focus:ring-2 focus:ring-[#7FC37E]`}
                placeholder="Enter your mail"
                type="email"
                id="email"
                name="email"
                autoComplete="new-email"
                onChange={handleChange}
                onBlur={handleWarning}
                onClick={resetWarning}
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
                className={`${
                  warning.field === "password" ? "text-red-500" : ""
                } absolute left-2 -top-3 px-2 z-10 rounded bg-white`}
                htmlFor="password"
              >
                {warning.field === "password"
                  ? "Invalid password (too short)"
                  : "Password *"}
              </label>
              <input
                className={`${
                  warning.field === "password"
                    ? "text-red-500 border-red-500 border-2 "
                    : "border-slate-400"
                }
                "bg-white w-64 p-3 rounded-md border  focus:outline-none focus:ring-2 focus:ring-[#7FC37E]`}
                placeholder="Enter your mail"
                type="password"
                id="password"
                name="password"
                autoComplete="new-password"
                value={formData.password}
                onChange={handleChange}
                onBlur={handleWarning}
                onClick={resetWarning}
                ref={passwordRef}
              />
            </div>

            {/* PASSWORD VERIFICATIOn */}
            <div className="relative">
              <label
                className={`${
                  warning.field === "password-verification" ? "text-red-500" : ""
                } absolute left-2 -top-3 px-2 z-10 rounded bg-white`}
                htmlFor="password-verification"
              >
                
                {warning.field === "password-verification"
                  ? "Passwords do not match"
                  : "Password Verification *"}
              </label>
              <input
                className="bg-white w-64 p-3 rounded-md border border-slate-400 focus:outline-none focus:ring-2 focus:ring-[#7FC37E]"
                placeholder="Re-enter your password"
                type="password"
                id="passwordVerfication"
                name="passwordVerification"
                autoComplete="passwordVerification"
                onChange={handleChange}
                onBlur={handleWarning}
                onClick={resetWarning}
                value={formData.passwordVerification}
              />
            </div>
          </>
        )}
      </div>

      {/* +-+-+-+-+-+-+-+-+-+-+- FORM BUTTONS +-+-+-+-+-+-+-+-+-+-+-+-+*/}
      <div className=" w-full flex-[4] flex justify-center items-center">
        <div className=" min-w-64 gap-x-3 flex">
          {/* Back Button */}
          {currentPage != 1 && (
            <button
              onClick={handleBack}
              className="flex-1 font-bold rounded-md hover:bg-slate-200"
            >
              Back
            </button>
          )}

          {/* Next Button (page 1) */}
          {currentPage == 1 && (
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
          )}

          {/* Next Button (page 2) */}
          {currentPage == 2 && (
            <button
              disabled={!isValidEmail()}
              onClick={handleNext}
              className={`
            p-3
            flex-[2]
            font-bold
            rounded-md
            ${
              isValidEmail()
                ? "bg-[#7FC37E] text-white"
                : "bg-gray-400 text-gray-200"
            }`}
            >
              Next
            </button>
          )}

          {/* Next Button (page 3) */}
          {currentPage == 3 && (
            <button
              disabled={!isValidPassword() || !isValidPasswordVerification()}
              onClick={handleNext}
              className={`
            p-3
            flex-[2]
            font-bold
            rounded-md
            ${
              isValidPassword() && isValidPasswordVerification()
                ? "bg-[#7FC37E] text-white"
                : "bg-gray-400 text-gray-200"
            }`}
            >
              Complete
            </button>
          )}
        </div>
      </div>
    </form>
  );
}
