import * as React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import SignIn from "../pages/login";
import SignUp from "../pages/signup";
import Home from "../pages/home";
import store from "store2";
import Profile from "../pages/profile";
import Win from "../pages/win";
import Orders from "../pages/orders";
import Promotion from "../pages/promotion";
import BankCard from "../pages/bank-card";
import Addbankcard from "../pages/bank-card/add-bankcard";
import PrivacyPolicy from "../pages/about/privacy";
import Riskagreement from "../pages/about/riskagreement";
import ContectUs from "../pages/about/contect-us";
import WalletRecharge from "../pages/wallet/walletRecharge";
import WalletTransactions from "../pages/wallet/walletTransactions";
import WalletWithdrawal from "../pages/wallet/walletWithdrawal";
import ProductDetail from "../pages/home/details";
import NotFound from "../pages/notfound";
import BillingDashboard from "../pages/billing";
import ChangePassword from "../pages/ChangePassword";
import MyProfile from "../pages/MyProfile";
import ForgotPassword from "../pages/ForgotPassword";
import Trend from "../pages/Trend";
import AddUpiId from "../pages/bank-card/add-upi";

const routes = (isLoggedIn) => {
  return [
    {
      // public routes
      path: '/login',
      element: !isLoggedIn ? <SignIn /> : <Navigate to="/" />,
    },
    {
      // public routes
      path: '/forgot-password',
      element: !isLoggedIn ? <ForgotPassword /> : <Navigate to="/" />,
    },
    {
      // public routes
      path: '/register',
      element: !isLoggedIn ? <SignUp /> : <Navigate to="/" />,
    },
    {
      path: '/privacy-policy', // protected routes
      element: <PrivacyPolicy />,
    },
    {
      path: '/riskagreement', // protected routes
      element: <Riskagreement />,
    },
    {
      path: '/contect-us', // protected routes
      element: <ContectUs />,
    },
    {
      path: '/', // protected routes
      element: <Home />,
    },
    {
      path: '/detail/:productId', // protected routes
      element: <ProductDetail />,
    },
    {
      path: '/wallet-recharge', // protected routes
      element: isLoggedIn ? <WalletRecharge /> : <Navigate to="/login" />,
    },
    {
      path: '/wallet-withdrawal', // protected routes
      element: isLoggedIn ? <WalletWithdrawal /> : <Navigate to="/login" />,
    },
    {
      path: '/wallet-transactions', // protected routes
      element: isLoggedIn ? <WalletTransactions /> : <Navigate to="/login" />,
    },
    {
      path: '/mine', // protected routes
      element: isLoggedIn ? <Profile /> : <Navigate to="/login" />,
    },
    {
      path: '/win', // protected routes
      element: isLoggedIn ? <Win /> : <Navigate to="/login" />,
    },
    {
      path: '/orders', // protected routes
      element: isLoggedIn ? <Orders /> : <Navigate to="/login" />,
    },
    {
      path: '/bank-card', // protected routes
      element: isLoggedIn ? <BankCard /> : <Navigate to="/login" />,
    },
    {
      path: '/addbankcard', // protected routes
      element: isLoggedIn ? <Addbankcard /> : <Navigate to="/login" />,
    },
    {
      path: '/add-upi', // protected routes
      element: isLoggedIn ? <AddUpiId /> : <Navigate to="/login" />,
    },
    {
      path: '/promotion', // protected routes
      element: isLoggedIn ? <Promotion /> : <Navigate to="/login" />,
    },
    {
      path: '/promotion', // protected routes
      element: isLoggedIn ? <Promotion /> : <Navigate to="/login" />,
    },
    {
      path: '/my-profile', // protected routes
      element: isLoggedIn ? <MyProfile /> : <Navigate to="/login" />,
    },
    {
      path: '/trend', // protected routes
      element: isLoggedIn ? <Trend /> : <Navigate to="/login" />,
    },
    {
      path: '/change-password', // protected routes
      element: isLoggedIn ? <ChangePassword /> : <Navigate to="/login" />,
    },
    // admin url
    {
      path: `/billing/${process.env.REACT_APP_ROUTE_URL}`, // protected routes
      element: isLoggedIn ? (
        <BillingDashboard routeName={process.env.REACT_APP_ROUTE_URL} />
      ) : (
        <Navigate to="/login" />
      ),
    },
    {
      path: '/billing/game-now', // protected routes
      element: isLoggedIn ? (
        <BillingDashboard routeName="game-now" />
      ) : (
        <Navigate to="/login" />
      ),
    },
    {
      path: '/billing/total-game', // protected routes
      element: isLoggedIn ? (
        <BillingDashboard routeName="total-game" />
      ) : (
        <Navigate to="/login" />
      ),
    },
    {
      path: '/billing/recharge-req', // protected routes
      element: isLoggedIn ? (
        <BillingDashboard routeName="recharge-req" />
      ) : (
        <Navigate to="/login" />
      ),
    },
    {
      path: '/billing/withdrawal-req', // protected routes
      element: isLoggedIn ? (
        <BillingDashboard routeName="withdrawal-req" />
      ) : (
        <Navigate to="/login" />
      ),
    },
    {
      path: '/billing/users', // protected routes
      element: isLoggedIn ? (
        <BillingDashboard routeName="users" />
      ) : (
        <Navigate to="/login" />
      ),
    },
    {
      path: '/billing/users/gameList/:id', // protected routes
      element: isLoggedIn ? (
        <BillingDashboard routeName="userGameList" />
      ) : (
        <Navigate to="/login" />
      ),
    },
    {
      path: '/billing/users/rechargeList/:id', // protected routes
      element: isLoggedIn ? (
        <BillingDashboard routeName="userRechargeList" />
      ) : (
        <Navigate to="/login" />
      ),
    },
    {
      path: '/billing/users/withdrawalList/:id', // protected routes
      element: isLoggedIn ? (
        <BillingDashboard routeName="userWithdrawalList" />
      ) : (
        <Navigate to="/login" />
      ),
    },
    {
      path: '/billing/users/childList/:id', // protected routes
      element: isLoggedIn ? (
        <BillingDashboard routeName="userChildList" />
      ) : (
        <Navigate to="/login" />
      ),
    },
    {
      // public routes
      path: '*',
      element: <NotFound />,
    },
  ];
};

const Routes = () => {
  const authToken = store("authToken");
  const routing = useRoutes(routes(authToken));
  return <React.Fragment>{routing}</React.Fragment>;
};
export default Routes;
