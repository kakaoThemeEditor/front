import { Outlet } from "react-router-dom";

export const EditorLayout = () => {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <main className="w-full h-full">
        <Outlet />
      </main>
    </div>
  );
};
