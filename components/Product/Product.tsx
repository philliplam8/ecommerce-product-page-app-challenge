import Image from "next/image";

interface ProductItem {
  company: string;
  name: string;
  description: string;
  originalPrice: number;
  discount: number;
}
export default function Product(props: ProductItem) {
  const formatedOriginalPrice = `$${props.originalPrice}.00`;
  const formatedDiscountPrice = `$${
    (props.originalPrice * props.discount) / 100
  }.00`;

  return (
    <div className="flex flex-col md:flex-row gap-10 justify-center mx-auto py-10">
      <div className="flex flex-col gap-5">
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

      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <div className="my-6">
          <p className="font-bold text-xs text-orange tracking-widest">
            {props.company.toLocaleUpperCase()}
          </p>
          <h1 className="font-bold text-[2.5em]">{props.name}</h1>
        </div>

        <p className="text-darkGrayishBlue">{props.description}</p>

        <div
          id="price"
          className="my-6 flex flex-row sm:flex-col justify-between"
        >
          <div className="flex flex-row gap-5 items-center">
            <h2 className="font-bold text-[1.75em]">{formatedDiscountPrice}</h2>
            <div className="w-[50px] py-[0.15em] flex justify-center bg-paleOrange rounded-lg">
              <p className="font-bold text-orange">{props.discount}%</p>
            </div>
          </div>

          <div className="font-bold line-through text-darkGrayishBlue">
            {formatedOriginalPrice}
          </div>
        </div>
      </div>
    </div>
  );
}
