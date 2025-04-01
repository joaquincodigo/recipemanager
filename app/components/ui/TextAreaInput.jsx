import React from "react";

export default function TextAreaInput({ fieldName, required }) {
  const styles = {
    container: "relative flex flex-col",
    label: "absolute left-2 -top-3 px-2 z-10 rounded bg-white",
    textarea:
      "bg-white h-32 p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-[#7FC37E]",
  };

  return (
    <div className={styles.container}>
      <label htmlFor={fieldName} className={styles.label}>
        {fieldName} {required ? "*" : ""}
      </label>

      <textarea
        type="text"
        id={fieldName}
        name={fieldName}
        className={styles.textarea}
      ></textarea>
    </div>
  );
}
