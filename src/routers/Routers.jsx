import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import AppLayout from "../layouts/AppLayout";
import Auth from "../layouts/Auth";

// Code Splitting，減少JS初次載入大小
const Member = lazy(() => import("../views/Member"));
const ProdsAndStore = lazy(() => import("../views/ProdsAndStore"));
const CashFlow = lazy(() => import("../views/CashFlow"));
const Marketing = lazy(() => import("../views/Marketing"));
const Order = lazy(() => import("../views/Order"));
const Setting = lazy(() => import("../views/Setting"));
const Login = lazy(() => import("../views/auth/Login"));
const Register = lazy(() => import("../views/auth/Register"));
const PasswordForget = lazy(() => import("../views/auth/PasswordForget"));

// Loading 畫面（避免白屏）
const Loading = () => (
  <div className="w-screen h-screen flex justify-center items-center font-lexend text-brandBlue-normalDarker text-2xl">
    <div>Loading...</div>
  </div>
);

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          {/* 這是 有sidebar 的基底模板 */}
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Order />} />
            <Route path="order" element={<Order />} />
            <Route path="prods-and-store" element={<ProdsAndStore />} />
            <Route path="cash-flow" element={<CashFlow />} />
            <Route path="member" element={<Member />} />
            <Route path="marketing" element={<Marketing />} />
            <Route path="setting" element={<Setting />} />
            
            {/* 金流管理相關路由 */}
            <Route path="cash-flow" element={<CashFlow />} />
            <Route path="member" element={<Member />} />
            <Route path="marketing" element={<Marketing />} />
            <Route path="setting" element={<Setting />} />
          </Route>

          {/* 這是 登入／註冊 頁們的基底模板 */}
          <Route path="auth" element={<Auth />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="password-forget" element={<PasswordForget />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
