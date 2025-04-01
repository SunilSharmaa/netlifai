import React from "react";
import auth from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleSearchPageActive } from "../redux/geminiSlice";

const Header = () => {
  let dispatch = useDispatch();
  let user = useSelector((state) => state?.user);
  let isSearchPageActive = useSelector(
    (state) => state?.gemini?.isSearchPageActive
  );

  let navigate = useNavigate();

  const navigateToPage = () => {
    dispatch(toggleSearchPageActive());

    isSearchPageActive ? navigate("/browse") : navigate("/aimoviesearch");
  };

  const navigateToHome = () => {
    navigate("/browse");
  };

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("user signout successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="absolute w-full  pt-4 pb-8 bg-gradient-to-b from-black z-10 ">
      <div className="w-[90%] mx-auto flex justify-between items-center">
        <img
          onClick={navigateToHome}
          className="w-30"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="netflix logo"
        />

        <div className="space-x-4">
          {user && (
            <button
              className="text-white text-sm bg-amber-600 px-3 py-1 rounded cursor-pointer"
              onClick={navigateToPage}
            >
              {isSearchPageActive ? "Home Page" : "AI Movie Search"}
            </button>
          )}

          {user && (
            <button
              className="text-sm  bg-red-700 px-3 py-1 text-white rounded cursor-pointer"
              onClick={userSignOut}
            >
              Sign out
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
