import * as React from "react";
import {
  Navigate,
  useRoutes,
} from "react-router-dom";
import SignIn from "../pages/login";
import SignUp from "../pages/signup";
import Home from "../pages/home";
import store from "store2";
import MyMenu from "../pages/my-menu";

const routes = (isLoggedIn) => {
  return [
    {
      path: "/", // protected routes
      element: isLoggedIn ? <Home /> : <Navigate to="/login" />,
    },
    {
      path: "/mine", // protected routes
      element: isLoggedIn ? <MyMenu /> : <Navigate to="/login" />,
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
  const routing = useRoutes(routes("authToken"));
  return <React.Fragment>{routing}</React.Fragment>;
};
export default Routes;
