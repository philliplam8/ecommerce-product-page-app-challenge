import { NavLink, navLabels } from ".";

export default function NavLinksDesktop(): JSX.Element {
  return (
    <div className="h-full hidden md:flex flex-row md:gap-8 lg:gap-10 items-center bg-white">
      {navLabels.map((item) => {
        return <NavLink key={item} link="/" label={item} />;
      })}
    </div>
  );
}
