export default function PageNumber({ number, isActive }) {
  return (
    <div
      className={`flex w-7 h-7 items-center justify-center border  rounded text-lg hover:border-slate-500 text-slate-500 ${
        isActive
          ? "border-2 border-[#7FC37E]"
          : "border-slate-300"
      }`}
    >
			{number ?  number : "..."}
    </div>
  );
}
