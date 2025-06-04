import { useState } from "react";

const styles = {
  select: "p-2 rounded border bg-[#ffffe5] border-slate-400",
  container: "flex gap-2 items-center bg-[#ffffe5]",
};

export default function CookingTimeInput({ onChange }) {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const update = (newHours, newMinutes) => {
    const h = newHours ?? hours;
    const m = newMinutes ?? minutes;

    setHours(h);
    setMinutes(m);

    onChange({ hours: h, minutes: m });
  };


	return (
		<div className={styles.container}> </div>


	)
}
