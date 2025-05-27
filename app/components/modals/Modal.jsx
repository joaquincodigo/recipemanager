"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Button from "../ui/Button";

export const styles = {
  window:
    "flex flex-col fixed z-50 min-w-52 max-w-64 rounded-md shadow-lg  backdrop-blur-sm",
  topBar: "bg-[#7FC37E] text-white flex justify-between items-center ps-2 pe-1",
  closeIcon: "w-5 h-5 border-white border-[1.5px] border-black rounded-md",
  content: "p-2",
  footer: "p-2 flex flex-grow items-end justify-end",
  link: "text-[#099107] underline",
  bold: "font-semibold",
  credential: "w-max ps-3 list-inside list-disc",
};

export default function Modal({
  windowTitle,
  children,
  xOffset,
  yOffset,
  transform = "none",
}) {
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
      className={`${styles.window} bg-[#fefee2bf]`}
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

      <div className={styles.footer}>
        <Button
          enabled
          type="primary"
          label="Close"
          onClick={handleClosingClick}

        />
      </div>
    </div>
  );
}
