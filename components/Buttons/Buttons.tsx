import { MouseEventHandler } from "react";
import Image from "next/image";
import { styles } from "./";

export function PreviousButton(props: {
  classStyle?: string;
  handleDecrement: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <div className={`h-full flex items-center z-10 ${props.classStyle}`}>
      <button
        className={`h-10 w-10 -mr-5 flex justify-center items-center bg-white rounded-3xl`}
        onClick={props.handleDecrement}
      >
        <Image
          src={"/images/icon-previous.svg"}
          alt={`Previous item`}
          width={9}
          height={9}
          className={styles.arrowButton}
        />
      </button>
    </div>
  );
}

export function NextButton(props: {
  classStyle: string;
  handleIncrement: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <div className={`h-full flex items-center z-10 ${props.classStyle}`}>
      <button
        className="h-10 w-10 -ml-5 flex justify-center items-center bg-white rounded-3xl"
        onClick={props.handleIncrement}
      >
        <Image
          src={"/images/icon-next.svg"}
          alt={`Next item`}
          width={10}
          height={9.5}
          className={styles.arrowButton}
        />
      </button>
    </div>
  );
}
