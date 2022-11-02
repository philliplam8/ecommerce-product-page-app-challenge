import { NavLink, navLabels } from ".";

export default function NavLinksDesktop() {
  return (
    <ul className="h-full hidden md:flex flex-row gap-10 items-center bg-white">
      {navLabels.map((item) => {
        return <NavLink key={item} link="/" label={item} />;
      })}
    </ul>
  );
}
