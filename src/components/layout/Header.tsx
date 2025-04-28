import { SidebarTrigger } from "@/components/ui/sidebar";
import { useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const getPageTitle = (path: string) => {
  const pathSegments = path.split("/").filter(Boolean);
  const currentPage = pathSegments[pathSegments.length - 1];
  const parentPage = pathSegments[pathSegments.length - 2];

  const getParentTitle = (parent: string) => {
    switch (parent) {
      case "order":
        return "주문/결제";
      case "auth":
        return "내 계정";
      case "product":
        return "상품";
      case "template":
        return "나의 카카오톡 테마";
      case "editor":
        return "카카오톡 테마 편집";
      default:
        return "";
    }
  };

  const getCurrentTitle = (current: string) => {
    switch (current) {
      // 주문/결제
      case "history":
        return "주문 내역";
      case "payment":
        return "결제 정보";
      // 내 계정
      case "profile":
        return "프로필";
      case "change-password":
        return "비밀번호 변경";
      // 상품
      case "store":
        return "스토어";
      case "wishlist":
        return "찜 목록";
      case "cart":
        return "장바구니";
      // 나의 카카오톡 테마
      case "my-purchased":
        return "구매한 테마";
      case "my-creations":
        return "제작한 테마";
      // 카카오톡 테마 편집
      case "kakao":
        return "카카오톡 테마 편집";
      case "image":
        return "이미지 편집";
      case "preview":
        return "미리보기";
      case "notification":
        return "알림";
      case "settings":
        return "앱 설정";
      default:
        return "홈";
    }
  };

  const parentTitle = getParentTitle(parentPage);
  const currentTitle = getCurrentTitle(currentPage);

  return { parentTitle, currentTitle };
};

export const Header = () => {
  const location = useLocation();
  const { parentTitle, currentTitle } = getPageTitle(location.pathname);

  return (
    <div className="flex items-center px-4 py-2 border-b border-gray-300">
      <div className="flex md:hidden">
        <SidebarTrigger />
        <span className="px-2">|</span>
      </div>
      <div className="flex items-center text-lg font-semibold">
        {parentTitle && (
          <>
            <span>{parentTitle}</span>
            <ChevronRight className="w-4 h-4 mx-1" />
          </>
        )}
        <span>{currentTitle}</span>
      </div>
      <div className="w-8" /> {/* Spacer for balance */}
    </div>
  );
};
