import { useEffect } from "react";

export default function Button({ label, type, enabled, className, onClick }) {
  // Handlers
  const handleClick = enabled ? onClick : () => {};

  // Styles
  const baseStyles = "rounded-md font-bold p-3";
  const styles = {
    primary: {
      enabled: "bg-[#7FC37E] text-white hover:bg-[#5d995c]",
      disabled: "bg-[#9ead9e] text-slate-500",
    },
    secondary: {
      enabled: "bg-none text-black hover:bg-slate-200",
      disabled: "bg-none text-slate-500",
    },
  };
  const buttonStyles = styles[type]?.[enabled ? "enabled" : "disabled"];

  return (
    <button
      onClick={handleClick}
      className={`${baseStyles} ${buttonStyles} ${className || ""}`}
    >
      {label}
    </button>
  );
}
