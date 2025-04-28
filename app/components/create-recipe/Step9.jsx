import Spinner from "../Spinner";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { XCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Step9({ endingScreen, setStep }) {
  const handleClick = () => {
    setStep(8);
  };

  const styles = {
    container: "flex flex-col justify-center items-center w-full h-full",
    heading: "text-xl font-bold text-center mb-5 px-10",
    success_icon: "text-[#7FC37E] w-14 h-14 mb-5",
    error_icon: "text-red-400 w-14 h-14 mb-5",
    button: "bg-[#7FC37E] px-3 py-3 text-white font-bold rounded ",
  };

  let content;

  if (endingScreen === "loading") {
    content = <Spinner />;
  }

  if (endingScreen === "error") {
    content = (
      <>
        <XCircleIcon className={styles.error_icon} />
        <h1 className={styles.heading}>
          An error ocurred while saving your recipe
        </h1>
        <button className={styles.button} onClick={handleClick}>
          Try again
        </button>
      </>
    );
  }

  if (endingScreen === "success") {
    content = (
      <>
        <CheckCircleIcon className={styles.success_icon} />
        <h1 className={styles.heading}>Recipe Saved!</h1>
        <Link href="/my-recipes">
          <button className={styles.button}>Go to your recipes</button>
        </Link>
      </>
    );
  }

  return <div className={styles.container}>{content}</div>;
}
