import React, { useRef, useState } from "react";
import auth from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleSearchPageActive } from "../redux/geminiSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  let dispatch = useDispatch();
  let user = useSelector((state) => state?.user);
  let isSearchPageActive = useSelector(
    (state) => state?.gemini?.isSearchPageActive
  );
  let navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownTimer = useRef(null);

  let handleMouseEnter = ()=> {
    clearTimeout(dropdownTimer.current);
    setIsDropdownOpen(true);
  }

  let handleMouseLeave = ()=> {
    dropdownTimer.current = setTimeout(()=> {
      setIsDropdownOpen(false);
    },200)
  }

  const navigateToPage = () => {
    dispatch(toggleSearchPageActive());

    isSearchPageActive ? navigate("/browse") : navigate("/aimoviesearch");
  };

  const toggleDropdown = ()=> {
    setIsDropdownOpen(!isDropdownOpen);
  }

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
            <>
              {/* <button
              className="text-[.7rem] sm:text-sm  bg-red-700 px-2 sm:px-3 md:px-4 py-1 text-white rounded cursor-pointer"
              onClick={userSignOut}
            >
              Sign out
            </button> */}
              <div className="relative"
              onMouseEnter={()=> handleMouseEnter()}
              onMouseLeave={()=> handleMouseLeave()}
              onClick={toggleDropdown}
              >
                
                  <div className="flex sm:space-x-2 items-center">
                    <div className="rounded overflow-hidden relative">
                      <img
                        className="w-7 h-7 cursor-pointer "
                        src="https://occ-0-56-55.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABUcrlRM8xyfkeGhiHqMFbXm9Fu-GwxdUMvjjlox3gnVq0BOeram_lFujgH17JFQ3H4_egJmrav0rdoUcSag5RXS9qSBfz9FgSw.png?r=bd7"
                        alt="user-icon"
                      ></img>
                    </div>
                    <div className="hidden sm:block">
                    <FontAwesomeIcon
                      className=" text-neutral-300 hover:text-neutral-100 cursor-pointer"
                      icon={faCaretDown}
                    />
                    </div>
                  </div>

                  <div className={`bg-black/80  absolute mt-2 -ml-25 w-36 text-neutral-300 rounded overflow-hidden transition duration-200 ease-out ${ isDropdownOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} `}>
                  <ul className="cursor-pointer pt-3">
                    <li className="hover:underline w-full px-6 py-1">User</li>
                    <li className="hover:underline w-full px-6 py-1">Accounts</li>
                    <li className="hover:underline w-full px-6 py-1">Help Centre</li>
                  </ul>
                  <button className="text-center w-full py-2 cursor-pointer bg-black hover:bg-neutral-900 mt-2" onClick={userSignOut}>Sign out</button>
                  </div>
                
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
