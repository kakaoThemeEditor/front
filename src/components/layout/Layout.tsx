import { Outlet } from "react-router-dom";
import { AppSidebar } from "./SideBar";
import { Header } from "./Header";

export const Layout = () => {
  return (
    <div className="flex min-h-screen w-screen">
      <AppSidebar />
      <main className="flex-1 overflow-auto w-full">
        <Header />
        <Outlet />
      </main>
    </div>
  );
};
