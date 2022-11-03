import { useState, useContext, useEffect } from "react";
import { ModalContext } from "../../context/ModalContext";
import Image from "next/image";
import { styles } from ".";

const productImages = [
  {
    productId: 1,
    main: "/images/image-product-1.jpg",
    thumbnail: "/images/image-product-1-thumbnail.jpg",
  },
  {
    productId: 2,
    main: "/images/image-product-2.jpg",
    thumbnail: "/images/image-product-2-thumbnail.jpg",
  },
  {
    productId: 3,
    main: "/images/image-product-3.jpg",
    thumbnail: "/images/image-product-3-thumbnail.jpg",
  },
  {
    productId: 4,
    main: "/images/image-product-4.jpg",
    thumbnail: "/images/image-product-4-thumbnail.jpg",
  },
];

function PreviousButton() {
  return (
    <div className="h-full flex items-center z-20">
      <button className="h-10 w-10 -mr-5 flex justify-center items-center bg-white rounded-3xl">
        <Image
          src={"/images/icon-previous.svg"}
          alt={`Previous modal item`}
          width={9}
          height={9}
          className={styles.nav}
        />
      </button>
    </div>
  );
}

function NextButton() {
  return (
    <div className="h-full flex items-center z-20">
      <button className="h-10 w-10 -ml-5 flex justify-center items-center bg-white rounded-3xl">
        <Image
          src={"/images/icon-next.svg"}
          alt={`Next modal item`}
          width={10}
          height={9.5}
          className={styles.nav}
        />
      </button>
    </div>
  );
}

function MainImage(props: {
  width: number;
  height: number;
  productId: number;
}) {
  return (
    <Image
      src={`/images/image-product-${props.productId}.jpg`}
      alt={`Product Image ${props.productId}`}
      width={props.width}
      height={props.height}
      className={"rounded-xl"}
    />
  );
}

export default function Carousel() {
  const [currentImage, setCurrentImage] = useState(1);
  const [showModal, setshowModal] = useContext(ModalContext);
  const handleCarouselOpen = () => {
    setshowModal(!showModal);
  };

  const handleCarouselChange = (productId: number) => {
    setCurrentImage(productId);
  };

  function CloseButton() {
    return (
      <div className="w-full flex justify-end py-3">
        <button onClick={handleCarouselOpen}>
          <Image
            src={"/images/icon-close.svg"}
            alt={`Close modal`}
            width={14}
            height={15}
            className={styles.close}
          />
        </button>
      </div>
    );
  }

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showModal]);

  return (
    <div
      id="carousel"
      className="h-full max-w-[541px] min-w-[400px] flex flex-col gap-7 mx-auto px-12"
    >
      <button onClick={handleCarouselOpen}>
        <MainImage width={500} height={450} productId={currentImage} />
      </button>

      <div className="flex flex-row justify-between">
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
                className={`rounded-xl border-2 hover:border-orange ${
                  image.productId === currentImage
                    ? "opacity-50 border-orange"
                    : "opacity-100"
                }`}
              />
            </button>
          );
        })}
      </div>

      <div
        className={`mx-auto flex flex-row justify-center items-center z-40 ${
          !!showModal ? "absolute" : "hidden"
        }`}
      >
        <PreviousButton />
        <div>
          <MainImage width={375} height={500} productId={currentImage} />
        </div>
        <NextButton />
      </div>
    </div>
  );
}
