import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Modal() {
  const styles = {
    window:
      "absolute w-64 h-64 top-6 right-0 translate-x-11 rounded-md shadow-lg bg-white bg-[#FEFEE2]",
    topBar:
      "bg-[#7FC37E] text-white flex justify-between items-center ps-2 pe-1",
    closeIcon: "w-5 h-5 border-white border-[1.5px] border-black rounded-md",
    content: "p-2",
    link: "text-[#099107] underline",
    credentialsContainer: "mt-3 mx-auto w-max",
    credential: "w-max",
    bold: "font-semibold",
  };

  return (
    <div className={styles.window}>
      {/* TOP BAR */}
      <div className={styles.topBar}>
        <div>Welcome</div>
        <div>
          <XMarkIcon className={styles.closeIcon} />
        </div>
      </div>

      {/* CONTENT */}
      <div className={styles.content}>
        <p>
          To get started, you can <span className={styles.link}>sign up</span>{" "}
          below — it's quick and doesn't require email verification.
        </p>

        <br />

        <p>Or try the app using demo credentials:</p>

        <ul className={styles.credentialsContainer}>
          <li className={styles.credential}>
            Email: <span className={styles.bold}>user@mail.com</span>
          </li>
          <li className={styles.credential}>
            Password: <span className={styles.bold}>123456</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
