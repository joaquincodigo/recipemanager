import Modal, { styles } from "./Modal";
import useViewport from "@/app/hooks/useViewport";

export default function LoggedModal() {
  const isMobile = useViewport();
  const localStlyes = {};

  return (
    <Modal
      windowTitle="New features enabled"
      xOffset={isMobile ? "80px" : "20px"}
      yOffset={isMobile ? "300px" : "50px"}
    >
      <p>You're in! Feel free to explore all the features.</p>
    </Modal>
  );
}
