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

        <div id="controls" className="flex flex-col sm:flex-row gap-3">
          <div
            id="quantity"
            className="h-12 flex flex-row items-center justify-between rounded-lg bg-lightGrayishBlue"
          >
            <button className="p-4" onClick={handleDecrement}>
              <Image
                src={"/images/icon-minus.svg"}
                alt={"Decrement quantity"}
                width={10}
                height={4}
              />
            </button>
            <div className="px-4">
              <p className="text-sm font-bold">{quantity}</p>
            </div>
            <button className="p-4" onClick={handleIncrement}>
              <Image
                src={"/images/icon-plus.svg"}
                alt={"Increment quantity"}
                width={10}
                height={10}
              />
            </button>
          </div>

          <button
            id="addCart"
            className="w-full sm:w-60 h-12 flex justify-center items-center gap-4 bg-orange rounded-lg text-white text-sm font-bold"
            onClick={handleAddShoppingCart}
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
