import { FaRegSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

export const Header = ({theme, themeHandler}) => {

  return (
    <div className="flex w-full px-4 justify-between items-center font-bold font-spaceMono">
      <h1 className="text-2xl">DevDetective</h1>
      <button onClick={themeHandler} className="flex gap-4 uppercase tracking-[2px]">
          <div className="flex items-center justify-center gap-4">
            {theme == "light" ? <p>Dark</p> : <p>Light</p>}{" "}
          {theme === "light" ? <FaMoon /> : <FaRegSun />}
          </div>
      </button>
    </div>
  );
};
