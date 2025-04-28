import { useEffect, useState } from "react";

export default function Step6({ formData, setFormData, setCanMoveFoward }) {
  const [servings, setServings] = useState(formData.servings || "");

  const handleChange = (e) => {
    const selectedServings = e.target.value;
    setServings(selectedServings);
    setFormData((prev) => ({
      ...prev,
      servings: parseInt(selectedServings),
    }));
    setCanMoveFoward(true);
  };

  useEffect(() => {
    if (servings !== "") setCanMoveFoward(true);
  }, []);

  const styles = {
    select:
      "bg-white p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-[#7FC37E] max-w-30 mb-3",
    container: "flex flex-col items-center justify-center",
    heading: "text-slate-500 font-bold mb-5 text-center pb-10",
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>
        How many servings does the recipe yield?
      </h2>
      <select
        value={servings}
        className={styles.select}
        onChange={handleChange}
      >
        <option value="" disabled>
          Select a number
        </option>
        {Array.from({ length: 50 }, (_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
    </div>
  );
}
