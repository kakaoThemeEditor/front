import {
  Home,
  ShoppingBag,
  List,
  Heart,
  ShoppingCart,
  CreditCard,
  User,
  Key,
  LogOut,
  LayoutTemplate,
  Image,
  Eye,
  Bell,
  Settings,
  ChevronDown,
  PanelLeftIcon,
  SunIcon,
  MoonIcon,
  LaughIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/collapsible/Collapsible";
import { useState } from "react";
import clsx from "clsx";
import { useTheme } from "@/context/ThemeContext";

type SidebarContextProps = {
  state: "expanded" | "collapsed";
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};

interface IsOpenOptionsProps {
  main: boolean;
  product: boolean;
  order: boolean;
  account: boolean;
  template: boolean;
  editor: boolean;
  notification: boolean;
  setting: boolean;
}

export function AppSidebar() {
  const { state, open, setOpen, openMobile, setOpenMobile, toggleSidebar } = useSidebar();
  const { logout } = useAuth();

  const [isOpenOptions, setIsOpenOptions] = useState<IsOpenOptionsProps>({
    main: true,
    product: true,
    order: true,
    account: true,
    template: true,
    editor: true,
    notification: true,
    setting: true,
  });

  const { theme, toggleTheme } = useTheme();
  return (
    <Collapsible defaultOpen className="group/collapsible">
      <Sidebar variant="sidebar" collapsible="icon" className="border-none">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton onClick={() => toggleSidebar()}>
                    <PanelLeftIcon />
                    <button className="">사이드바 닫기 </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* 홈 */}
          <Collapsible defaultOpen className="group/collapsible">
            <SidebarGroup>
              {state === "expanded" && (
                <SidebarGroupLabel>
                  <CollapsibleTrigger
                    className="w-full flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-800  rounded-md transition-colors"
                    onClick={() => setIsOpenOptions({ ...isOpenOptions, main: !isOpenOptions.main })}
                  >
                    메인
                    <ChevronDown
                      className={clsx(
                        "w-4 h-4 ml-auto transition-transform",
                        isOpenOptions.main
                          ? "group-data-[state=open]/collapsible:rotate-0"
                          : "group-data-[state=open]/collapsible:rotate-180"
                      )}
                    />
                  </CollapsibleTrigger>
                </SidebarGroupLabel>
              )}
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem className={clsx(state === "expanded" && "px-2")}>
                      <Link to="/">
                        <SidebarMenuButton>
                          <Home className="mr-2 h-4 w-4" />
                          <span>홈</span>
                        </SidebarMenuButton>
                      </Link>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
          {/* 상품 */}
          <Collapsible defaultOpen className="group/collapsible">
            <SidebarGroup>
              {state === "expanded" && (
                <SidebarGroupLabel>
                  <CollapsibleTrigger
                    className="w-full flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                    onClick={() => setIsOpenOptions({ ...isOpenOptions, product: !isOpenOptions.product })}
                  >
                    상품
                    <ChevronDown
                      className={clsx(
                        "w-4 h-4 ml-auto transition-transform",
                        isOpenOptions.product
                          ? "group-data-[state=open]/collapsible:rotate-0"
                          : "group-data-[state=open]/collapsible:rotate-180"
                      )}
                    />
                  </CollapsibleTrigger>
                </SidebarGroupLabel>
              )}
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem className={clsx(state === "expanded" && "px-2")}>
                      <Link to="/product/store">
                        <SidebarMenuButton>
                          <ShoppingBag className="mr-2 h-4 w-4" />
                          <span>스토어</span>
                        </SidebarMenuButton>
                      </Link>
                    </SidebarMenuItem>
                    <SidebarMenuItem className={clsx(state === "expanded" && "px-2")}>
                      <Link to="/product/wishlist">
                        <SidebarMenuButton>
                          <Heart className="mr-2 h-4 w-4" />
                          <span>찜 목록</span>
                        </SidebarMenuButton>
                      </Link>
                    </SidebarMenuItem>
                    <SidebarMenuItem className={clsx(state === "expanded" && "px-2")}>
                      <Link to="/product/cart">
                        <SidebarMenuButton>
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          <span>장바구니</span>
                        </SidebarMenuButton>
                      </Link>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>

          {/* 주문/결제 */}
          <Collapsible defaultOpen className="group/collapsible">
            <SidebarGroup>
              {state === "expanded" && (
                <SidebarGroupLabel>
                  <CollapsibleTrigger
                    className="w-full flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-800  rounded-md transition-colors"
                    onClick={() => setIsOpenOptions({ ...isOpenOptions, order: !isOpenOptions.order })}
                  >
                    주문/결제
                    <ChevronDown
                      className={clsx(
                        "w-4 h-4 ml-auto transition-transform",
                        isOpenOptions.order
                          ? "group-data-[state=open]/collapsible:rotate-0"
                          : "group-data-[state=open]/collapsible:rotate-180"
                      )}
                    />
                  </CollapsibleTrigger>
                </SidebarGroupLabel>
              )}
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem className={clsx(state === "expanded" && "px-2")}>
                      <Link to="/order/history">
                        <SidebarMenuButton>
                          <CreditCard className="mr-2 h-4 w-4" />
                          <span>주문 내역</span>
                        </SidebarMenuButton>
                      </Link>
                    </SidebarMenuItem>
                    <SidebarMenuItem className={clsx(state === "expanded" && "px-2")}>
                      <Link to="/order/payment">
                        <SidebarMenuButton>
                          <CreditCard className="mr-2 h-4 w-4" />
                          <span>결제 정보</span>
                        </SidebarMenuButton>
                      </Link>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>

          {/* 내 계정 */}
          <Collapsible defaultOpen className="group/collapsible">
            <SidebarGroup>
              {state === "expanded" && (
                <SidebarGroupLabel>
                  <CollapsibleTrigger
                    className="w-full flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-800  rounded-md transition-colors"
                    onClick={() => setIsOpenOptions({ ...isOpenOptions, account: !isOpenOptions.account })}
                  >
                    내 계정
                    <ChevronDown
                      className={clsx(
                        "w-4 h-4 ml-auto transition-transform",
                        isOpenOptions.account
                          ? "group-data-[state=open]/collapsible:rotate-0"
                          : "group-data-[state=open]/collapsible:rotate-180"
                      )}
                    />
                  </CollapsibleTrigger>
                </SidebarGroupLabel>
              )}
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem className={clsx(state === "expanded" && "px-2")}>
                      <Link to="/auth/profile">
                        <SidebarMenuButton>
                          <User className="mr-2 h-4 w-4" />
                          <span>프로필</span>
                        </SidebarMenuButton>
                      </Link>
                    </SidebarMenuItem>
                    <SidebarMenuItem className={clsx(state === "expanded" && "px-2")}>
                      <Link to="/auth/change-password">
                        <SidebarMenuButton>
                          <Key className="mr-2 h-4 w-4" />
                          <span>비밀번호 변경</span>
                        </SidebarMenuButton>
                      </Link>
                    </SidebarMenuItem>
                    <SidebarMenuItem className={clsx(state === "expanded" && "px-2")}>
                      <SidebarMenuButton onClick={logout}>
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>로그아웃</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>

          {/* 템플릿 */}
          <Collapsible defaultOpen className="group/collapsible">
            <SidebarGroup>
              {state === "expanded" && (
                <SidebarGroupLabel>
                  <CollapsibleTrigger
                    className="w-full flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-800  rounded-md transition-colors"
                    onClick={() => setIsOpenOptions({ ...isOpenOptions, template: !isOpenOptions.template })}
                  >
                    나의 카카오톡 테마
                    <ChevronDown
                      className={clsx(
                        "w-4 h-4 ml-auto transition-transform",
                        isOpenOptions.template
                          ? "group-data-[state=open]/collapsible:rotate-0"
                          : "group-data-[state=open]/collapsible:rotate-180"
                      )}
                    />
                  </CollapsibleTrigger>
                </SidebarGroupLabel>
              )}
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem className={clsx(state === "expanded" && "px-2")}>
                      <Link to="/template/my-purchased">
                        <SidebarMenuButton>
                          <LaughIcon className="mr-2 h-4 w-4" />
                          <span>구매한 테마</span>
                        </SidebarMenuButton>
                      </Link>
                    </SidebarMenuItem>
                    <SidebarMenuItem className={clsx(state === "expanded" && "px-2")}>
                      <Link to="/template/my-creations">
                        <SidebarMenuButton>
                          <LayoutTemplate className="mr-2 h-4 w-4" />
                          <span>제작한 테마</span>
                        </SidebarMenuButton>
                      </Link>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>

          {/* 편집기 */}
          <Collapsible defaultOpen className="group/collapsible">
            <SidebarGroup>
              {state === "expanded" && (
                <SidebarGroupLabel>
                  <CollapsibleTrigger
                    className="w-full flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-800  rounded-md transition-colors"
                    onClick={() => setIsOpenOptions({ ...isOpenOptions, editor: !isOpenOptions.editor })}
                  >
                    편집기
                    <ChevronDown
                      className={clsx(
                        "w-4 h-4 ml-auto transition-transform",
                        isOpenOptions.editor
                          ? "group-data-[state=open]/collapsible:rotate-0"
                          : "group-data-[state=open]/collapsible:rotate-180"
                      )}
                    />
                  </CollapsibleTrigger>
                </SidebarGroupLabel>
              )}
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem className={clsx(state === "expanded" && "px-2")}>
                      <Link to="/editor/kakao">
                        <SidebarMenuButton>
                          <LaughIcon className="mr-2 h-4 w-4" />
                          <span>카카오톡 테마 편집</span>
                        </SidebarMenuButton>
                      </Link>
                    </SidebarMenuItem>
                    <SidebarMenuItem className={clsx(state === "expanded" && "px-2")}>
                      <Link to="/editor/image">
                        <SidebarMenuButton>
                          <Image className="mr-2 h-4 w-4" />
                          <span>이미지 편집</span>
                        </SidebarMenuButton>
                      </Link>
                    </SidebarMenuItem>
                    <SidebarMenuItem className={clsx(state === "expanded" && "px-2")}>
                      <Link to="/editor/preview">
                        <SidebarMenuButton>
                          <Eye className="mr-2 h-4 w-4" />
                          <span>미리보기</span>
                        </SidebarMenuButton>
                      </Link>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>

          {/* 알림 */}
          <Collapsible defaultOpen className="group/collapsible">
            <SidebarGroup>
              {state === "expanded" && (
                <SidebarGroupLabel>
                  <CollapsibleTrigger
                    className="w-full flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-800  rounded-md transition-colors"
                    onClick={() => setIsOpenOptions({ ...isOpenOptions, notification: !isOpenOptions.notification })}
                  >
                    알림
                    <ChevronDown
                      className={clsx(
                        "w-4 h-4 ml-auto transition-transform",
                        isOpenOptions.notification
                          ? "group-data-[state=open]/collapsible:rotate-0"
                          : "group-data-[state=open]/collapsible:rotate-180"
                      )}
                    />
                  </CollapsibleTrigger>
                </SidebarGroupLabel>
              )}
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem className={clsx(state === "expanded" && "px-2")}>
                      <Link to="/notification">
                        <SidebarMenuButton>
                          <Bell className="mr-2 h-4 w-4" />
                          <span>알림</span>
                        </SidebarMenuButton>
                      </Link>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>

          {/* 설정 */}
          <Collapsible defaultOpen className="group/collapsible">
            <SidebarGroup>
              {state === "expanded" && (
                <SidebarGroupLabel>
                  <CollapsibleTrigger
                    className="w-full flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-800  rounded-md transition-colors"
                    onClick={() => setIsOpenOptions({ ...isOpenOptions, setting: !isOpenOptions.setting })}
                  >
                    설정
                    <ChevronDown
                      className={clsx(
                        "w-4 h-4 ml-auto transition-transform",
                        isOpenOptions.setting
                          ? "group-data-[state=open]/collapsible:rotate-0"
                          : "group-data-[state=open]/collapsible:rotate-180"
                      )}
                    />
                  </CollapsibleTrigger>
                </SidebarGroupLabel>
              )}
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem className={clsx(state === "expanded" && "px-2")}>
                      <Link to="/settings">
                        <SidebarMenuButton>
                          <Settings className="mr-2 h-4 w-4" />
                          <span>앱 설정</span>
                        </SidebarMenuButton>
                      </Link>
                    </SidebarMenuItem>
                    <SidebarMenuItem className={clsx(state === "expanded" && "px-2")}>
                      <SidebarMenuButton onClick={toggleTheme}>
                        {theme === "light" ? (
                          <>
                            <MoonIcon className="mr-2 h-4 w-4" />
                            <span>다크 모드</span>
                          </>
                        ) : (
                          <>
                            <SunIcon className="mr-2 h-4 w-4" />
                            <span>라이트 모드</span>
                          </>
                        )}
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        </SidebarContent>
      </Sidebar>
    </Collapsible>
  );
}
