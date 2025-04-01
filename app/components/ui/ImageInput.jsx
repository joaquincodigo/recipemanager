import { PhotoIcon } from "@heroicons/react/24/outline";

export default function ImageInput() {
  const styles = {
    label:
      "flex w-56 items-center gap-2 cursor-pointer bg-[#7FC37E] text-white px-4 py-2 rounded-lg hover:bg-[#5b995a]",
    input: "hidden",
    icon: "w-8 h-8",
  };

  return (
    <label className={styles.label}>
      Seleccionar imagen
      <input
        type="file"
        id="RecipeImage"
        name="RecipeImage"
        accept="image/png, image/jpeg, image/gif"
        className={styles.input}
      />
      <PhotoIcon className={styles.icon} />
    </label>
  );
}
