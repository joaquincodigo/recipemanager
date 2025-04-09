import { useEffect, useRef } from "react";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Step3({ formData, setFormData, setCanMoveFoward }) {
  const inputRefs = useRef([]);

  // The first input must always be visible
  useEffect(() => {
    if (formData.ingredients.length === 0) {
      setFormData((prev) => ({
        ...prev,
        ingredients: [""],
      }));
    }
  }, []);

  // If there's at least 1 non-empty ingredient, the user can proceed
  useEffect(() => {
    if (formData.ingredients.length !== 0 && formData.ingredients[0] !== "") {
      setCanMoveFoward(true);
    }
  }, [formData]);

  const addIngredient = () => {
    setFormData((prev) => ({
      ...prev,
      ingredients: [...prev.ingredients, ""],
    }));
  };

  useEffect(() => {
    const lastIndex = formData.ingredients.length - 1;
    inputRefs.current[lastIndex]?.focus();
  }, [formData.ingredients]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addIngredient();
    }
  };

  const handleIngredientChange = (index, e) => {
    const newIngredients = [...formData.ingredients];
    newIngredients[index] = e.target.value;
    const cleaned = newIngredients.filter((item) => item.trim() !== "");
    setFormData((prev) => ({
      ...prev,
      ingredients: cleaned.length > 0 ? newIngredients : [""],
    }));
  };

  const removeIngredient = (index) => {
    if (formData.ingredients.length === 1) return;
    const newIngredients = formData.ingredients.filter((_, i) => i !== index);
    setFormData((prev) => ({
      ...prev,
      ingredients: newIngredients,
    }));
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

      {formData.ingredients.map((ingredient, i) => (
        <div key={i} className={styles.inputContainer}>
          <TextInput
            ref={(el) => (inputRefs.current[i] = el)}
            fieldName="Ingredient"
            value={ingredient}
            onChange={(e) => handleIngredientChange(i, e)}
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
        label="Add another ingredient"
        type="primary"
        enabled={true}
        onClick={addIngredient}
        className="max-w-56 mx-auto mt-3"
      />
    </>
  );
}
