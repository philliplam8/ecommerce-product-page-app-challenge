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
        "h-full flex items-center text-large font-bold md:font-light md:text-sm border-b-4 border-white hover:border-orange hover:text-black"
      }
    >
      {props.label}
    </Link>
  );
}
