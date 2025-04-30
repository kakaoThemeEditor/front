import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Layout } from "@/components/layout/Layout";
import { ProductStore } from "@/page/product/ProductStore";
import { WishList } from "@/page/order/WishList";
import { Cart } from "@/page/order/Cart";
import { OrderHistory } from "@/page/order/OrderHistory";
import { PaymentInfo } from "@/page/order/PaymentInfo";
import { Profile } from "@/page/auth/Profile";
import { ChangePassword } from "@/page/auth/ChangePassword";
import { Purchased } from "@/page/kakaotheme/Purchased";
import { ImageEditor } from "@/page/editor/ImageEditor";
import { Preview } from "@/page/editor/Preview";
import { Notification } from "@/page/notification/Notification";
import { Settings } from "@/page/setting/Settings";
import { ThemeProvider } from "@/context/ThemeContext";
import { KakaoEditor } from "./page/editor/KakaoEditor";
import { Creations } from "./page/kakaotheme/Creations";
import { HomePage } from "./page/home/HomePage";
import { Login } from "./page/auth/Login";
import { Register } from "./page/auth/Register";
import { FindEmail } from "./page/auth/FindEmail";
import { FindPassword } from "./page/auth/FindPassword";
import { AuthLayout } from "./components/layout/AuthLayout";
import { SetPassword } from "./page/auth/SetPassword";
import { Toaster } from "sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "@/context/AuthContext";
import { ProtectedRoute } from "./components/layout/ProtectedRoute";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <ThemeProvider>
            <SidebarProvider>
              <Toaster position="top-center" />
              <Routes>
                {/* Auth Routes */}
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

                    {/* Editor 관련 */}
                    <Route path="editor">
                      <Route path="image" element={<ImageEditor />} />
                      <Route path="preview" element={<Preview />} />
                      <Route path="kakao" element={<KakaoEditor />} />
                    </Route>

                    {/* 기타 */}
                    <Route path="notification" element={<Notification />} />
                    <Route path="settings" element={<Settings />} />
                  </Route>
                </Route>
              </Routes>
            </SidebarProvider>
          </ThemeProvider>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
