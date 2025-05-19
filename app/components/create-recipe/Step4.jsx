import { useEffect, useRef, useState } from "react";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Step4({ formData, setFormData, setCanMoveFoward }) {
  const inputRefs = useRef([]);
  const [prevLength, setPrevLength] = useState(0);

  useEffect(() => {
    if (formData.preparation_steps.length === 0) {
      setFormData((prev) => ({
        ...prev,
        preparation_steps: [""],
      }));
    }
  }, []);

  useEffect(() => {
    if (
      formData.preparation_steps.length !== 0 &&
      formData.preparation_steps[0] !== ""
    ) {
      setCanMoveFoward(true);
    }
  }, [formData]);

  const addPreparationStep = () => {
    setFormData((prev) => ({
      ...prev,
      preparation_steps: [...prev.preparation_steps, ""],
    }));
  };

  useEffect(() => {
    const currentLength = formData.preparation_steps.length;
    const isNewItemAdded = currentLength > prevLength;

    if (isNewItemAdded) {
      const lastIndex = currentLength - 1;
      inputRefs.current[lastIndex]?.focus();
    }

    setPrevLength(currentLength);
  }, [formData.preparation_steps]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addPreparationStep();
    }
  };

  const handlePreparationStepChange = (index, e) => {
    const newPreparationSteps = [...formData.preparation_steps];
    newPreparationSteps[index] = e.target.value;
    const cleaned = newPreparationSteps.filter((item) => item.trim() !== "");
    setFormData((prev) => ({
      ...prev,
      preparation_steps: cleaned.length > 0 ? newPreparationSteps : [""],
    }));
  };

  const removePreparationStep = (index) => {
    if (formData.preparation_steps.length === 1) return;
    const newPreparationSteps = formData.preparation_steps.filter(
      (_, i) => i !== index
    );
    setFormData((prev) => ({
      ...prev,
      preparation_steps: newPreparationSteps,
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
      <h2 className={styles.heading}>How do we cook it?</h2>

      {formData.preparation_steps.map((preparationStep, i) => (
        <div key={i} className={styles.inputContainer}>
          <TextInput
            ref={(el) => (inputRefs.current[i] = el)}
            fieldName={`Preparation step ${i + 1}`}
            value={preparationStep}
            onChange={(e) => handlePreparationStepChange(i, e)}
            onKeyDown={handleKeyDown}
          />
          <Button
            label={<XMarkIcon className={styles.removeIcon} />}
            type="primary"
            enabled={true}
            onClick={() => removePreparationStep(i)}
            className={styles.removeButton}
          />
        </div>
      ))}

      <Button
        label="Add another step"
        type="primary"
        enabled={true}
        onClick={addPreparationStep}
        className="max-w-56 mx-auto mt-3"
      />
    </>
  );
}
