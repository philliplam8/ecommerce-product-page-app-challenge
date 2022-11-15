import { MouseEventHandler } from "react";
import Image from "next/image";
import { buttonStyles } from "./";

export function PreviousButton(props: {
  classStyle?: string;
  handleDecrement: MouseEventHandler<HTMLButtonElement>;
}): JSX.Element {
  return (
    <div className={`h-full flex items-center z-10 ${props.classStyle}`}>
      <button
        className={`${buttonStyles.button} h-10 w-10 -mr-5 flex justify-center items-center bg-white rounded-3xl`}
        onClick={props.handleDecrement}
      >
        <Image
          src={"/images/icon-previous.svg"}
          alt={`Previous item`}
          width={9}
          height={9}
          className={buttonStyles.orangeHighlight}
        />
      </button>
    </div>
  );
}

export function NextButton(props: {
  classStyle: string;
  handleIncrement: MouseEventHandler<HTMLButtonElement>;
}): JSX.Element {
  return (
    <div className={`h-full flex items-center z-10 ${props.classStyle}`}>
      <button
        className={`${buttonStyles.button} h-10 w-10 -ml-5 flex justify-center items-center bg-white rounded-3xl`}
        onClick={props.handleIncrement}
      >
        <Image
          src={"/images/icon-next.svg"}
          alt={`Next item`}
          width={10}
          height={9.5}
          className={buttonStyles.orangeHighlight}
        />
      </button>
    </div>
  );
}

export function DecrementButton(props: {
  handleDecrement: MouseEventHandler<HTMLButtonElement>;
}): JSX.Element {
  return (
    <button
      className="w-[44px] h-[44px] flex justify-center items-center"
      onClick={props.handleDecrement}
    >
      <Image
        src={"/images/icon-minus.svg"}
        alt={"Decrement quantity"}
        width={12}
        height={4}
      />
    </button>
  );
}

export function IncrementButton(props: {
  handleIncrement: MouseEventHandler<HTMLButtonElement>;
}): JSX.Element {
  return (
    <button
      className="w-[44px] h-[44px] flex justify-center items-center"
      onClick={props.handleIncrement}
    >
      <Image
        src={"/images/icon-plus.svg"}
        alt={"Increment quantity"}
        width={12}
        height={12}
      />
    </button>
  );
}

export function CloseButton(props: {
  classStyle?: string;
  handleClose: MouseEventHandler<HTMLButtonElement>;
}): JSX.Element {
  return (
    <button className="w-[16px]" onClick={props.handleClose}>
      <Image
        src="/images/icon-close.svg"
        alt="Close button"
        width={16}
        height={15}
        className={`${buttonStyles.orangeHighlight} ${props.classStyle}`}
      />
    </button>
  );
}

export function TrashButton(props: {
  itemToRemove: string;
  handleCartItemRemoval: MouseEventHandler<HTMLButtonElement>;
}): JSX.Element {
  return (
    <button onClick={props.handleCartItemRemoval}>
      <Image
        src={"/images/icon-delete.svg"}
        alt={`Remove ${props.itemToRemove} from cart`}
        width={14}
        height={16}
        className={buttonStyles.orangeHighlight}
      />
    </button>
  );
}

export function ShoppingCartButton(props: {
  showCart: boolean;
  handleCartClick: MouseEventHandler<HTMLButtonElement>;
}): JSX.Element {
  return (
    <button onClick={props.handleCartClick}>
      <Image
        src={"/images/icon-cart.svg"}
        alt={props.showCart ? "Close Shopping Cart" : "Open Shopping Cart"}
        width={22}
        height={20}
        className={`${
          props.showCart
            ? `${buttonStyles.cartActive} dark:brightness-0 dark:invert`
            : buttonStyles.cartInactive
        }`}
      />
    </button>
  );
}
