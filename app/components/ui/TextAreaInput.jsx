import React from "react";

export default function TextAreaInput({
  fieldName,
  required,
  onChange,
  onBlur,
  onFocus,
  error,
  value,
}) {
  const styles = {
    container: " flex flex-col md:items-center",
    wrapper: "relative",
    textarea:
      "bg-white h-32 p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-[#7FC37E] min-w-64 md:w-80",
    errorTextarea:
      "bg-white p-3 rounded-md border-2 border-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 md:w-80",
    label: "absolute left-2 -top-3 px-2 z-10 rounded bg-white z-10",
    errorLabel:
      "absolute left-2 -top-3 px-2 z-10 rounded bg-white z-10 text-red-700",
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
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
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          value={value}
        ></textarea>
      </div>
    </div>
  );
}
