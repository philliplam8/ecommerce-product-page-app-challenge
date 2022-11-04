import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";

export default function ModalBackdrop() {
  const [showModal, setShowModal] = useContext(ModalContext);
  const handleCarouselOpen = () => {
    setShowModal(!showModal);
  };
  return (
    <div
      id="modal-backdrop"
      className={`h-screen w-screen top-0 left-0 bg-veryDarkBlue/[.9] z-30  ${
        showModal ? "fixed" : "hidden"
      }`}
      onClick={handleCarouselOpen}
    ></div>
  );
}
