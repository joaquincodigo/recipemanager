export default function PageNumber({ number, isActive, onClick }) {
  return (
    <div
      className={`flex w-11 h-11 md:w-9 md:h-9 items-center justify-center border rounded text-xl md:text-base hover:border-[#69ae68] text-slate-500 ${
        isActive ? " bg-[#7FC37E] text-white border-none" : "border-slate-300"
      }`}
      onClick={onClick}
    >
      {number ? number : "..."}
    </div>
  );
}
