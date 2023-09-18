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

const routes = (isLoggedIn) => {
  return [
    {
      path: "/", // protected routes
      element: isLoggedIn ? <Home /> : <Navigate to="/login" />,
    },
    {
      path: "/mine", // protected routes
      element: isLoggedIn ? <Profile /> : <Navigate to="/login" />,
    },
    {
      path: "/win", // protected routes
      element: isLoggedIn ? <Win /> : <Navigate to="/login" />,
    },
    {
      path: "/orders", // protected routes
      element: isLoggedIn ? <Orders /> : <Navigate to="/login" />,
    },
    {
      path: "/bank-card", // protected routes
      element: isLoggedIn ? <BankCard /> : <Navigate to="/login" />,
    },
    {
      path: "/addbankcard", // protected routes
      element: isLoggedIn ? <Addbankcard /> : <Navigate to="/login" />,
    },
    {
      path: "/promotion", // protected routes
      element: isLoggedIn ? <Promotion /> : <Navigate to="/login" />,
    },
    {
      path: "/privacy-policy", // protected routes
      element: isLoggedIn ? <PrivacyPolicy /> : <Navigate to="/login" />,
    },
    {
      // public routes
      path: "/login",
      element: !isLoggedIn ? <SignIn /> : <Navigate to="/" />,
    },
    {
      // public routes
      path: "/register",
      element: !isLoggedIn ? <SignUp /> : <Navigate to="/" />,
    },
    {
      // public routes
      path: "*",
      element: <div>NOT FOUND</div>,
    },
  ];
};

const Routes = () => {
  const authToken = store("authToken");
  const routing = useRoutes(routes(authToken));
  return <React.Fragment>{routing}</React.Fragment>;
};
export default Routes;
