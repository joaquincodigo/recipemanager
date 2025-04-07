import { useState } from "react";
import { PhotoIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function ImageInput() {
  const [image, setImage] = useState(null);

  const styles = {
    label:
      "flex w-42 font-bold items-center gap-2 cursor-pointer bg-[#7FC37E] text-white px-4 py-2 rounded-lg hover:bg-[#5b995a]",
    input: "hidden",
    icon: "w-8 h-8",
    thumbWrapper: "relative w-52 h-52 mt-4",
    thumbImage: "object-cover w-full h-full rounded-md",
    removeBtn:
      "absolute top-[-8px] right-[-8px] bg-white border-2 border-slate-400 rounded-full p-1 cursor-pointer hover:bg-slate-200 shadow-[0_2px_6px_rgba(0,0,0,0.4)]",
    removeIcon: "w-4 h-4 text-slate-700",
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);
  };

  const removeImage = () => setImage(null);

  return (
    <div>
      {!image && (
        <label className={styles.label}>
          Select image
          <input
            type="file"
            accept="image/png, image/jpeg, image/gif"
            onChange={handleChange}
            className={styles.input}
          />
          <PhotoIcon className={styles.icon} />
        </label>
      )}

      {image && (
        <div className={styles.thumbWrapper}>
          <img
            src={URL.createObjectURL(image)}
            alt="Preview"
            className={styles.thumbImage}
          />
          <button onClick={removeImage} className={styles.removeBtn}>
            <XMarkIcon className={styles.removeIcon} />
          </button>
        </div>
      )}
    </div>
  );
}
