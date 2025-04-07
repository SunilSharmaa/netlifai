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
    <div className="absolute w-full  pt-1 pb-8 bg-gradient-to-b from-black z-10 ">
      <div className="w-[90%] mx-auto flex justify-between items-center">
        <div className="w-[20%] lg:w-[10%]">
          <img
            className="w-30 lg:w-full"
            src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="netflix logo"
          />
        </div>

        <div className="hidden lg:block w-[70%]">
          <ul className="text-gray-300 flex  space-x-6 text-base">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Movies</li>
            <li className="cursor-pointer">TV Shows</li>
          </ul>
        </div>

        <div className="flex gap-2 w-auto  items-center ">
          {user && (
            <button
              className="text-white text-[.7rem] sm:text-sm bg-amber-600 px-2 sm:px-3 md:px-4 py-1 rounded cursor-pointer"
              onClick={navigateToPage}
            >
              {isSearchPageActive ? "Home Page" : "AI Movie Search"}
            </button>
          )}

          {user && (
            <button
              className="text-[.7rem] sm:text-sm  bg-red-700 px-2 sm:px-3 md:px-4 py-1 text-white rounded cursor-pointer"
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
