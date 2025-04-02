import TextInput from "../ui/TextInput";

export default function Step3({ formData, setFormData }) {
  const styles = {};

  return (
    <>
      <h2 className={styles.heading}>What are the ingredients?</h2>

      <TextInput
        fieldName="Ingredient"
        required={true}
        handleInput={handleTitleInput}
      />
			
    </>
  );
}
