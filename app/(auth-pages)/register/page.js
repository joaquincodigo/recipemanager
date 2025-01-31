import { PauseCircleIcon } from "@heroicons/react/24/solid";

export default function RegisterPage() {
  return (
    <form className="p-3 flex flex-col gap-y-8">
      {/* +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-*/}
      {/* TODO: ADD LOGO AFTER YOU FINISH IT  */}
      {/* +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-*/}
      <PauseCircleIcon className="h-24 w-24 text-slate-500 mx-auto" />

      {/* HEADING */}
      <h1 className="text-xl text-center font-bold">Create your account</h1>

      {/* NAME */}
      <div className="relative">
        <label
          className="absolute left-2 -top-3 px-2 z-10 rounded bg-white"
          htmlFor="name"
        >
          Name *
        </label>
        <input
          className="bg-white p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-[#7FC37E]"
          placeholder="Enter your name"
          type="text"
          id="name"
          name="name"
          autoComplete="off"
          required
        />
      </div>

      {/* SURNAME */}
      <div className="relative">
        <label
          className="absolute left-2 -top-3 px-2 z-10 rounded bg-white"
          htmlFor="surname"
        >
          Surname
        </label>
        <input
          className="bg-white p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-[#7FC37E]"
          placeholder="Enter your surname"
          type="text"
          id="surname"
          name="surname"
          autoComplete="off"
        />
      </div>

      {/* MAIL */}
      <div className="relative">
        <label
          className="absolute left-2 -top-3 px-2 z-10 rounded bg-white"
          htmlFor="mail"
        >
          Mail *
        </label>
        <input
          className="bg-white p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-[#7FC37E]"
          placeholder="Enter your mail"
          type="email"
          id="email"
          name="email"
          autoComplete="off"
        />
      </div>

      {/* PASSWORD */}
      <div className="relative">
        <label
          className="absolute left-2 -top-3 px-2 z-10 rounded bg-white"
          htmlFor="password"
        >
          Password *
        </label>
        <input
          className="bg-white p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-[#7FC37E]"
          placeholder="Enter your mail"
          type="password"
          id="password"
          name="password"
          autoComplete="off"
        />
      </div>

			

      {/* REGISTER BUTTON */}
      <button className="p-3 text-white font-bold rounded-md bg-[#7FC37E]">
				Sign Up
      </button>
    </form>
  );
}
