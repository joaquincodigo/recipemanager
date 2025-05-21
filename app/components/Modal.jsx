import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from 'next/link'


export default function Modal() {
  const styles = {
    window:
      "absolute z-50 w-64 h-64 top-6 right-0 translate-x-11 md:translate-x-[300px] rounded-md shadow-lg bg-white bg-[#FEFEE2]",
    topBar:
      "bg-[#7FC37E] text-white flex justify-between items-center ps-2 pe-1",
    closeIcon: "w-5 h-5 border-white border-[1.5px] border-black rounded-md",
    content: "p-2",
    link: "text-[#099107] underline",
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
          To get started, you can{" "}
          <span className={styles.link}>
            <Link href="/register">Sign Up</Link>
          </span>{" "}
          below — it's quick and doesn't require email verification.
        </p>

        <br />

        <p>Or try the app using demo credentials:</p>

        <ul>
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
