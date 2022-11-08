import { useState, useContext, useEffect } from "react";
import { productImages, ModalContext } from "../../context/ModalContext";
import Image from "next/image";
import { CloseButton, NextButton, PreviousButton, styles } from "../Buttons";
import FocusTrap from "focus-trap-react";
import { ModalBackdrop } from "../Overlay";
import { carouselStyle } from "./";

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

  function ThumbnailImages(): JSX.Element {
    return (
      <div
        className={`flex justify-between ${
          showModal && carouselStyle.thumbnails
        }`}
      >
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

  useEffect((): void => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showModal]);

  return (
    <>
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

      <FocusTrap active={showModal}>
        <div
          id="carousel-modal"
          className={`z-40 ${
            !!showModal
              ? "absolute left-0 right-0 top-0 bottom-0 max-w-[607px] max-h-[607px] m-auto"
              : "hidden"
          }`}
        >
          <div className="flex flex-col">
            <div
              className={`flex justify-end items-center mx-7 py-5 z-50 ${
                showModal && carouselStyle.horizontalClose
              }`}
            >
              <CloseButton
                handleClose={handleModalOpen}
                classStyle={styles.close}
              />
            </div>
            <div className="flex flex-row justify-center items-center px-2 z-50">
              <div
                className={`py-9 px-2 z-50 ${
                  showModal && carouselStyle.vertical
                }`}
              >
                <ThumbnailImages />
              </div>
              <PreviousButton
                handleDecrement={handleCarouselDecrement}
                classStyle={""}
              />
              <div className="">
                <Image
                  src={`/images/image-product-${currentImage}.jpg`}
                  alt={`Product Image ${currentImage}`}
                  width={600}
                  height={600}
                  className={`rounded-xl ${carouselStyle.modal}`}
                />
              </div>
              <NextButton
                handleIncrement={handleCarouselIncrement}
                classStyle={""}
              />
              <div
                className={`${carouselStyle.vertical} relative -top-[136px]`}
              >
                <CloseButton
                  handleClose={handleModalOpen}
                  classStyle={styles.close}
                />
              </div>
            </div>
            <div
              className={`py-9 px-20 z-50 ${
                showModal && carouselStyle.horizontal
              }`}
            >
              <ThumbnailImages />
            </div>
          </div>
          <ModalBackdrop />
        </div>
      </FocusTrap>
    </>
  );
}
