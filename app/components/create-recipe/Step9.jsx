import Spinner from "../Spinner";

export default function Step9({ endingScreen, setStep }) {
  const styles = {
    container: "flex justify-center w-full",
    heading: "text-slate-500 font-bold mb-5 text-center pb-3",
  };

  const handleClick = () => {
    setStep(8);
  };

  let content;

  if (endingScreen === "loading") {
    content = <Spinner />;
  }

  if (endingScreen === "error") {
    content = (
      <>
        <p>An error ocurred while saving your recipe</p>
        <button onClick={handleClick}>Try again</button>
      </>
    );
  }

  if (endingScreen === "success") {
    content = (
      <>
        <p>Your recipe has been saved successfully</p>
      </>
    );
  }

  return <div className={styles.container}>{content}</div>;
}
