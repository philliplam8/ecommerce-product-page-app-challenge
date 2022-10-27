import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLink";
import { ShoppingCart } from "../ShoppingCart";

export default function Nav() {
  const [showShoppingCart, setShowShoppingCart] = useState(false);
  const handleCartClick = () => {
    setShowShoppingCart(!showShoppingCart);
  };

  return (
    <div className="flex flex-col relative">
      <nav className="h-28 flex justify-between items-center border-b border-lightGray text-darkGrayishBlue">
        <div className="h-full flex flex-row gap-14">
          <Link href={"/"}>
            <div className="w-[138px] h-full flex items-center border-b-4 border-white">
              <Image
                src={"/images/logo.svg"}
                alt={"Sneakers Logo"}
                width={138}
                height={20}
              />
            </div>
          </Link>
          <ul className="h-full flex flex-row gap-8 items-center">
            <NavLink link="/" label="Collections" />
            <NavLink link="/" label="Men" />
            <NavLink link="/" label="Women" />
            <NavLink link="/" label="About" />
            <NavLink link="/" label="Contact" />
          </ul>
        </div>

        <div className="flex flex-row gap-10 items-center">
          <div className="h-[20px] w-[22px]">
            <button onClick={handleCartClick}>
              <Image
                src={"/images/icon-cart.svg"}
                alt={"Shopping Cart"}
                width={22}
                height={20}
              />
            </button>
          </div>
          <Image
            src={"/images/image-avatar.png"}
            alt={"Avatar Image"}
            width={50}
            height={50}
          />
        </div>
      </nav>
      <div className="absolute top-24 right-0">
        <ShoppingCart status={showShoppingCart} />
      </div>
    </div>
  );
}
