import { useState } from "react";

export default function Step5({ formData, setFormData, setCanMoveFoward }) {
  const [time, setTime] = useState("00:01");

  const handleChange = (e) => {
    const time = e.target.value;
    setTime(time);
    setFormData(time);
    if (time !== "00:00") {
      setCanMoveFoward(true);
    }
  };

  const handleClick = (e) => {
    e.target.showPicker?.();
  };

  const formatTime = (value) => {
    const [hours, minutes] = value.split(":").map(Number);

    if (hours === 0) return `${minutes} minute${minutes !== 1 ? "s" : ""}`;

    return `${hours} hour${hours !== 1 ? "s" : ""}, ${minutes} minute${
      minutes !== 1 ? "s" : ""
    }`;
  };

  const styles = {
    container: "flex flex-col items-center justify-center",
    heading: "text-slate-500 font-bold mb-5 text-center pb-10",
    timer:
      "bg-white p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-[#7FC37E] max-w-28 mb-3",
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>How long will it take to cook it?</h2>
      <input
        className={styles.timer}
        type="time"
        step="60"
        defaultValue="00:01"
        onClick={handleClick}
        onChange={handleChange}
      />
      <p>{formatTime(time)}</p>
    </div>
  );
}
