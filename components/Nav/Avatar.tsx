import Image from "next/image";

export default function Avatar(): JSX.Element {
  return (
    <div className="h-[35px] w-[35px] md:h-[50px] md:w-[50px]">
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
  );
}
