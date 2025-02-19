export default function PageNumber({ number, isActive }) {
  return (
    <div
      className={`flex w-7 h-7 items-center justify-center border  rounded text-lg  ${
        isActive
          ? "border-[#7FC37E] text-[#4d8b4c]"
          : "border-slate-500 text-slate-500"
      }`}
    >
			{number ?  number : "..."}
    </div>
  );
}
