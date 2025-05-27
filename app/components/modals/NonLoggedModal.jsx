import Modal, { styles } from "./Modal";
import useViewport from "@/app/hooks/useViewport";
import { UserCircleIcon } from "@heroicons/react/24/outline";

export default function NonLoggedModal() {
  const isMobile = useViewport();
  const localStlyes = {
    icon: "w-6 h-6 inline-flex align-text-bottom",
  };

  return (
    <Modal
      windowTitle="Welcome!"
      xOffset={isMobile ? "80px" : "20px"}
      yOffset={isMobile ? "300px" : "50px"}
    >
      <p>
        You can explore more of the apps features by clicking on the profile
        button{" "}
        <span className={localStlyes.span}>
          <UserCircleIcon
            strokeWidth={2}
            className={`${localStlyes.icon} ${styles.annonymousUserBtn}`}
          />
        </span>
        .
      </p>
    </Modal>
  );
}
