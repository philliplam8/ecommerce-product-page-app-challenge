import Image from "next/image";
import { MouseEventHandler } from "react";
import Footer from "../Footer/Footer";
import { NavLink, navLabels } from "./";

export default function Hamburger(props: {
  onButtonClick: MouseEventHandler<HTMLButtonElement> | undefined;
  onDivClick: MouseEventHandler<HTMLDivElement> | undefined;
  showMenu: boolean;
}) {
  return (
    <div className="md:hidden bg-white z-40">
      <button onClick={props.onButtonClick}>
        <Image
          src="/images/icon-menu.svg"
          alt="Open hamburger menu"
          width={16}
          height={15}
        />
      </button>

      <div
        id="menu-backdrop"
        className={`w-screen min-h-screen h-full absolute top-0 left-0 bg-veryDarkBlue/[.9] z-40 ${
          props.showMenu ? "fixed" : "hidden"
        }`}
        onClick={props.onDivClick}
      ></div>

      <div
        className={`w-[300px] min-h-screen absolute top-0 left-0 flex flex-col justify-between px-8 py-6 bg-white z-50 ease-in-out duration-300 ${
          props.showMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-12">
          <button className="w-[16px]" onClick={props.onButtonClick}>
            <Image
              src="/images/icon-close.svg"
              alt="Close hamburger menu"
              width={16}
              height={15}
            />
          </button>
          <div className="flex flex-col gap-6" onClick={props.onDivClick}>
            {navLabels.map((item) => {
              return <NavLink key={item} link="/" label={item} />;
            })}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
