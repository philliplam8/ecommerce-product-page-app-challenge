import Link from "next/link";

interface NavItem {
  link: string;
  label: string;
}

export default function NavLink(props: NavItem): JSX.Element {
  return (
    <Link
      href={props.link}
      className={
        "h-full flex items-center text-lg font-bold md:font-light md:text-sm border-b-4 border-white hover:border-orange hover:text-black dark:border-black dark:hover:text-white"
      }
    >
      {props.label}
    </Link>
  );
}
