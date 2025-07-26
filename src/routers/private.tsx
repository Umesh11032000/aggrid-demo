import type { RouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";
import AuthLayout from "../layouts/auth";
import Dashboard from "../features/dashboard";
import UserList from "../features/users/index/list";

export const privateRoutes: RouteObject[] = [
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/users",
        element: <UserList />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
];
