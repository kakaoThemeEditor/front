import { Outlet } from "react-router-dom";
import { AppSidebar } from "./SideBar";
import { Header } from "./Header";

export const Layout = () => {
  return (
    //  높이 h-screen으로 고정
    <div className="flex min-h-screen xl:h-screen w-screen">
      <AppSidebar />
      <main className="flex-1 h-full w-full ">
        <Header />
        <Outlet />
      </main>
    </div>
  );
};
