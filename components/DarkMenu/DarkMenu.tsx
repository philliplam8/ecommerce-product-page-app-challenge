import { useState, useEffect } from "react";
import {
  SunIcon,
  MoonIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";

const THEME_OPTIONS = ["Light Mode", "Dark Mode", "Use System Preferences"];

export default function DarkMenu(props: {
  handleClick: () => void;
  status: any;
}): JSX.Element {
  const [currentTheme, setCurrentTheme] = useState(THEME_OPTIONS[2]);

  function OptionIcon(props: { option: string }) {
    switch (props.option) {
      case THEME_OPTIONS[0]:
        return <SunIcon />;
      case THEME_OPTIONS[1]:
        return <MoonIcon />;
      default:
        return <ComputerDesktopIcon />;
    }
  }

  /**
   * A Theme Mode option for the user. The user can switch between using
   * Light Mode, Dark mode, or using their system preferences.
   * @param props The specified theme mode
   * @returns A clickable formated menu option element
   */
  function Option(props: { label: string }): JSX.Element {
    return (
      <button
        className="text-left text-sm font-bold  light:hover:text-black dark:hover:text-white "
        aria-label={props.label}
        onClick={() => handleOptionClick(props.label)}
      >
        <div className="flex flex-row gap-2 justify-start items-center">
          <div
            id="option-icon"
            className={`h-5 w-5 ${
              props.label === currentTheme ? "text-orange" : ""
            }`}
          >
            <OptionIcon option={props.label} />
          </div>
          <h3
            id="option-label"
            className={`w-full border-b-2 border-white dark:border-veryDarkBlue hover:border-orange dark:hover:border-orange ${
              props.label === currentTheme ? "text-orange" : ""
            }`}
          >
            {props.label}
          </h3>
        </div>
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
        {THEME_OPTIONS.map((themeOption) => {
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
      props.handleClick();
      switch (option) {
        // Use chooses Light Mode
        case "Light Mode":
          window.localStorage.theme = "light";
          setCurrentTheme(THEME_OPTIONS[0]);
          return;
        // User chooses Dark Mode
        case "Dark Mode":
          window.localStorage.theme = "dark";
          setCurrentTheme(THEME_OPTIONS[1]);
          return;
        // User chooses System Preferences
        default:
          window.localStorage.removeItem("theme");
          setCurrentTheme(THEME_OPTIONS[2]);
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
  }, [currentTheme]);

  return (
    <div
      id="theme-menu"
      className="w-full md:w-[230px] absolute top-20 right-0 md:px-0 px-2 sm:px-8 md:mr-2"
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
