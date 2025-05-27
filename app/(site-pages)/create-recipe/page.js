"use client";
import { useEffect, useState, useRef } from "react";

import Step1 from "@/app/components/create-recipe/Step1";
import Step2 from "@/app/components/create-recipe/Step2";
import Step3 from "@/app/components/create-recipe/Step3";
import Step4 from "@/app/components/create-recipe/Step4";
import Step5 from "@/app/components/create-recipe/Step5";
import Step6 from "@/app/components/create-recipe/Step6";
import Step7 from "@/app/components/create-recipe/Step7";
import Step8 from "@/app/components/create-recipe/Step8";
import Step9 from "@/app/components/create-recipe/Step9";
import NavigationControls from "@/app/components/create-recipe/NavigationControls";
import useStoreNewRecipe from "@/app/hooks/useStoreNewRecipe";

export default function CreateRecipe() {
  const [endingScreen, setEndingScreen] = useState("loading");
  const { recordNewRecipe } = useStoreNewRecipe();
  const [step, setStep] = useState(1);
  const [canMoveFoward, setCanMoveFoward] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    ingredients: [],
    preparation_steps: [],
  });

  useEffect(() => {
    const match = document.cookie.match(/(^| )userId=([^;]+)/);
    const userId = match?.[2] || null;
    setFormData((prev) => ({ ...prev, author: userId }));
  }, []);

  const hasStored = useRef(false); // Prevent multiple posts
  useEffect(() => {
    if (step === 9 && !hasStored.current) {
      // Prevent multiple posts
      hasStored.current = true;
      console.log("Recording recipe");
      recordNewRecipe(formData).then(({ success }) =>
        setEndingScreen(success ? "success" : "error")
      );
    }
  }, [step]);

  const styles = {
    heading: "text-xl font-bold text-center mt-5 md:mt-0 mb-5",
    container: "flex flex-col p-3 gap-y-10 min-h-screen justify-center pb-32",
    formContainer:
      "md:w-max md:mx-auto flex flex-col gap-y-5 justify-center pb-10 h-[400px] overflow-hidden overflow-y-auto md:px-1 md:my-7",
  };

  return (
    <div className={styles.container}>
      <div>
        {step !== 9 && <h1 className={styles.heading}>Create a new recipe</h1>}
        <div className={styles.formContainer}>
          {/* Title and description */}
          {step === 1 && (
            <Step1
              formData={formData}
              setFormData={setFormData}
              setCanMoveFoward={setCanMoveFoward}
            />
          )}

          {/* Image */}
          {step === 2 && (
            <Step2
              formData={formData}
              setFormData={setFormData}
              setCanMoveFoward={setCanMoveFoward}
            />
          )}

          {/* Ingredients */}
          {step === 3 && (
            <Step3
              formData={formData}
              setFormData={setFormData}
              setCanMoveFoward={setCanMoveFoward}
            />
          )}

          {/* Preparation Steps */}
          {step === 4 && (
            <Step4
              formData={formData}
              setFormData={setFormData}
              setCanMoveFoward={setCanMoveFoward}
            />
          )}

          {/* Preparation Time */}
          {step === 5 && (
            <Step5
              formData={formData}
              setFormData={setFormData}
              setCanMoveFoward={setCanMoveFoward}
            />
          )}

          {/* Servings */}
          {step === 6 && (
            <Step6
              formData={formData}
              setFormData={setFormData}
              setCanMoveFoward={setCanMoveFoward}
            />
          )}

          {/* Difficulty */}
          {step === 7 && (
            <Step7
              formData={formData}
              setFormData={setFormData}
              setCanMoveFoward={setCanMoveFoward}
            />
          )}

          {/* Category */}
          {step === 8 && (
            <Step8
              formData={formData}
              setFormData={setFormData}
              setCanMoveFoward={setCanMoveFoward}
            />
          )}

          {/* Saving Data Screen  */}
          {step === 9 && (
            <Step9 setStep={setStep} endingScreen={endingScreen} />
          )}
        </div>
        {step !== 9 && (
          <NavigationControls
            step={step}
            setStep={setStep}
            canMoveFoward={canMoveFoward}
            setCanMoveFoward={setCanMoveFoward}
          />
        )}
      </div>
    </div>
  );
}
