import React from "react";

export default function TextAreaInput({
  fieldName,
  required,
  onBlur,
  onFocus,
  error,
}) {
  const styles = {
    container: "relative flex flex-col",
    textarea:
      "bg-white h-32 p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-[#7FC37E]",
    errorTextarea:
      "bg-white p-3 rounded-md border-2 border-red-700 focus:outline-none focus:ring-2 focus:ring-red-700",
    label: "absolute left-2 -top-3 px-2 z-10 rounded bg-white z-10",
    errorLabel:
      "absolute left-2 -top-3 px-2 z-10 rounded bg-white z-10 text-red-700",
  };

  return (
    <div className={styles.container}>
      <label
        htmlFor={fieldName}
        className={error ? styles.errorLabel : styles.label}
      >
        {fieldName} {required ? "*" : ""}
      </label>

      <textarea
        type="text"
        id={fieldName}
        name={fieldName}
        className={error ? styles.errorTextarea : styles.textarea}
        onFocus={onFocus}
        onBlur={onBlur}
      ></textarea>
    </div>
  );
}
