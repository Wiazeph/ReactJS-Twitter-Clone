import Logo from "./logo";
import Menu from "./menu";

const SideBar = () => {
  return (
    <aside className="w-[275px] h-screen px-2">
      <Logo />
      <Menu />
    </aside>
  );
};

export default SideBar;
