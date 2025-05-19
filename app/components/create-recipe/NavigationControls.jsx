import Button from "../ui/Button";

export default function NavigationControls({
  step,
  setStep,
  canMoveFoward,
  setCanMoveFoward,
}) {
  const handleBack = (e) => {
    e.preventDefault();
    setStep((s) => s - 1);
  };

  const handleNext = (e) => {
    e.preventDefault();
    setStep((s) => s + 1);
    setCanMoveFoward(false);
  };

  const styles = {
    // container: `flex gap-2 w-full ${step === 1 ? "justify-center" : ""}`,
    // TESTING-TESTING-TESTING-TESTING-TESTING-TESTING
    container: "flex gap-2 w-full justify-center",
    // TESTING-TESTING-TESTING-TESTING-TESTING-TESTING
  };

  return (
    <div className={styles.container}>
      {step !== 1 && (
        <Button
          label="Back"
          type="secondary"
          onClick={handleBack}
          enabled={!(step === 1)}
          className="flex-1"
        />
      )}

      <Button
        label={step === 8 ? "Finish" : "Next"}
        type="primary"
        onClick={handleNext}
        enabled={canMoveFoward}
        className="flex-[2]"
      />
    </div>
  );
}
