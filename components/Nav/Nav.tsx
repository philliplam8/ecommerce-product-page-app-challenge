import { useState, useContext, useMemo } from "react";
import { CartContext } from "../../context/CartContext";
import Link from "next/link";
import Image from "next/image";
import { NavLinksDesktop, styles, Hamburger, Avatar } from "./";
import { ShoppingCart } from "../ShoppingCart";

export default function Nav() {
  const [cart, setCart] = useContext(CartContext);
  const [showMenu, setShowMenu] = useState(false);
  const [showCart, setshowCart] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const handleCartClick = () => {
    setshowCart(!showCart);
  };

  const cartAmount = useMemo(() => {
    let amount = 0;
    Object.values(cart).forEach((item: any) => {
      amount += item.quantity;
    });
    return amount;
  }, [cart]);

  return (
    <div className="sticky top-0 flex flex-col z-20 bg-white">
      <nav className="h-16 md:h-24 flex justify-between items-center border-b border-lightGray text-darkGrayishBlue mx-8">
        <div className="h-full flex flex-row gap-4 items-center md:gap-12">
          <Hamburger
            showMenu={showMenu}
            onButtonClick={handleMenuClick}
            onDivClick={handleMenuClick}
          />
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
          <NavLinksDesktop />
        </div>

        <div
          id="shopping-avatar"
          className="flex flex-row gap-5 md:gap-10 items-center"
        >
          <div id="cart-button" className="flex items-center">
            {Object.keys(cart).length > 0 && (
              <div
                id="cart-badge"
                className="absolute mb-4 ml-2.5 px-[7px] py-[0.75px]  bg-orange text-white text-[0.5em] rounded-xl z-30"
              >
                {cartAmount}
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
                    showCart ? styles.filterActive : styles.filter
                  }`}
                />
              </button>
            </div>
          </div>
          <Avatar />
        </div>
      </nav>

      <ShoppingCart status={showCart} />
    </div>
  );
}
