import { useState, useContext, useEffect } from "react";
import { productImages, ModalContext } from "../../context/ModalContext";
import Image from "next/image";
import FocusTrap from "focus-trap-react";
import {
  CloseButton,
  NextButton,
  PreviousButton,
  buttonStyles,
} from "../Buttons";
import { ModalBackdrop } from "../Overlay";

export default function Carousel(): JSX.Element {
  // First and last images from image array
  const firstProductId = productImages[0].productId;
  const lastProductId = productImages[productImages.length - 1].productId;

  const [currentImage, setCurrentImage] = useState(firstProductId);
  const [showModal, setshowModal] = useContext(ModalContext);
  const handleModalOpen = () => {
    setshowModal(!showModal);
  };

  /**
   * Change the carousel to show the image of productId
   * @param productId The id of one of the images for a product item
   */
  const handleCarouselChange = (productId: number): void => {
    setCurrentImage(productId);
  };

  /**
   * Move the carousel one slide backwards
   */
  const handleCarouselDecrement = (): void => {
    if (currentImage === firstProductId) {
      setCurrentImage(lastProductId);
    } else {
      setCurrentImage(currentImage - 1);
    }
  };

  /**
   * Move the carousel one slide fowards
   */
  const handleCarouselIncrement = (): void => {
    if (currentImage === lastProductId) {
      setCurrentImage(firstProductId);
    } else {
      setCurrentImage(currentImage + 1);
    }
  };

  function MainImage(props: {
    width: number;
    height: number;
    productId: number;
  }): JSX.Element {
    return (
      <Image
        src={`/images/image-product-${props.productId}.jpg`}
        alt={`Product Image ${props.productId}`}
        width={props.width}
        height={props.height}
        className={`md:rounded-xl h-[320px] md:h-full object-cover`}
      />
    );
  }

  function ThumbnailImages(props: { classStyle?: string }): JSX.Element {
    return (
      <div className={`flex justify-around ${props.classStyle}`}>
        {productImages.map((image) => {
          return (
            <button
              key={image.thumbnail}
              onClick={() => handleCarouselChange(image.productId)}
              className={`rounded-xl border-2 w-[92px]  ${
                image.productId === currentImage
                  ? "border-orange bg-white"
                  : "border-transparent"
              }`}
            >
              <Image
                src={image.thumbnail}
                alt={`Product Image ${image.productId} Thumbnail`}
                width={92}
                height={92}
                className={`${
                  image.productId === currentImage
                    ? "rounded-lg opacity-40"
                    : "rounded-xl hover:opacity-60"
                }`}
              />
            </button>
          );
        })}
      </div>
    );
  }

  function CarouselMain() {
    return (
      <div
        id="carousel-main"
        className="max-w-[541px] h-full flex flex-col gap-7 mx-auto md:px-6"
      >
        <div className="relative flex flex-row items-center">
          <PreviousButton
            classStyle={"md:hidden absolute left-4"}
            handleDecrement={handleCarouselDecrement}
          />
          <button onClick={handleModalOpen} className={``}>
            <MainImage width={600} height={600} productId={currentImage} />
          </button>
          <NextButton
            classStyle={"md:hidden absolute right-4"}
            handleIncrement={handleCarouselIncrement}
          />
        </div>
        <div className="hidden md:block">
          <ThumbnailImages />
        </div>
      </div>
    );
  }

  function CarouselModal() {
    return (
      <FocusTrap active={showModal}>
        <div
          id="carousel-modal"
          className={`z-40 ${
            !!showModal
              ? "absolute left-0 right-0 top-0 bottom-0 max-w-[607px] vsm:max-h-[440px] max-h-[772px] mx-auto my-auto overflow-auto"
              : "hidden"
          }`}
        >
          <div className={`flex flex-col vsm:flex-row-reverse`}>
            <div
              id="modal-close"
              className={`flex vsm:mx-2 mx-7 my-5 z-50 vsm:items-start justify-end`}
            >
              <CloseButton
                handleClose={handleModalOpen}
                classStyle={buttonStyles.close}
              />
            </div>
            <div className="flex flex-row justify-center items-center px-2 z-50">
              <div
                id="modal-main-image"
                className="flex flex-row justify-center items-center"
              >
                <PreviousButton
                  handleDecrement={handleCarouselDecrement}
                  classStyle={""}
                />
                <div>
                  <Image
                    src={`/images/image-product-${currentImage}.jpg`}
                    alt={`Product Image ${currentImage}`}
                    width={600}
                    height={600}
                    className={`rounded-xl`}
                  />
                </div>
                <NextButton
                  handleIncrement={handleCarouselIncrement}
                  classStyle={""}
                />
              </div>
            </div>
            <div
              id="carousel-thumbnails"
              className={`vsm:mx-2 mx-20 my-9 z-50`}
            >
              <ThumbnailImages classStyle={`${showModal && "vsm:flex-col"}`} />
            </div>
          </div>
          <ModalBackdrop />
        </div>
      </FocusTrap>
    );
  }

  useEffect((): void => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showModal]);

  return (
    <>
      <CarouselMain />
      <CarouselModal />
    </>
  );
}
