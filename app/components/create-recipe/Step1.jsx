import TextInput from "../ui/TextInput";
import TextAreaInput from "../ui/TextAreaInput";
import { useState } from "react";

export default function Step1({ formData, setFormData, setCanMoveFoward }) {
  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  const handleTitleInput = (e) => {
    setFormData({ ...formData, title: e.target.value });
  };

  const handleDescriptionInput = (e) => {
    setFormData({ ...formData, description: e.target.value });
  };

  const checkTitle = (e) => {
    if (e.target.value.length < 3) {
      console.log("title error");
      setTitleError(true);
    }
  };

  const checkDescription = (e) => {
    if (e.target.value.length < 10) {
      setDescriptionError(true);
    }
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
          handleInput={handleTitleInput}
          onBlur={checkTitle}
          error={titleError}
          onFocus={() => {
            setTitleError(false);
          }}
        />

        {/* Error Message */}
        {titleError && (
          <p className={styles.errorMessage}>
            The title must have at least 3 characters.
          </p>
        )}
      </div>

      <div>
        {/* Description */}
        <TextAreaInput
          fieldName="Description"
          required={true}
          handleInput={handleDescriptionInput}
          onBlur={checkDescription}
          onFocus={() => setDescriptionError(false)}
          error={descriptionError}
        />

        {/* Error Message */}
        {descriptionError && <p className={styles.errorMessage}>The description must have at least 10 characters.</p>}
      </div>
    </>
  );
}
