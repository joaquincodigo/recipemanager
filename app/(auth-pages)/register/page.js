"use client";

import Image from "next/image";
import { useState, useRef, useEffect, useContext } from "react";
import { EyeIcon } from "@heroicons/react/24/outline";
import { EyeSlashIcon } from "@heroicons/react/24/outline";
import RegistrationPending from "@/app/components/RegistrationPending";
import { supabase } from "@/lib/supabase";
import useLogin from "@/app/hooks/useLogin";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    "password-verification": "",
  });

  const [warning, setWarning] = useState({ message: null, field: null });
  const [currentPage, setCurrentPage] = useState(1);
  const [showPasswords, setShowPasswords] = useState(false);
  const [isFormCompleted, setIsFormCompleted] = useState(false);
  const [registrationStatus, setRegistrationStatus] = useState("loading");
  const { handleLogin } = useLogin();
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
    return (
      formData["password-verification"] != "" &&
      formData.password === formData["password-verification"]
    );
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

  async function registerNewUser({ email, password, name, last_name }) {
    const { error } = await supabase.from("demousers").insert([
      {
        email,
        password,
        name,
        last_name,
        avatar_url: "",
        liked_recipes: [],
        uploaded_recipes: [],
      },
    ]);

    if (error) {
      setRegistrationStatus("error");
    } else {
      setRegistrationStatus("success");
      const loginSuccess = await handleLogin(email, password);
      if (loginSuccess) window.location.href = "/home";
    }
  }

  const completeForm = () => {
    setIsFormCompleted(true);
    registerNewUser(formData);
  };

  const togglePasswordVisibility = () => {
    setShowPasswords(!showPasswords);
  };

  const handleTryAgain = () => {
    setCurrentPage(1);
    setIsFormCompleted(false);
  };

  return isFormCompleted ? (
    <RegistrationPending
      status={registrationStatus}
      handleTryAgain={handleTryAgain}
    />
  ) : (
    <div className="h-screen w-screen flex flex-col justify-center items-center pb-24">
      {/* +-+-+-+-+-+-+-+-+-+-+- HEADING  +-+-+-+-+-+-+-+-+-+-+-+-+*/}
      <div className="flex justify-center mb-5">
        <Image
          src="/images/RecipesHavenLogoWhiteBg.svg"
          alt="The site logo depicting a chef hat and a recipe"
          width={80}
          height={80}
        />
      </div>

      <form className="h-[400px] w-full p-3 flex flex-col" autoComplete="off">
        <h1 className="mb-5 text-xl text-center font-bold">
          Create your account
        </h1>

        {/* +-+-+-+-+-+-+-+- INPUTS CONTAINER  +-+-+-+-+-+-+-+-+-+-+-*/}
        <div className="w-full flex flex-col justify-center items-center gap-y-9 flex-[8] ">
          {/* +-+-+-+-+-+-+-+-+-+-+- PAGE 1 +-+-+-+-+-+-+-+-+-+-+-+-+*/}
          {currentPage === 1 && (
            <>
              {/* NAME */}
              <h2 className="font-bold text-slate-600">What's your name?</h2>
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

          {/* +-+-+-+-+-+-+-+-+-+-+- PAGE 2 +-+-+-+-+-+-+-+-+-+-+-+-+*/}
          {currentPage === 2 && (
            <>
              {/* MAIL */}
              <h2 className="font-bold text-slate-600">What's your mail?</h2>
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

          {/* +-+-+-+-+-+-+-+-+-+-+- PAGE 3 +-+-+-+-+-+-+-+-+-+-+-+-+*/}
          {currentPage === 3 && (
            <>
              {/* PASSWORD */}
              <h2 className="font-bold text-slate-600">Create a password</h2>
              <div className="relative">
                <label
                  className={`${
                    warning.field === "password" ? "text-red-500" : ""
                  } absolute left-2 -top-3 px-2 z-10 rounded bg-white`}
                  htmlFor="password"
                >
                  {warning.field === "password"
                    ? "Passowrd is too short"
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
                  type={showPasswords ? "text" : "password"}
                  id="password"
                  name="password"
                  autoComplete="new-password"
                  value={formData.password}
                  onChange={handleChange}
                  onBlur={handleWarning}
                  onClick={resetWarning}
                  ref={passwordRef}
                />

                {/* REVEAL PASSWORD BUTTON */}
                <button
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-600 transition-transform duration-600 ease-in-out"
                  type="button"
                  onClick={togglePasswordVisibility}
                >
                  <span>
                    {showPasswords ? (
                      <EyeSlashIcon className="h-6 w-6" />
                    ) : (
                      <EyeIcon className="h-6 w-6" />
                    )}
                  </span>
                </button>
              </div>

              {/* PASSWORD VERIFICATION */}
              <div className="relative">
                <label
                  className={`${
                    warning.field === "password-verification"
                      ? "text-red-500"
                      : ""
                  } absolute left-2 -top-3 px-2 z-10 rounded bg-white`}
                  htmlFor="password-verification"
                >
                  {warning.field === "password-verification"
                    ? "Passwords do not match"
                    : "Password Verification *"}
                </label>
                <input
                  className={`${
                    warning.field === "password-verification"
                      ? "text-red-500 border-red-500 border-2 "
                      : "border-slate-400"
                  }
                "bg-white w-64 p-3 rounded-md border  focus:outline-none focus:ring-2 focus:ring-[#7FC37E]`}
                  placeholder="Re-enter your password"
                  type={showPasswords ? "text" : "password"}
                  id="password-verfication"
                  name="password-verification"
                  autoComplete="password-verification"
                  onChange={handleChange}
                  onBlur={handleWarning}
                  onClick={resetWarning}
                  value={formData["password-verification"]}
                />
                {/* REVEAL PASSWORD BUTTON */}
                <button
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-600 transition-transform duration-600 ease-in-out"
                  type="button"
                  onClick={togglePasswordVisibility}
                >
                  <span>
                    {showPasswords ? (
                      <EyeSlashIcon className="h-6 w-6" />
                    ) : (
                      <EyeIcon className="h-6 w-6" />
                    )}
                  </span>
                </button>
              </div>
            </>
          )}
        </div>

        {/* +-+-+-+-+-+-+-+-+-+-+- FORM BUTTONS +-+-+-+-+-+-+-+-+-+-+-+-+*/}
        <div className=" w-full flex-[4] flex justify-center items-center">
          <div className=" min-w-64 gap-x-3 flex">
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
                order-2
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
                onClick={(e) => {
                  e.preventDefault();
                  handleWarning(e);
                  completeForm();
                }}
                className={`
            p-3
            flex-[2]
            font-bold
            rounded-md
            order-2
            ${
              isValidPassword() && isValidPasswordVerification()
                ? "bg-[#7FC37E] text-white"
                : "bg-gray-400 text-gray-200"
            }`}
              >
                Complete
              </button>
            )}

            {/* Back Button */}
            {currentPage != 1 && (
              <button
                onClick={handleBack}
                className="flex-1 font-bold rounded-md hover:bg-slate-200 order-1"
              >
                Back
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
