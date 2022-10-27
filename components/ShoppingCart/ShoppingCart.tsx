import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Image from "next/image";

function EmptyCart() {
  return (
    <div className="h-full w-full flex justify-center items-center py-24">
      <h3 className="text-darkGrayishBlue">Your cart is empty.</h3>
    </div>
  );
}

function CartItem(props) {
  return (
    <div className="w-full flex flex-row gap-2 justify-between">
      <div className="flex flex-row gap-2">
        <div>Image</div>
        <div className="flex flex-col">
          <h3>Product Name</h3>
          <p>Price x Quantity Total</p>
        </div>
      </div>
      <div className="h-[16px]">
        <Image
          src={"/images/icon-delete.svg"}
          alt={"Remove from cart"}
          width={14}
          height={16}
        />
      </div>
    </div>
  );
}

function NonEmptyCart() {
  const [cart, setCart] = useContext(CartContext);

  return (
    <div className="h-full w-full flex flex-col gap-3 justify-center items-center px-4 py-6">
      {/* Will map over the cart and return CartItem */}
      <CartItem />
      <button className="w-full h-12 rounded-lg text-white text-sm bg-orange">
        <h3>Checkout</h3>
      </button>
    </div>
  );
}

export default function ShoppingCart(props: { status: boolean }) {
  const [cart, setCart] = useContext(CartContext);

  return (
    <div
      className={`w-full sm:w-[300px] h-full bg-white rounded-lg
      ${props.status ? "visible" : "invisible"}`}
    >
      <div className="h-full flex flex-col font-bold text-sm rounded-lg shadow-2xl z-10">
        <div className="w-full flex items-center border-b border-lightGray py-5 px-4">
          <h3>Cart</h3>
        </div>
        {cart.length === 0 ? <EmptyCart /> : <NonEmptyCart />}
      </div>
    </div>
  );
}
