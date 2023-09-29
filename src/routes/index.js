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
import PrivacyPolicy from "../pages/privacy";
import Riskagreement from "../pages/riskagreement";
import ContectUs from "../pages/contect-us";
import WalletRecharge from "../pages/wallet/walletRecharge";
import WalletTransactions from "../pages/wallet/walletTransactions";
import WalletWithdrawal from "../pages/wallet/walletWithdrawal";
import ProductDetail from "../pages/home/details";
import NotFound from "../pages/notfound";
import BillingDashboard from "../pages/billing";

const routes = (isLoggedIn) => {
  return [
    {
      // public routes
      path: '/login',
      element: !isLoggedIn ? <SignIn /> : <Navigate to="/" />,
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
      path: '/wallet-recharge', // protected routes
      element: <WalletRecharge />,
    },
    {
      path: '/wallet-withdrawal', // protected routes
      element: <WalletWithdrawal />,
    },
    {
      path: '/wallet-transactions', // protected routes
      element: <WalletTransactions />,
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
      path: '/promotion', // protected routes
      element: isLoggedIn ? <Promotion /> : <Navigate to="/login" />,
    },
    {
      path: '/billing/luck67', // protected routes
      element: isLoggedIn ? <BillingDashboard routeName="luck67" /> : <Navigate to="/login" />,
    },
    {
      path: '/billing/game-now', // protected routes
      element: isLoggedIn ? <BillingDashboard routeName="game-now" /> : <Navigate to="/login" />,
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
