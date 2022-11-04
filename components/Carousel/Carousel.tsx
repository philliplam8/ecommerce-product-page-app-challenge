import { useState, useContext, useEffect, MouseEventHandler } from "react";
import { productImages, ModalContext } from "../../context/ModalContext";
import Image from "next/image";
import { NextButton, PreviousButton } from "../Buttons";

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

  useEffect((): void => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showModal]);

  return (
    <div
      id="carousel"
      className="h-full max-w-[541px] flex flex-col gap-7 mx-auto md:px-6"
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

      <div className={`hidden md:flex flex-row justify-between`}>
        {productImages.map((image) => {
          return (
            <button
              key={image.thumbnail}
              onClick={() => handleCarouselChange(image.productId)}
            >
              <Image
                src={image.thumbnail}
                alt={`Product Image ${image.productId} Thumbnail`}
                width={92}
                height={92}
                className={`rounded-xl border-2 ${
                  image.productId === currentImage
                    ? "opacity-40 border-orange"
                    : "opacity-100 hover:opacity-60"
                }`}
              />
            </button>
          );
        })}
      </div>
      {/* 
      <div id="modal" className={`z-40 ${!!showModal ? "sticky" : "hidden"}`}>
        <div className="flex flex-row justify-center items-center">
          <PreviousButton />
          <div>
            <MainImage width={500} height={500} productId={currentImage} />
          </div>
          <NextButton />
        </div>
      </div> */}
    </div>
  );
}
