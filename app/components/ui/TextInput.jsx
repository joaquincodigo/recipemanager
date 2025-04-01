import React from "react";

export default function TextInput({ fieldName, required, handleInput }) {
  const styles = {
    container: "relative flex flex-col",
    label: "absolute left-2 -top-3 px-2 z-10 rounded bg-white",
    input:
      "bg-white p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-[#7FC37E]",
  };

  return (
    <div className={styles.container}>

      <label htmlFor={fieldName} className={styles.label}>
        {fieldName} {required ? "*" : ""}
      </label>

      <input
        type="text"
        id={fieldName}
        name={fieldName}
        className={styles.input}
      />

    </div>
  );
}
