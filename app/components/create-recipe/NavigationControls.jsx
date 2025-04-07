import Button from "../ui/Button";

export default function NavigationControls({
  step,
  setStep,
  canMoveFoward,
  setCanMoveFoward,
}) {
  const handleBack = (e) => {
    e.preventDefault()
    console.log("Im handle back");
    setStep((s) => s - 1);
    setCanMoveFoward(false);
  };

  const handleNext = (e) => {
    e.preventDefault()
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
          enabled={true}
          // enabled ={!(step === 1)}
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
