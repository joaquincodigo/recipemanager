import Button from "../ui/Button";

export default function NavigationControls({ step, setStep }) {
  const handleBack = () => {
    setStep((s) => s - 1);
  };
  const handleNext = () => {
    setStep((s) => s + 1);
  };

  const styles = {
    container: "flex gap-2 w-full",
  };

  return (
    <div className={styles.container}>
      <Button
        label="Back"
        type="secondary"
        onClick={handleBack}
        disabled={step === 1}
        className="flex-1"
      />
      <Button
        label="Next"
        type="primary"
        onClick={handleNext}
        disabled={step === 5}
        className="flex-[2]"
      />
    </div>
  );
}
