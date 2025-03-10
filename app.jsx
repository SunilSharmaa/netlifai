import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet, useNavigate } from "react-router-dom";
import Header from "./src/components/Header";
import Browse from "./src/components/Browse";
import Login from "./src/pages/Login";
import { onAuthStateChanged } from "firebase/auth";
import auth from "./src/utils/firebase";

const Layout = () => {
    const navigate = useNavigate();
    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;
            console.log("onAuthStateChanged", user);
            navigate("/browse")
            // ...
          } else {
            // User is signed out
            // ...
            navigate("/")
            // console.log(user?.email, "logout");
          }
        });
        return ()=> unsubscribe();
    },[])
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