import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Image from "next/image";
import { CartItemDetails, ProductItemDetails } from "../Product/types";

function EmptyCart() {
  return (
    <div className="h-full w-full flex justify-center items-center py-24">
      <h3 className="text-darkGrayishBlue">Your cart is empty.</h3>
    </div>
  );
}

function CartItem(props: CartItemDetails) {
  const [cart, setCart] = useContext(CartContext);
  const totalCost = props.discountedPrice * props.quantity;
  const finalPrice = `$${totalCost.toFixed(2)}`;

  const handleCartItemRemoval = () => {
    let newCart = { ...cart };
    delete newCart[props.name];
    setCart(newCart);
  };

  return (
    <div className="w-full flex flex-row gap-2 justify-between items-center font-medium">
      <div className="flex flex-row gap-2">
        <div>Image</div>
        <div className="flex flex-col text-darkGrayishBlue">
          <h3>{props.name}</h3>
          <div className="flex flex-row gap-2">
            <p>Price x {props.quantity}</p>
            <p className="text-black font-bold">{finalPrice}</p>
          </div>
        </div>
      </div>
      <div className="h-[16px]">
        <button onClick={handleCartItemRemoval}>
          <Image
            src={"/images/icon-delete.svg"}
            alt={`Remove ${props.name} from cart`}
            width={14}
            height={16}
          />
        </button>
      </div>
    </div>
  );
}

function NonEmptyCart() {
  const [cart, setCart] = useContext(CartContext);

  return (
    <div className="h-full w-full flex flex-col gap-3 justify-center items-center px-6 py-6">
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
      <button className="w-full h-12 my-2 rounded-lg text-white text-sm bg-orange">
        <h3>Checkout</h3>
      </button>
    </div>
  );
}

export default function ShoppingCart(props: { status: boolean }) {
  const [cart, setCart] = useContext(CartContext);

  return (
    <div
      className={`w-full sm:w-[350px] h-full bg-white rounded-lg
      ${props.status ? "visible" : "invisible"}`}
    >
      <div className="h-full flex flex-col font-bold text-sm rounded-lg shadow-2xl z-10">
        <div className="w-full flex items-center border-b border-lightGray py-5 px-4">
          <h3>Cart</h3>
        </div>
        {Object.keys(cart).length === 0 ? <EmptyCart /> : <NonEmptyCart />}
      </div>
    </div>
  );
}
