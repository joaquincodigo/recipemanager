import { useEffect } from "react";
import ImageInput from "../ui/ImageInput";

export default function Step2({ formData, setFormData, setCanMoveFoward }) {
  // Uploading an image is optional
  useEffect(() => {
    setCanMoveFoward(true);
  }, []);

  const styles = {
    container: "flex justify-center w-full",
    heading: "text-slate-500 font-bold mb-5 text-center",
  };

  return (
    <>
      <h2 className={styles.heading}>Upload an image (optional)</h2>
      <div className={styles.container}>
        <ImageInput formData={formData} setFormData={setFormData} />
      </div>
    </>
  );
}
