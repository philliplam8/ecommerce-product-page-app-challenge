import Image from "next/image";

export default function Carousel() {
  return (
    <div id="carousel" className="flex flex-col gap-5">
      <Image
        src={"/images/image-product-1.jpg"}
        alt={"Product Image 1"}
        width={400}
        height={400}
        className={"rounded-xl"}
      />
      <div className="flex flex-row gap-2 justify-between">
        <Image
          src={"/images/image-product-1-thumbnail.jpg"}
          alt={"Product Image 1 Thumbnail"}
          width={75}
          height={75}
          className={"rounded-xl"}
        />
        <Image
          src={"/images/image-product-2-thumbnail.jpg"}
          alt={"Product Image 2 Thumbnail"}
          width={75}
          height={75}
          className={"rounded-xl"}
        />
        <Image
          src={"/images/image-product-3-thumbnail.jpg"}
          alt={"Product Image 3 Thumbnail"}
          width={75}
          height={75}
          className={"rounded-xl"}
        />
        <Image
          src={"/images/image-product-4-thumbnail.jpg"}
          alt={"Product Image 4 Thumbnail"}
          width={75}
          height={75}
          className={"rounded-xl"}
        />
      </div>
    </div>
  );
}
