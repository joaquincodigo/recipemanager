import React from "react";

export default function InputField({ fieldName }) {
  const styles = {
    input: "bg-red-500",
  };

  return (
    <div>
      <label htmlFor={fieldName}>{fieldName}</label>
      <input
        type="text"
        id={fieldName}
        name={fieldName}
        className={styles.input}
      />
    </div>
  );
}
