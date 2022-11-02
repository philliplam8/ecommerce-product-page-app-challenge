import { ProductItemDetails } from "./types";

export default function ProductDetails(props: ProductItemDetails) {
  const formatedOriginalPrice = `$${props.originalPrice.toFixed(2)}`;
  const finalPrice: string = `$${props.discountedPrice.toFixed(2)}`;

  return (
    <div id="product-details" className="w-full flex flex-col justify-center">
      <div className="my-6">
        <p
          id="product-company"
          className="font-bold text-[0.85em] text-orange tracking-widest"
        >
          {props.company.toLocaleUpperCase()}
        </p>
        <h1
          id="product-name"
          className="font-bold text-[1.75em] md:text-[2em] lg:text-[2.75em]"
        >
          {props.name}
        </h1>
      </div>

      <p
        id="product-description"
        className="text-darkGrayishBlue text-[0.80em] md:text-[0.9em] lg:text-[1em]"
      >
        {props.description}
      </p>

      <div
        id="product-price"
        className="my-6 flex flex-row md:flex-col justify-between"
      >
        <div className="flex flex-row gap-5 items-center">
          <h2 className="font-bold text-[1.75em]">{finalPrice}</h2>
          <div
            id="product-discount"
            className="w-[52px] py-[0.1em] flex justify-center bg-paleOrange rounded-md"
          >
            <p className="font-bold text-orange">{props.discount}%</p>
          </div>
        </div>

        <div className="flex items-center font-bold line-through text-darkGrayishBlue">
          {formatedOriginalPrice}
        </div>
      </div>
    </div>
  );
}
