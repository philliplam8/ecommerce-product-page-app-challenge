import { ProductItem } from "./types";

export default function ProductDetails(props: ProductItem) {
  const formatedOriginalPrice = `$${props.originalPrice}.00`;
  const formatedDiscountPrice = `$${
    (props.originalPrice * props.discount) / 100
  }.00`;

  return (
    <div id="product-details" className="w-full flex flex-col justify-center">
      <div className="my-6">
        <p className="font-bold text-xs text-orange tracking-widest">
          {props.company.toLocaleUpperCase()}
        </p>
        <h1 className="font-bold text-[1.5em] md:text-[2.5em]">{props.name}</h1>
      </div>

      <p className="text-darkGrayishBlue text-[0.80em] sm:text-[1em]">
        {props.description}
      </p>

      <div
        id="price"
        className="my-6 flex flex-row md:flex-col justify-between"
      >
        <div className="flex flex-row gap-5 items-center">
          <h2 className="font-bold text-[1.75em]">{formatedDiscountPrice}</h2>
          <div className="w-[50px] py-[0.15em] flex justify-center bg-paleOrange rounded-lg">
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
