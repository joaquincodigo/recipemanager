"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export const styles = {
  window: "fixed z-50 w-64 h-64 rounded-md shadow-lg bg-[#FEFEE2]",
  topBar: "bg-[#7FC37E] text-white flex justify-between items-center ps-2 pe-1",
  closeIcon: "w-5 h-5 border-white border-[1.5px] border-black rounded-md",
  content: "p-2",
  link: "text-[#099107] underline",
  bold: "font-semibold",
  credential: "w-max ps-3 list-inside list-disc",
};

export default function Modal({ windowTitle, children, xOffset, yOffset }) {
  const [isOpen, setIsOpen] = useState(true);

  const handleClosingClick = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    // WINDOW
    <div
      className={styles.window}
      style={{
        top: yOffset,
        right: xOffset,
      }}
    >
      {/* TOP BAR */}
      <div className={styles.topBar}>
        <div>{windowTitle}</div>
        <button onClick={handleClosingClick}>
          <XMarkIcon className={styles.closeIcon} />
        </button>
      </div>

      {/* CONTENT */}
      <div className={styles.content}>{children}</div>
    </div>
  );
}
