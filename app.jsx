import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./src/components/Header";
import Browse from "./src/components/Browse";
import Login from "./src/pages/Login";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={appRoute} />;
};

export default App;