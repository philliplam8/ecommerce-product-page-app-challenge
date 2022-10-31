import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Link from "next/link";
import Image from "next/image";
import { NavLink, styles } from "./";
import { ShoppingCart } from "../ShoppingCart";

export default function Nav() {
  const [cart, setCart] = useContext(CartContext);
  const [showShoppingCart, setShowShoppingCart] = useState(false);
  const handleCartClick = () => {
    setShowShoppingCart(!showShoppingCart);
  };

  return (
    <div className="sticky top-0 flex flex-col z-20 bg-white">
      <nav className="h-16 md:h-24 flex justify-between items-center border-b border-lightGray text-darkGrayishBlue">
        <div className="h-full flex flex-row gap-4 md:gap-12">
          <div className="flex md:hidden h-full w-[16px] items-center">
            <button>
              <Image
                src="/images/icon-menu.svg"
                alt="hamburger menu"
                width={16}
                height={15}
              />
            </button>
          </div>
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
          <ul className="h-full hidden md:flex flex-row gap-8 items-center">
            <NavLink link="/" label="Collections" />
            <NavLink link="/" label="Men" />
            <NavLink link="/" label="Women" />
            <NavLink link="/" label="About" />
            <NavLink link="/" label="Contact" />
          </ul>
        </div>

        <div id="shopping-avatar" className="flex flex-row gap-10 items-center">
          <div className="flex items-center">
            {Object.keys(cart).length > 0 && (
              <div className="absolute mb-4 ml-2.5 px-[7px] py-[0.75px]  bg-orange text-white text-[0.5em] rounded-xl z-30">
                3
              </div>
            )}

            <div className="h-[20px] w-[22px]">
              <button onClick={handleCartClick}>
                <Image
                  src={"/images/icon-cart.svg"}
                  alt={"View Shopping Cart"}
                  width={22}
                  height={20}
                  className={`${
                    showShoppingCart ? styles.filterActive : styles.filter
                  }`}
                />
              </button>
            </div>
          </div>

          <button
            className={
              "hover:border-orange border-transparent border-2 rounded-[30px]"
            }
          >
            <Image
              src={"/images/image-avatar.png"}
              alt={"Avatar Image"}
              width={50}
              height={50}
            />
          </button>
        </div>
      </nav>
      <div className="absolute top-20 right-[-40px]">
        <ShoppingCart status={showShoppingCart} />
      </div>
    </div>
  );
}
