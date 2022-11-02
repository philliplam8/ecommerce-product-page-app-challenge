import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";

export default function ModalBackdrop() {
  const [showCarousel, setShowCarousel] = useContext(ModalContext);
  const handleCarouselOpen = () => {
    setShowCarousel(!showCarousel);
  };
  return (
    <div
      id="modal-backdrop"
      className={`h-screen w-screen top-0 left-0 bg-veryDarkBlue/[.9] z-30  ${
        showCarousel ? "fixed" : "hidden"
      }`}
      onClick={handleCarouselOpen}
    ></div>
  );
}
