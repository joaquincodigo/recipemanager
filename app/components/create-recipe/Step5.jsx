import { useEffect, useState } from "react";

export default function Step5({ formData, setFormData, setCanMoveFoward }) {
  const allowedMinutes = [
    0, 1, 2, 3, 4, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55,
  ];
  const allowedHours = Array.from({ length: 10 }, (_, i) => i + 1);

  const initialTotal = formData.preparation_time || 1;
  const initialHours = Math.floor(initialTotal / 60);
  const initialMinutes = initialTotal % 60;

  const [hours, setHours] = useState(initialHours);
  const [minutes, setMinutes] = useState(
    allowedMinutes.includes(initialMinutes) ? initialMinutes : 1
  );

  useEffect(() => {
    updateFormData(initialHours, initialMinutes);
    setCanMoveFoward(true);
  }, []);

  const updateFormData = (h, m) => {
    const total = h * 60 + m;
    setFormData((prev) => ({ ...prev, preparation_time: total }));
    setCanMoveFoward(total > 0);
  };

  const handleHourChange = (e) => {
    const h = Number(e.target.value);
    setHours(h);
    updateFormData(h, minutes);
  };

  const handleMinuteChange = (e) => {
    const m = Number(e.target.value);
    setMinutes(m);
    updateFormData(hours, m);
  };

  const formatTime = (h, m) => {
    if (h === 0) return `${m} minute${m !== 1 ? "s" : ""}`;
    return `${h} hour${h !== 1 ? "s" : ""}, ${m} minute${m !== 1 ? "s" : ""}`;
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-slate-500 font-bold mb-5 text-center pb-10">
        How long will it take to cook it?
      </h2>

      <div className="flex space-x-3 mb-3">
        <select
          className="bg-white p-3 rounded-md border focus:ring-2 focus:ring-[#7FC37E]"
          value={hours}
          onChange={handleHourChange}
        >
          <option value={0}>0 hours</option>
          {allowedHours.map((h) => (
            <option key={h} value={h}>
              {h} hour{h !== 1 ? "s" : ""}
            </option>
          ))}
        </select>

        <select
          className="bg-white p-3 rounded-md border focus:ring-2 focus:ring-[#7FC37E]"
          value={minutes}
          onChange={handleMinuteChange}
        >
          {allowedMinutes.map((m) => (
            <option key={m} value={m}>
              {m} minute{m !== 1 ? "s" : ""}
            </option>
          ))}
        </select>
      </div>

      <p>{formatTime(hours, minutes)}</p>
    </div>
  );
}
