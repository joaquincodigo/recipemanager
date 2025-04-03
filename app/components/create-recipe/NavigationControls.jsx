import { useEffect } from "react";
import Button from "../ui/Button";

export default function NavigationControls({
  step,
  setStep,
  canMoveFoward,
  setCanMoveFoward,
}) {
  const handleBack = () => {
    setStep((s) => s - 1);
  };

  const handleNext = () => {
    setStep((s) => s + 1);
    setCanMoveFoward(false);
  };

  const styles = {
    container: "flex gap-2 w-full",
  };

  return (
    <div className={styles.container}>

      {step !== 1 && (
        <Button
          label="Back"
          type="secondary"
          onClick={handleBack}
          enbaled={!(step === 1)}
          className="flex-1"
        />
      )}

      <Button
        label="Next"
        type="primary"
        onClick={handleNext}
        enabled={canMoveFoward}
        className="flex-[2]"
      />
    </div>

  );
}
