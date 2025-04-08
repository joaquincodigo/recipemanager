// ui/TextInput.jsx
import React, { forwardRef } from "react";

export default forwardRef(function TextInput(
  { fieldName, required, onChange, onBlur, onFocus, error, value, onKeyDown },
  ref
) {
  const styles = {
    container: "relative flex flex-col",
    input:
      "bg-white p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-[#7FC37E]",
    errorInput:
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
      <input
        ref={ref}
        type="text"
        id={fieldName}
        name={fieldName}
        className={error ? styles.errorInput : styles.input}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        value={value}
        onKeyDown={onKeyDown}
        autoComplete="off"
      />
    </div>
  );
});
