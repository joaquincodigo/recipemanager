export default function PageNumber({ number, isActive, onClick }) {
  return (
    <div
      className={`flex w-11 h-11 md:w-9 md:h-9 items-center justify-center border rounded text-xl md:text-base text-slate-500
        ${
          isActive
            ? "bg-[#7FC37E] text-white border-none cursor-default"
            : "bg-[#ffffef] border-slate-300 hover:border-[#69ae68] hover:cursor-pointer"
        }`}
      onClick={onClick}
    >
      {number ? number : "..."}
    </div>
  );
}
