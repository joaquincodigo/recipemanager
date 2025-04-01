export default function Button({ label, type, onClick, className }) {
  const baseStyles = "rounded-md font-bold p-3";
  const typeStyles =
    type === "primary"
      ? "bg-[#7FC37E] text-white hover:bg-[#5d995c]"
      : "bg-none text-black hover:bg-slate-200";

  return (
    <>
      <button
        onClick={onClick}
        className={`${baseStyles} ${typeStyles} ${className || ""}`}
      >
        {label}
      </button>
    </>
  );
}
