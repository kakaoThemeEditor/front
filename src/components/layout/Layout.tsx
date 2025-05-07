import { Outlet } from "react-router-dom";
import { AppSidebar } from "./SideBar";
import { Header } from "./Header";
import { useEditorStore } from "@/store/editorStore";
import { useQuery } from "@tanstack/react-query";
import { APIClient } from "@/api/ApiHandler";
import { useEffect } from "react";

export const Layout = () => {
  const { setCurrentThemeId, setThemeList } = useEditorStore();
  // theme List 받아오기
  const {
    data: themeList,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["themeList"],
    queryFn: () => APIClient.get("/theme/loadList"),
    staleTime: 0, // 항상 서버에서 새로 가져오게 함
    refetchOnWindowFocus: true, // 창에 포커스 될 때 재요청
    refetchOnMount: true, // 컴포넌트가 마운트될 때 다시 요청
  });

  useEffect(() => {
    if (themeList?.data.length) {
      setCurrentThemeId(themeList.data[0].themeId);
      setThemeList(themeList.data);
    }
  }, [themeList]); // themeList가 변경될 때마다 실행

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
