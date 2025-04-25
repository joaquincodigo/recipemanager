import { useEffect } from "react";

export default function Step7({ formData, setFormData, setCanMoveFoward }) {
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...formData,
      difficulty: e.target.value,
    }));
    setCanMoveFoward(true)
  };

  const styles = {
    select:
      "bg-white p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-[#7FC37E] max-w-30 mb-3",
    container: "flex flex-col items-center justify-center",
    heading: "text-slate-500 font-bold mb-5 text-center pb-10",
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>How difficult is this recipe?</h2>
      <select defaultValue="" className={styles.select} onChange={handleChange}>
        <option value="" disabled>
          Select a difficulty
        </option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>
  );
}
