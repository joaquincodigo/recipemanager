"use client";
import { useState } from "react";
import Link from "next/link";

import { EyeIcon } from "@heroicons/react/24/outline";
import { EyeSlashIcon } from "@heroicons/react/24/outline";
import { PauseCircleIcon } from "@heroicons/react/24/solid";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form>
      <div className="p-3 flex flex-col gap-y-6">
        {/* LOGO */}
        {/* TODO: ADD LOGO AFTER YOU FINISH IT */}

        <PauseCircleIcon className="h-24 w-24 text-slate-500 mx-auto" />

        {/* HEADING */}
        <h1 className="text-xl text-center font-bold">Login</h1>

        {/* LOGIN */}
        <div className="flex flex-col gap-y-1">
          <label htmlFor="email">Enter your mail</label>
          <input
            className="p-3 rounded-md border border-slate-400"
            placeholder="Mail"
            type="email"
            id="email"
            name="email"
            autoComplete="username"
            required
          />
        </div>

        <div className="flex flex-col gap-y-1">
          {/* PASSWORD */}
          <label htmlFor="password">Enter your password</label>
          <div className="relative w-full">
            {/* PASSWORD INPUT */}
            <input
              className="p-3 rounded-md border border-slate-400 w-full"
              placeholder="Password"
              type="password"
              name="password"
              id="password"
              autoComplete="current-password"
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

        <Link href="/login" className="text-[#099107]">
          Forgot your password?
        </Link>
        <button className="p-3 text-white font-bold rounded-md bg-[#7FC37E]">
          Login
        </button>
      </div>
    </form>
  );
}
