import ImageInput from "../ui/ImageInput";

export default function Page2({ formData, setFormData }) {
  const styles = {
    container: "flex justify-center w-full",
    heading: "text-slate-500 font-bold mb-5 text-center pb-3",
  };

  return (
    <>
      <h2 className={styles.heading}>Upload an image (optional)</h2>
      <div className={styles.container}>
        <ImageInput />
      </div>
    </>
  );
}
