import type { RouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Login from "../features/auth/login";
import GuestLayout from "../layouts/guest";

export const publicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: "Register",
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/home" replace />,
  },
];
