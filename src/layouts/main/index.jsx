import { Outlet } from "react-router-dom";
import SideBar from "./sidebar";

const MainLayout = () => {
  return (
    <div className="w-[1265px] mx-auto flex">
      <SideBar />
      <main className="flex-1 border-x border-[#2f3336]">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
