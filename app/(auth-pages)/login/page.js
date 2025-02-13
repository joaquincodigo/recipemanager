"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useLogin } from "@/app/hooks/useLogin";
import { EyeIcon } from "@heroicons/react/24/outline";
import { EyeSlashIcon } from "@heroicons/react/24/outline";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import Spinner from "@/app/components/Spinner";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showMailWarning, setShowMailWarning] = useState(false);
  const [showBadCredentialsWarning, setShowBadCredentialsWarning] =
    useState(false);
  const router = useRouter();
  const { loginUser, isLoginLoading, loginError } = useLogin();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleMailInput = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  const validateEmail = () => {
    console.log("validateEmail triggered");
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isMailValid = regex.test(email);
    if (!isMailValid) {
      setShowMailWarning(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser(email, password);
      router.push("/home");
    } catch {
      setShowBadCredentialsWarning(true);
    }
  };

  return (
    <>
      {isLoginLoading ? (
        <div className="flex flex-col justify-center items-center">
          <p className="font-semibold mb-5 text-xl">Logging in...</p>
          <Spinner />
        </div>
      ) : (
        <form
          className="pb-24 h-screen overflow-hidden flex flex-col justify-center"
          onSubmit={handleSubmit}
        >
          <div className="p-3 flex flex-col gap-y-6">
            {/* HEADING */}
            <div className="flex justify-center">
              <Image
                src="/images/RecipesHavenLogoWhiteBg.svg"
                alt="The site logo depicting a chef hat and recipe"
                width={80}
                height={80}
              />
            </div>
            <h1 className="text-xl text-center font-bold">Login</h1>
            <div className="flex flex-col gap-y-8">
              {/* MAIL */}
              <div className="relative">
                <label
                  className={`absolute left-2 -top-3 px-2 z-10 rounded bg-white ${
                    showMailWarning ? "text-red-600" : "text-slate-800"
                  }`}
                  htmlFor="email"
                >
                  {showMailWarning ? "Invalid mail" : "Mail"}
                </label>

                <input
                  className={`bg-white p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-[#7FC37E] ${
                    showMailWarning
                      ? "border-red-600 border-2"
                      : "border-slate-400"
                  }`}
                  placeholder="Enter your mail"
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="username"
                  required
                  onChange={handleMailInput}
                  value={email}
                  onBlur={validateEmail}
                  onFocus={() => {
                    setShowMailWarning(false);
                    setShowBadCredentialsWarning(false);
                  }}
                />
              </div>

              {/* PASSWORD */}
              <div className="relative w-full">
                <label
                  className="absolute rounded left-2 -top-3 px-2 z-10 text-slate-800 bg-white"
                  htmlFor="password"
                >
                  Password
                </label>

                {/* PASSWORD INPUT */}
                <input
                  className="p-3 rounded-md bg-white border border-slate-400 w-full focus:outline-none focus:ring-2 focus:ring-[#7FC37E]"
                  placeholder="Enter your password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={handlePasswordInput}
                  value={password}
                  onFocus={() => {
                    setShowMailWarning(false);
                    setShowBadCredentialsWarning(false);
                  }}
                  required
                />

                {/* REVEAL PASSWORD BUTTON */}
                <button
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-600 transition-transform duration-600 ease-in-out"
                  type="button"
                  onClick={togglePasswordVisibility}
                >
                  <span>
                    {showPassword ? (
                      <EyeSlashIcon className="h-6 w-6" />
                    ) : (
                      <EyeIcon className="h-6 w-6" />
                    )}
                  </span>
                </button>
              </div>
            </div>

            {/* WRONG CREDENTIALS WARNING */}
            {showBadCredentialsWarning ? (
              <div className="flex-col items-center justify-center">
                <div className="flex">
                  <ExclamationCircleIcon
                    strokeWidth={1.7}
                    className="w-5 h-5 text-red-600 mr-1 transform translate-y-0.5"
                  />
                  <p className="text-red-600 text-center flex">
                    Incorrect email or password
                  </p>
                </div>
              </div>
            ) : null}

            {/* FORGOT PASSWORD? */}
            <Link href="/password-recovery" className="text-[#099107]">
              Forgot your password?
            </Link>

            {/* LOGIN BUTTON */}
            <button className="p-3 text-white font-bold rounded-md bg-[#7FC37E]">
              Login
            </button>

            {/* SIGN UP (new account)*/}
            <p>
              Don't have an account?{" "}
              <span>
                <Link href="/register" className="text-[#099107]">
                  Sing Up
                </Link>
              </span>
            </p>
          </div>
        </form>
      )}
    </>
  );
}
