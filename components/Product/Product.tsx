import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Image from "next/image";
import { ProductDetails, styles } from "./";
import { CartItemDetails, ProductItemDetails } from "./types";
import { Carousel } from "../Carousel";

export default function Product(props: ProductItemDetails) {
  const [quantity, setQuantity] = useState(0);
  const [cart, setCart] = useContext(CartContext);

  const resetQuantity = () => {
    setQuantity(0);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddShoppingCart = () => {
    if (quantity > 0) {
      const newCartItem: CartItemDetails = {
        name: props.name,
        originalPrice: props.originalPrice,
        discount: props.discount,
        quantity: quantity,
        discountedPrice: props.discountedPrice,
      };

      let newCart = { ...cart };
      if (props.name in newCart) {
        newCart[props.name].quantity += quantity;
      } else {
        newCart[props.name] = newCartItem;
      }

      setCart(newCart);

      // After adding to cart, reset the quantity in the control display and state
      resetQuantity();
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-around py-0 md:py-12 lg:py-24">
      <Carousel />

      <div className="w-full md:w-[520px] flex flex-col px-12 md:px-6">
        <ProductDetails
          company={props.company}
          name={props.name}
          description={props.description}
          originalPrice={props.originalPrice}
          discount={props.discount}
          discountedPrice={props.discountedPrice}
        />

        <div id="controls" className="flex flex-col sm:flex-row gap-4">
          <div
            id="quantity"
            className="h-14 flex flex-row items-center justify-between rounded-lg bg-lightGrayishBlue"
          >
            <button
              className="w-[44px] h-[44px] flex justify-center items-center"
              onClick={handleDecrement}
            >
              <Image
                src={"/images/icon-minus.svg"}
                alt={"Decrement quantity"}
                width={12}
                height={4}
              />
            </button>

            <div className="px-[1.88em]">
              <p className="text-[1em] font-bold">{quantity}</p>
            </div>

            <button
              className="w-[44px] h-[44px] flex justify-center items-center"
              onClick={handleIncrement}
            >
              <Image
                src={"/images/icon-plus.svg"}
                alt={"Increment quantity"}
                width={12}
                height={12}
              />
            </button>
          </div>

          <button
            id="addCart"
            className="w-full sm:max-w-[19.4em] h-14 flex justify-center items-center gap-4 bg-orange rounded-lg text-white text-sm font-bold hover:bg-orange/[.7] hover:drop-shadow-[0_10px_10px_rgb(255,126,27,0.7)]"
            onClick={handleAddShoppingCart}
          >
            <Image
              src={"/images/icon-cart.svg"}
              alt={"Add to Shopping Cart"}
              width={18}
              height={18}
              className={styles.shoppingCart}
            />
            <h3>Add to cart</h3>
          </button>
        </div>
      </div>
    </div>
  );
}
