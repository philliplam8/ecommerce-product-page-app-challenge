import Link from "next/link";

interface NavItem {
  link: string;
  label: string;
}

export default function NavLink(props: NavItem) {
  return (
    <Link
      href={props.link}
      className={
        "h-full flex hover:m-0 items-center border-b-4 border-white hover:border-orange hover:text-black"
      }
    >
      {props.label}
    </Link>
  );
}
