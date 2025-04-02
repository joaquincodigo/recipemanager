export default function Button({ label, type, onClick, disabled, className }) {
  const baseStyles = "rounded-md font-bold p-3";

  const typeStyles =
    type === "primary"
      ? disabled
        ? "bg-[#9ead9e] text-slate-500" // Disabled Primary
        : "bg-[#7FC37E] text-white hover:bg-[#5d995c]" // Enabled Primary
      : disabled
      ? "bg-none text-slate-500" // Disabled Secondary
      : "bg-none text-black hover:bg-slate-200"; // Enabled Secondary

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${typeStyles} ${className || ""}`}
    >
      {label}
    </button>
  );
}
