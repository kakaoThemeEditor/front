import { Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { AuthLayout } from "@/components/layout/AuthLayout";
import { ProtectedRoute } from "@/components/layout/ProtectedRoute";
import { HomePage } from "@/page/home/HomePage";
import { Login } from "@/page/auth/Login";
import { Register } from "@/page/auth/Register";
import { FindEmail } from "@/page/auth/FindEmail";
import { FindPassword } from "@/page/auth/FindPassword";
import { SetPassword } from "@/page/auth/SetPassword";
import { ImageEditor } from "@/page/editor/ImageEditor";
import { ProductStore } from "@/page/product/ProductStore";
import { WishList } from "@/page/order/WishList";
import { Cart } from "@/page/order/Cart";
import { OrderHistory } from "@/page/order/OrderHistory";
import { PaymentInfo } from "@/page/order/PaymentInfo";
import { Profile } from "@/page/auth/Profile";
import { ChangePassword } from "@/page/auth/ChangePassword";
import { Purchased } from "@/page/kakaotheme/Purchased";
import { Creations } from "@/page/kakaotheme/Creations";
import { Notification } from "@/page/notification/Notification";
import { Settings } from "@/page/setting/Settings";
import { MainviewStyle1Page } from "@/page/editor/kakaoscreen/MainviewStyle1";
import { MainviewStyle2Page } from "@/page/editor/kakaoscreen/MainviewStyle2";
import { MainviewStyle3Page } from "@/page/editor/kakaoscreen/MainviewStyle3";
import { AddFriendPage } from "@/page/editor/kakaoscreen/AddFriend";
import { ChattingPage } from "@/page/editor/kakaoscreen/Chatting";
import { MessageNotificationBarPage } from "@/page/editor/kakaoscreen/MessageNotificationBar";
import { PassCodePage } from "@/page/editor/kakaoscreen/PassCode";
import { TabBarPage } from "@/page/editor/kakaoscreen/TabBar";

export const Router = () => {
  return (
    <Routes>
      {/* Auth Routes */}
      {/* /auth 는 절대경로 auth는 부모 Route 기준 상대경로 즉 지금은 처음이니까 절대경로 사용   */}
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="find-password" element={<FindPassword />} />
        <Route path="find-email" element={<FindEmail />} />
        <Route path="set-password" element={<SetPassword />} />
      </Route>

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          {/* Home */}
          <Route index element={<HomePage />} />

          {/* Editor 관련 */}
          <Route path="editor/image" element={<ImageEditor />} />
          <Route path="editor/kakao" element={<div></div>} />
          <Route path="editor/kakao/:themeId">
            <Route path="MainViewStyle1" element={<MainviewStyle1Page />} />
            <Route path="MainViewStyle2" element={<MainviewStyle2Page />} />
            <Route path="MainViewStyle3" element={<MainviewStyle3Page />} />
            <Route path="AddFriend" element={<AddFriendPage />} />
            <Route path="Chatting" element={<ChattingPage />} />
            <Route
              path="MessageNotificationBar"
              element={<MessageNotificationBarPage />}
            />
            <Route path="PassCode" element={<PassCodePage />} />
            <Route path="TabBar" element={<TabBarPage />} />
          </Route>

          {/* Product 관련 */}
          <Route path="product">
            <Route path="store" element={<ProductStore />} />
            <Route path="wishlist" element={<WishList />} />
            <Route path="cart" element={<Cart />} />
          </Route>

          {/* Order 관련 */}
          <Route path="order">
            <Route path="history" element={<OrderHistory />} />
            <Route path="payment" element={<PaymentInfo />} />
          </Route>

          {/* User 관련 */}
          <Route path="auth">
            <Route path="profile" element={<Profile />} />
            <Route path="change-password" element={<ChangePassword />} />
          </Route>

          {/* Template 관련 */}
          <Route path="template">
            <Route path="my-purchased" element={<Purchased />} />
            <Route path="my-creations" element={<Creations />} />
          </Route>

          {/* 기타 */}
          <Route path="notification" element={<Notification />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Route>
    </Routes>
  );
};
