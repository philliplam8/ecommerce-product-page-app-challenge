import { useState } from "react";
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

function MainImage(props: { width: number; height: number }) {
  return (
    <Image
      src={"/images/image-product-1.jpg"}
      alt={"Product Image 1"}
      width={props.width}
      height={props.height}
      className={"rounded-xl"}
    />
  );
}

export default function Carousel() {
  const [showCarousel, setShowCarousel] = useState(false);
  const handleCarouselOpen = () => {
    setShowCarousel(!showCarousel);
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

  return (
    <div id="carousel">
      <div className="h-full w-[400px] flex flex-col gap-5 mx-auto">
        <button onClick={handleCarouselOpen}>
          <MainImage width={400} height={400} />
        </button>
        <div className="flex flex-row gap-2 justify-between">
          {productImages.map((image) => {
            return (
              <button key={image.thumbnail}>
                <Image
                  src={image.thumbnail}
                  alt={`Product Image ${image.productId} Thumbnail`}
                  width={75}
                  height={75}
                  className={"rounded-xl border-2 hover:border-orange"}
                />
              </button>
            );
          })}
        </div>
      </div>

      <div
        id="modal-backdrop"
        className={`min-h-screen h-full w-full flex justify-center top-0 left-0 bg-veryDarkBlue/[.9] z-30 ${
          showCarousel ? "absolute" : "hidden"
        }`}
        onClick={handleCarouselOpen}
      >
        <div
          id="modal"
          className={`h-screen w-[600px] flex flex-col justify-center items-center z-40`}
        >
          <CloseButton />
          <div className="flex flex-row">
            <PreviousButton />
            <MainImage width={500} height={500} />
            <NextButton />
          </div>
        </div>
      </div>
    </div>
  );
}
