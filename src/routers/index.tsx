import { publicRoutes } from "./public";
import { privateRoutes } from "./private";
import { useRoutes } from "react-router-dom";

export const RoutesApp = () => {
  const isAuthenticated = true;
  return useRoutes(isAuthenticated ? privateRoutes : publicRoutes);
};