import { useEffect, useRef } from "react";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Step3({ formData, setFormData, setCanMoveFoward }) {
  const inputRefs = useRef([]);
  const prevCountRef = useRef(formData.ingredients.length);

  // initialize first input
  useEffect(() => {
    if (formData.ingredients.length === 0) {
      setFormData(prev => ({ ...prev, ingredients: [""] }));
    }
  }, []);

  // enable forward when first is filled
  useEffect(() => {
    if (formData.ingredients[0] !== "") {
      setCanMoveFoward(true);
    }
  }, [formData]);

  const addIngredient = () => {
    setFormData(prev => ({
      ...prev,
      ingredients: [...prev.ingredients, ""],
    }));
  };

  // autofocus only when a new input is added
  useEffect(() => {
    const prevCount = prevCountRef.current;
    const currCount = formData.ingredients.length;

    if (currCount > prevCount) {
      // focus the newly added input
      inputRefs.current[currCount - 1]?.focus();
    }

    prevCountRef.current = currCount;
  }, [formData.ingredients]);

  const handleKeyDown = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      addIngredient();
    }
  };

  const handleIngredientChange = (i, e) => {
    const newList = [...formData.ingredients];
    newList[i] = e.target.value;
    const cleaned = newList.filter(v => v.trim() !== "");
    setFormData(prev => ({
      ...prev,
      ingredients: cleaned.length ? newList : [""],
    }));
  };

  const removeIngredient = i => {
    if (formData.ingredients.length === 1) return;
    setFormData(prev => ({
      ...prev,
      ingredients: prev.ingredients.filter((_, idx) => idx !== i),
    }));
  };

  return (
    <>
      <h2 className="text-slate-500 font-bold mb-5 text-center pb-3">
        What are the ingredients?
      </h2>
      {formData.ingredients.map((ing, i) => (
        <div key={i} className="flex justify-center gap-x-2">
          <TextInput
            ref={el => (inputRefs.current[i] = el)}
            fieldName="Ingredient"
            value={ing}
            onChange={e => handleIngredientChange(i, e)}
            onKeyDown={handleKeyDown}
          />
          <Button
            label={<XMarkIcon className="w-5 h-5 stroke-[3]" />}
            type="primary"
            enabled
            onClick={() => removeIngredient(i)}
            className="bg-red-900 hover:bg-slate-700"
          />
        </div>
      ))}
      <Button
        label="Add another ingredient"
        type="primary"
        enabled
        onClick={addIngredient}
        className="max-w-56 mx-auto mt-3"
      />
    </>
  );
}
