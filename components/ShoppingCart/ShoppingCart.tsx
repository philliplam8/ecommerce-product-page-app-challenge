import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function EmptyCart() {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <h3 className="text-darkGrayishBlue">Your cart is empty.</h3>
    </div>
  );
}

export default function ShoppingCart(props: { status: boolean }) {
  const [cart, setCart] = useContext(CartContext);

  return (
    <div
      className={`w-full sm:w-[250px] h-[200px] bg-white
      ${props.status ? "visible" : "invisible"}`}
    >
      <div className="h-full flex flex-col font-bold text-sm rounded-lg shadow-2xl z-10">
        <div className="w-full flex items-center border-b border-lightGray py-5 px-4">
          <h3>Cart</h3>
        </div>
        {!cart ? <EmptyCart /> : <EmptyCart />}
      </div>
    </div>
  );
}
