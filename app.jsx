import React, { useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useNavigate,
} from "react-router-dom";
import Header from "./src/components/Header";
import Browse from "./src/pages/Browse";
import Login from "./src/pages/Login";
import { onAuthStateChanged } from "firebase/auth";
import auth from "./src/utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "./src/redux/userSlice";

const Layout = () => {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid: uid, displayName: displayName, email: email }));
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
        // console.log(user?.email, "logout");
      }
    });
    return () => unsubscribe();
  }, []);
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
