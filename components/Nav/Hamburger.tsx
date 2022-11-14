import { MouseEventHandler } from "react";
import Footer from "../Footer/Footer";
import { NavLink, navLabels } from "./";
import { Drawer } from "../Drawer";

export default function Hamburger(props: {
  onButtonClick: MouseEventHandler<HTMLButtonElement>;
  onDivClick: MouseEventHandler<HTMLDivElement>;
}): JSX.Element {
  return (
    <div className="md:hidden bg-white dark:bg-black z-40">
      <Drawer direction={"left"}>
        <div className="h-full flex flex-col justify-between">
          <div className="flex flex-col gap-6" onClick={props.onDivClick}>
            {navLabels.map((item) => {
              return <NavLink key={item} link="/" label={item} />;
            })}
          </div>

          <Footer />
        </div>
      </Drawer>
    </div>
  );
}
