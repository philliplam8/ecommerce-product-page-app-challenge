import { useEffect } from "react";

const themeOptions = ["Light Mode", "Dark Mode", "Use System Preferences"];

export default function DarkMenu(props: { status: boolean }): JSX.Element {
  /**
   * A Theme Mode option for the user. The user can switch between using
   * Light Mode, Dark mode, or using their system preferences.
   * @param props The specified theme mode
   * @returns A clickable formated menu option element
   */
  function Option(props: { label: string }): JSX.Element {
    return (
      <button
        className="text-left text-sm font-bold border-b-2 border-white hover:border-orange dark:hover:border-orange light:hover:text-black dark:border-veryDarkBlue dark:hover:text-white"
        aria-label={props.label}
        onClick={() => handleOptionClick(props.label)}
      >
        {props.label}
      </button>
    );
  }

  /**
   * A list of Theme Mode options for the user. The user can switch between
   * using Light Mode, Dark mode, or using their system preferences.
   * @returns A clickable formated menu element
   */
  function Options(): JSX.Element {
    return (
      <div className="flex flex-col gap-6 py-2">
        {themeOptions.map((themeOption) => {
          return <Option key={themeOption} label={themeOption} />;
        })}
      </div>
    );
  }

  /**
   * Uodate the localStorage theme variable when the user clicks on a theme option item
   * menu item.
   * @param option The specified theme option: Light Mode, Dark Mode, System Preferences
   */
  const handleOptionClick = (option: string): void => {
    // Since we are using NextJS, check if we can access the client side before manipulating localStorage
    if (typeof window === "undefined") {
      return;
    } else {
      switch (option) {
        // Use chooses Light Mode
        case "Light Mode":
          window.localStorage.theme = "light";
          return;
        // User chooses Dark Mode
        case "Dark Mode":
          window.localStorage.theme = "dark";
          return;
        // User chooses Systtem Preferences
        default:
          window.localStorage.removeItem("theme");
          return;
      }
    }
  };

  useEffect(() => {
    // Since we are using NextJS, check if we can access the client side before manipulating localStorage
    if (typeof window !== "undefined") {
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  });

  return (
    <div
      id="theme-menu"
      className="w-full md:w-[120px] absolute top-20 right-0 md:px-0 px-2 sm:px-8 md:mr-2"
    >
      <div
        className={`h-full w-full flex-col font-bold text-sm shadow-2xl z-10 dark:bg-veryDarkBlue bg-white rounded-lg ${
          props.status ? "flex" : "hidden"
        }`}
      >
        <div className="w-full flex items-center border-b border-lightGray py-5 px-4">
          <h3>Theme</h3>
        </div>
        <div className="py-5 px-4">
          <Options />
        </div>
      </div>
    </div>
  );
}
