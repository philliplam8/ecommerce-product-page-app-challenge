import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLink";

export default function Nav() {
  return (
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
          <Image
            src={"/images/icon-cart.svg"}
            alt={"Shopping Cart"}
            width={22}
            height={20}
          />
        </div>
        <Image
          src={"/images/image-avatar.png"}
          alt={"Avatar Image"}
          width={50}
          height={50}
        />
      </div>
    </nav>
  );
}
