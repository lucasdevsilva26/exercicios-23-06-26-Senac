import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Ex1 from "./pages/Ex1";
import Ex2 from "./pages/Ex2";

export const challenges = [
    { name: "Mensagem de Olá", url: "/ex1" },
    { name: "Par ou Ímpar", url: "/ex2" },
  ];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/ex1",
    element: <Ex1></Ex1>,
  },
  {
    path: "/ex2",
    element: <Ex2></Ex2>,
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
