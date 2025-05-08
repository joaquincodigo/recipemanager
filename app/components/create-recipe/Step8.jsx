import { useState, useEffect } from "react";

export default function Step8({ formData, setFormData, setCanMoveFoward }) {
  const [category, setCategory] = useState(formData.category || "");

  const handleChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    setFormData((prev) => ({
      ...prev,
      category: selectedCategory,
    }));
    setCanMoveFoward(true);
  };

  useEffect(() => {
    if (category !== "") setCanMoveFoward(true);
  }, []);

  const styles = {
    select:
      "bg-white p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-[#7FC37E] max-w-30 mb-3",
    container: "flex flex-col items-center justify-center",
    heading: "text-slate-500 font-bold mb-5 text-center pb-10",
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>What cuisine is this recipe?</h2>
      <select
        value={category}
        name="category"
        id="category"
        className={styles.select}
        onChange={handleChange}
      >
        <option value="" disabled>
          Select a category
        </option>
        <option value="american">American</option>
        <option value="mexican">Mexican</option>
        <option value="italian">Italian</option>
        <option value="chinese">Chinese</option>
        <option value="japanese">Japanese</option>
        <option value="indian">Indian</option>
        <option value="french">French</option>
        <option value="thai">Thai</option>
        <option value="other">Other</option>
      </select>
    </div>
  );
}
