"use client";
import { useEffect, useState } from "react";

import Step1 from "@/app/components/create-recipe/Step1";
import Step2 from "@/app/components/create-recipe/Step2";
import Step3 from "@/app/components/create-recipe/Step3";
import NavigationControls from "@/app/components/create-recipe/navigationControls";

export default function CreateRecipe() {
  // STATE
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const [canMoveFoward, setCanMoveFoward] = useState(false);

  // STYLES
  const styles = {
    heading: "text-xl font-bold text-center mt-5",
    container: "flex flex-col p-3 gap-y-10 min-h-screen",
    formContainer: "flex flex-col gap-y-5 justify-center min-h-72",
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Create a new recipe</h1>
      <div className={styles.formContainer}>

        {step === 1 && (
          <Step1
            formData={formData}
            setFormData={setFormData}
            setCanMoveFoward={setCanMoveFoward}
          />
        )}

        {step === 2 && (
          <Step2
            formData={formData}
            setFormData={setFormData}
            setCanMoveFoward={setCanMoveFoward}
          />
        )}

        {step === 3 && (
          <Step3
            formData={formData}
            setFormData={setFormData}
            setCanMoveFoward={setCanMoveFoward}
          />
        )}

      </div>

      <NavigationControls
        step={step}
        setStep={setStep}
        canMoveFoward={canMoveFoward}
        setCanMoveFoward={setCanMoveFoward}
      />

      {/* Ingredients [array]
      <TextInput fieldName="Ingredient" required={true} />

      {/* Preparation steps [array] */}
      {/* <TextInput fieldName="Preparation steps" required={true} /> */}

      {/* Prep time */}
      {/* <TextInput fieldName="Preparation steps" required={true} /> */}

      {/* Servings */}
      {/* <TextInput fieldName="Servings" /> */}

      {/* Difficulty (easy, medium, hard) */}
      {/* <TextInput fieldName="Difficulty" /> */}

      {/* Category */}
      {/* <TextInput fieldName="Category" /> */}
    </div>
  );
}
