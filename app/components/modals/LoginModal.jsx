import Link from "next/link";
import Modal, { styles } from "./Modal";
import useViewport from "@/app/hooks/useViewport";

export default function LoginModal() {
  const isMobile = useViewport();

  return (
    <Modal
      windowTitle="Logging-in..."
      xOffset={isMobile ? "5%" : "15%"}
      yOffset={isMobile ? "2%" : "5%"}
    >
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
    </Modal>
  );
}
