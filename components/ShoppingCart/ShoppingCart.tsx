import Image from "next/image";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CartItemDetails } from "../Product/types";
import { TrashButton } from "../Buttons";

function EmptyCart(): JSX.Element {
  return (
    <div className="h-full w-full flex justify-center items-center py-24">
      <h3 className="text-darkGrayishBlue dark:text-lightGray">
        Your cart is empty.
      </h3>
    </div>
  );
}

function CartItem(props: CartItemDetails): JSX.Element {
  const [cart, setCart] = useContext(CartContext);

  // Format discounted price
  const discountedPrice: string = `$${props.discountedPrice.toFixed(2)}`;

  // Calculate the final price cost after the discount and format string with decimals
  const totalCost: number = props.discountedPrice * props.quantity;
  const finalPrice: string = `$${totalCost.toFixed(2)}`;

  /**
   * Remove product item from the shopping cart
   */
  const handleCartItemRemoval = (): void => {
    let newCart = { ...cart };
    delete newCart[props.name];
    setCart(newCart);
  };

  return (
    <div className="w-full flex flex-row gap-2 justify-between items-center font-medium">
      <div className="flex flex-row gap-2">
        <div>
          <Image
            src={props.image}
            width={50}
            height={50}
            alt={"Product Image Thumbnail"}
            className="rounded-[4px]"
          />
        </div>
        <div className="flex flex-col text-darkGrayishBlue dark:text-lightGray">
          <h3>{props.name}</h3>
          <div className="flex flex-row gap-2">
            <p>
              {discountedPrice} x {props.quantity}
            </p>
            <p className="text-black dark:text-white font-bold">{finalPrice}</p>
          </div>
        </div>
      </div>
      <TrashButton
        itemToRemove={props.name}
        handleCartItemRemoval={handleCartItemRemoval}
      />
    </div>
  );
}

function NonEmptyCart(): JSX.Element {
  const [cart, setCart] = useContext(CartContext);

  return (
    <div className="h-full w-full flex flex-col gap-4 justify-center items-center px-6 py-6">
      {Object.keys(cart).map((item) => (
        <CartItem
          image={cart[item].image}
          key={cart[item].name}
          name={cart[item].name}
          originalPrice={cart[item].originalPrice}
          discount={cart[item].discount}
          quantity={cart[item].quantity}
          discountedPrice={cart[item].discountedPrice}
        />
      ))}
      <button className="w-full h-14 my-2 rounded-lg text-white text-sm bg-orange hover:bg-orange/[.7] hover:drop-shadow-[0_10px_10px_rgb(255,126,27,0.7)]">
        <h3>Checkout</h3>
      </button>
    </div>
  );
}

export default function ShoppingCart(props: { status: boolean }): JSX.Element {
  const [cart, setCart] = useContext(CartContext);

  return (
    <div
      id="shopping-cart"
      className="w-full md:w-[350px] absolute top-20 right-0 md:px-0 px-2 sm:px-8 md:mr-2"
    >
      <div
        className={`h-full w-full flex-col font-bold text-sm shadow-2xl z-10 dark:bg-veryDarkBlue bg-white rounded-lg ${
          props.status ? "flex" : "hidden"
        }`}
      >
        <div className="w-full flex items-center border-b border-lightGray py-5 px-4">
          <h3>Cart</h3>
        </div>
        {Object.keys(cart).length === 0 ? <EmptyCart /> : <NonEmptyCart />}
      </div>
    </div>
  );
}
