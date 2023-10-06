import classNames from "classnames";
import { createElement } from "react";

const Button = ({ size, children }) => {
  return createElement(
    "button",
    {
      className: classNames(
        "bg-[#1d9bf0] mt-2 rounded-full flex items-center justify-center font-bold transition-colors hover:bg-[#1a8cd8]",
        {
          "px-5 py-2": size === "md",
        },
        {
          "w-full text-lg py-3": size === "lg",
        }
      ),
    },
    children
  );
};

Button.defaultProps = {
  size: "md",
};

export default Button;
