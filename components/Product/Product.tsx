import Image from "next/image";
import { ProductDetails, styles } from "./";
import { ProductItem } from "./types";
import { Carousel } from "../Carousel";

export default function Product(props: ProductItem) {
  return (
    <div className="flex flex-col md:flex-row gap-10 justify-center mx-auto py-10">
      <Carousel />

      <div className="w-full md:w-1/2 flex flex-col">
        <ProductDetails
          company={props.company}
          name={props.name}
          description={props.description}
          originalPrice={props.originalPrice}
          discount={props.discount}
        />

        <div id="controls" className="flex flex-row">
          <div
            id="quantity"
            className="flex flex-row items-center justify-center"
          >
            <button>-</button>
            <div>Number</div>
            <button>+</button>
          </div>
          <button
            id="add"
            className="flex justify-center items-center gap-4 w-60 h-12 bg-orange rounded-lg text-white text-sm font-bold"
          >
            <Image
              src={"/images/icon-cart.svg"}
              alt={"Add to Shopping Cart"}
              width={22}
              height={20}
              className={styles.shoppingCart}
            />
            <h3>Add to cart</h3>
          </button>
        </div>
      </div>
    </div>
  );
}
