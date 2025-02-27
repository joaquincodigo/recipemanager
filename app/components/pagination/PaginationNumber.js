export default function PageNumber({ number, isActive, onClick }) {
  return (
    <div
      className={`flex w-12 h-12 items-center justify-center border  rounded text-xl hover:border-slate-500 text-slate-500 ${
        isActive ? "border-2 border-[#7FC37E]" : "border-slate-300"
      }`}
      onClick={onClick}
    >
      {number ? number : "..."}
    </div>
  );
}
