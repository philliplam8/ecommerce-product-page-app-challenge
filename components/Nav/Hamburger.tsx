import Image from "next/image";
import { MouseEventHandler } from "react";
import { NavLink } from "./";

export default function Hamburger(props: {
  onClick: MouseEventHandler<HTMLButtonElement>;
  showMenu: any;
}) {
  return (
    <div className="md:hidden bg-white">
      <button onClick={props.onClick}>
        <Image
          src="/images/icon-menu.svg"
          alt="hamburger menu"
          width={16}
          height={15}
        />
      </button>

      <div
        className={`w-screen min-h-screen h-full absolute top-0 left-0 bg-veryDarkBlue/[.9] z-30 ${
          props.showMenu ? "block" : "hidden"
        }`}
      >
        <div className="w-[300px] h-screen bg-white flex flex-col gap-12 px-8 py-6">
          <button onClick={props.onClick}>
            <Image
              src="/images/icon-close.svg"
              alt="hamburger menu"
              width={16}
              height={15}
            />
          </button>
          <div className="flex flex-col gap-6">
            <NavLink link="/" label="Collections" />
            <NavLink link="/" label="Men" />
            <NavLink link="/" label="Women" />
            <NavLink link="/" label="About" />
            <NavLink link="/" label="Contact" />
          </div>
        </div>
      </div>
    </div>
  );
}
