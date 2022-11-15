import { useState, useContext, useMemo } from "react";
import { NavContext } from "../../context/NavContext";
import Link from "next/link";
import Image from "next/image";
import { NavLinksDesktop, Hamburger, Avatar } from "./";
import { ShoppingCart } from "../ShoppingCart";
import { ShoppingCartButton } from "../Buttons/Buttons";
import { DarkMenu } from "../DarkMenu";

export default function Nav(): JSX.Element {
  const { cartValue } = useContext(NavContext);
  const [cart, setCart] = cartValue;
  const [showCart, setshowCart] = useState(false);
  const [showDarkMenu, setShowDarkMenu] = useState(false);

  const handleCartClick = (): void => {
    setShowDarkMenu(false);
    setshowCart(!showCart);
  };

  const handleAvatarClick = (): void => {
    setshowCart(false);
    setShowDarkMenu(!showDarkMenu);
  };

  const cartAmount: number = useMemo(() => {
    let amount = 0;
    Object.values(cart).forEach((item: any) => {
      amount += item.quantity;
    });
    return amount;
  }, [cart]);

  return (
    <div className="max-w-[1180px] m-auto sticky top-0 flex flex-col z-20 bg-white dark:bg-black">
      <nav className="h-16 md:h-24 flex justify-between items-center border-b border-lightGray text-darkGrayishBlue dark:text-lightGrayishBlue px-8 mx-0 md:px-0 md:mx-8">
        <div className="h-full flex flex-row gap-4 items-center md:gap-14">
          <Hamburger />
          <Link href={"/"}>
            <div
              className={`w-[138px] h-full flex items-center border-b-4 border-white dark:border-black`}
            >
              <Image
                src={"/images/logo.svg"}
                alt={"Sneakers Logo"}
                width={138}
                height={20}
                className={"dark:invert"}
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
                className="absolute mb-4 ml-2.5 px-[7px] py-[0.75px] bg-orange text-white text-[0.5em] rounded-xl z-30"
              >
                {cartAmount}
              </div>
            )}

            <ShoppingCartButton
              showCart={showCart}
              handleCartClick={handleCartClick}
            />
            <ShoppingCart status={showCart} />
          </div>
          <Avatar onButtonClick={handleAvatarClick} />
          <DarkMenu status={showDarkMenu} handleClick={handleAvatarClick} />
        </div>
      </nav>
    </div>
  );
}
