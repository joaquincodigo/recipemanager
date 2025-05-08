"use client";
import { useRouter } from "next/navigation";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";

export default function BackButton() {
  const router = useRouter();
  const styles = {
    button:
      "rounded-md gap-x-2 font-bold p-3  bg-[#7FC37E] text-white hover:bg-[#5d995c] flex",
    buttonText: "inline-block",
    icon: "w-6 h-6 text-white",
  };

  return (
    <button onClick={() => router.back()} className={styles.button}>
      <p className={styles.buttonText}>Back</p>
      <ArrowUturnLeftIcon className={styles.icon} />
    </button>
  );
}
