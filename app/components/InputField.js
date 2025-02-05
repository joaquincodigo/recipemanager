export default function InputField({
  type = "text",
  name,
  label,
  value,
  placeholder,
  onChange,
  error,
}) {
  return (
    <div className="relative">
      <label
        className={`
					absolute
					left-2
					-top-3
					px-2
					z-10
					rounded
					bg-white
					${error ? "text-red-500" : ""}
				`}
        htmlFor={name}
      >
        {error || label || `${name.charAt(0).toUpperCase()}${name.slice(1)}`}
      </label>

      <input
        className={`
					bg-white
					w-64
					p-3
					rounded-md
					border
					focus:outline-none
					focus:ring-2
					focus:ring-[#7FC37E]
					${error ? "text-red-500 border-red-500 border-2" : "border-slate-400"}
				`}
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder || `Enter your ${name}`}
        autoComplete="off"
        required
      />
    </div>
  );
}
