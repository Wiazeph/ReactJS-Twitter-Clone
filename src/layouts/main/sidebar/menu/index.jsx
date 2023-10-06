import { NavLink } from "react-router-dom";
import classNames from "classnames";
import mainMenu from "~/utils/consts";
import More from "./more";
import New from "./new";

const Menu = () => {
  return (
    <nav>
      {mainMenu.map((menu, index) => (
        <NavLink key={index} to={menu.link} className="group block">
          {({ isActive }) => (
            <div
              className={classNames(
                "p-3 inline-flex items-center gap-5 rounded-full menuGroupHover",
                {
                  "font-bold": isActive,
                }
              )}
            >
              <div className="w-[26.25px] h-[26.25px] relative">
                {menu.notification && (
                  <span className="w-[18px] h-[18px] rounded-full absolute bg-[#1d9bf0] -top-1.5 -right-1 flex items-center justify-center text-[11px]">
                    {menu.notification}
                  </span>
                )}
                {!isActive && menu.icon.passive}
                {isActive && menu.icon.active}
              </div>
              <div className="text-xl mr-4">{menu.title}</div>
            </div>
          )}
        </NavLink>
      ))}

      <More />

      <New />
    </nav>
  );
};

export default Menu;
