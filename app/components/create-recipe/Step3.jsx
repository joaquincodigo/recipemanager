import { useEffect, useRef, useState } from "react";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Step3({ formData, setFormData }) {
  const [ingredients, setIngredients] = useState([""]);
  const inputRefs = useRef([]);

  const addIngredient = () => {
    setIngredients((prev) => [...prev, ""]);
  };

  useEffect(() => {
    const lastIndex = ingredients.length - 1;
    inputRefs.current[lastIndex]?.focus();
  }, [ingredients]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addIngredient();
    }
  };

  const handleChange = (i, value) => {
    const newIngredients = [...ingredients];
    newIngredients[i] = value;
    setIngredients(newIngredients);
  };

  const removeIngredient = (index) => {
    if (ingredients.length === 1) return;
    const newIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(newIngredients);
  };

  const styles = {
    heading: "text-slate-500 font-bold mb-5 text-center pb-3",
    inputContainer: "flex justify-center gap-x-2",
    removeButton: "bg-red-900 hover:bg-slate-700",
    removeIcon: "w-5 h-5 stroke-[3]",
  };

  return (
    <>
      <h2 className={styles.heading}>What are the ingredients?</h2>

      {ingredients.map((ingredient, i) => (
        <div key={i} className={styles.inputContainer}>
          <TextInput
            ref={(el) => (inputRefs.current[i] = el)}
            fieldName="Ingredient"
            value={ingredient}
            onChange={(e) => handleChange(i, e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <Button
            label={<XMarkIcon className={styles.removeIcon} />}
            type="primary"
            enabled={true}
            onClick={() => removeIngredient(i)}
            className={styles.removeButton}
          />
        </div>
      ))}

      <Button
        label="Add ingredient"
        type="primary"
        enabled={true}
        onClick={addIngredient}
        className="max-w-56 mx-auto mt-3"
      />
    </>
  );
}
