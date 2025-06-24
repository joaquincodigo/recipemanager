import Link from "next/link";
import Modal, { styles } from "./Modal";
import useViewport from "@/app/hooks/useViewport";
import { Square2StackIcon, CheckIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const localStyles = {
  copyIcon:
    "w-5 h-5 border text-slate-400 border-slate-300 rounded-md hover:bg-slate-200",
  checkIcon: "w-5 h-5 text-slate-400",
  credential: "flex items-center gap-2 w-max ps-3 ",
  credentialsList: "mt-3",
  listDecorator: "text-black select-none", // best way to have flex aligment and the decorator. Other options, like using a wrapper div, created a lot of problems.
};

export default function LoginModal() {
  const isMobile = useViewport();
  const [showMailSuccessIcon, setShowMailSuccessIcon] = useState(false);
  const [showPasswordSuccessIcon, setShowPasswordSuccessIcon] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const handleClick = (field) => {
    if (field === "mail") {
      setShowMailSuccessIcon(true);
      copyToClipboard("user@mail.com");
      setTimeout(() => {
        setShowMailSuccessIcon(false);
      }, 1800);
    }

    if (field === "password") {
      setShowPasswordSuccessIcon(true);
      copyToClipboard("123456");
      setTimeout(() => {
        setShowPasswordSuccessIcon(false);
      }, 1800);
    }
  };

  return (
    <Modal
      windowTitle="Logging-in"
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

      <ul className={localStyles.credentialsList}>
        <li className={localStyles.credential}>
          <span className={localStyles.listDecorator}>•</span>
          Email:
          <span className={styles.bold}>user@mail.com</span>
          <button onClick={() => handleClick("mail")}>
            {showMailSuccessIcon ? (
              <CheckIcon className={localStyles.checkIcon} />
            ) : (
              <Square2StackIcon className={localStyles.copyIcon} />
            )}
          </button>
        </li>
        <li className={localStyles.credential}>
          <span className={localStyles.listDecorator}>•</span>
          Password:
          <span className={styles.bold}>123456</span>
          <button onClick={() => handleClick("password")}>
            {showPasswordSuccessIcon ? (
              <CheckIcon className={localStyles.checkIcon} />
            ) : (
              <Square2StackIcon className={localStyles.copyIcon} />
            )}
          </button>
        </li>
      </ul>
    </Modal>
  );
}
