import { useState } from "react";
import Image from "next/image";
import { CloseButton } from "../Buttons";

type DrawerProps = {
  direction: string;
  children: React.ReactNode;
};

export default function Drawer({
  direction,
  children,
}: DrawerProps): JSX.Element {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenuClick = (): void => {
    setShowMenu(!showMenu);
  };

  const translate = () => {
    const leftMenu = {
      open: "translate-x-0",
      close: "-translate-x-full",
    };

    const rightMenu = {
      open: "translate-x-0",
      close: "-translate-x-full",
    };

    if (direction === "left") {
      return leftMenu;
    } else {
      return rightMenu;
    }
  };

  return (
    <>
      <button onClick={handleMenuClick}>
        <Image
          src="/images/icon-menu.svg"
          alt="Open hamburger menu"
          width={16}
          height={15}
          className={"hover:invert dark:hover:brightness-0"}
        />
      </button>

      <div
        id="menu-backdrop"
        className={`min-w-screen w-screen min-h-screen h-full absolute top-0 bg-veryDarkBlue/[.9] z-40 ${
          showMenu ? "fixed" : "hidden"
        } ${direction === "left" ? "left-0" : "left-0"}`}
        onClick={handleMenuClick}
      ></div>

      <div
        className={`w-[300px] min-h-screen h-full absolute top-0 px-8 py-6 bg-white dark:bg-black z-50 ease-in-out duration-300 
        ${direction === "left" ? "left-0" : "right-0"}
        ${showMenu ? translate().open : translate().close}
        `}
      >
        <div className={showMenu ? "h-full flex flex-col gap-12" : "hidden"}>
          <div
            id="container-close-btn"
            className={`flex flex-row ${
              direction === "left" ? "justify-start" : "justify-end"
            }`}
          >
            <CloseButton handleClose={handleMenuClick} />
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
