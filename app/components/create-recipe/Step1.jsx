import TextInput from "../ui/TextInput";
import TextAreaInput from "../ui/TextAreaInput";
import { useState } from "react";

export default function Step1({ formData, setFormData, setCanMoveFoward }) {
  const isTitleValid = (title) => title.length >= 3;
  const isDescriptionValid = (description) => description.length >= 10;

  const handleInput = (e, propertyName) => {
    // Store the value
    setFormData((prev) => {
      const updatedFormData = { ...prev, [propertyName]: e.target.value };

      // Check if the user can continue to the next step
      setCanMoveFoward(
        isTitleValid(updatedFormData.title) &&
          isDescriptionValid(updatedFormData.description)
      );

      console.log("updated:", updatedFormData);
      return updatedFormData;
    });
  };

  const errors = {
    title: "The title must have at least 3 characters.",
    description: "The description must have at least 10 characters.",
  };

  const styles = {
    heading: "text-slate-500 font-bold mb-5 text-center pb-3",
    errorMessage: "text-red-700",
  };

  return (
    <>
      <h2 className={styles.heading}>What are we cooking?</h2>

      <div>
        {/* Title */}
        <TextInput
          fieldName="Title"
          required={true}
          onChange={(e) => handleInput(e, "title")}
        />

        {/* Error Message */}
        {isTitleValid && <p className={styles.errorMessage}>{errors.title}</p>}
      </div>

      <div>
        {/* Description */}
        <TextAreaInput
          fieldName="Description"
          required={true}
          onChange={(e) => handleInput(e, "description")}
        />

        {/* Error Message */}
        {/* {descriptionError && (
          <p className={styles.errorMessage}>
            The description must have at least 10 characters.
          </p>
        )} */}
      </div>
    </>
  );
}
