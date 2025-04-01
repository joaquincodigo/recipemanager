import TextInput from "../ui/TextInput";
import TextAreaInput from "../ui/TextAreaInput";
import { Staatliches } from "next/font/google";

export default function Page1({ formData, setFormData }) {
  const styles = {
    heading: "text-slate-500 font-bold mb-5 text-center pb-3",
  };

  const handleTitleInput = (e) => {
    setFormData({ ...formData, title: e.target.value });
  };

  const handleDescriptionInput = (e) => {
    setFormData({ ...formData, description: e.target.value });
  };

  return (
    <>
      <h2 className={styles.heading}>What are we cooking?</h2>
      {/* Title */}
      <TextInput
        fieldName="Title"
        required={true}
        handleInput={handleTitleInput}
      />
      {/* Description */}
      <TextAreaInput
        fieldName="Description"
        required={true}
        handleInput={handleDescriptionInput}
      />
    </>
  );
}
