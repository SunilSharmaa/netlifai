import React, { useRef, useState, useEffect } from "react";
import auth from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleSearchPageActive } from "../redux/geminiSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { NETFLIX_LOGO_URL, USER_ICON } from "../utils/constant";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user);
  const isSearchPageActive = useSelector(
    (state) => state?.gemini?.isSearchPageActive
  );
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownTimer = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(dropdownTimer.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimer.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  const navigateToPage = () => {
    dispatch(toggleSearchPageActive());
    isSearchPageActive ? navigate("/browse") : navigate("/aimoviesearch");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("user signout successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div
      className={`w-full pt-1 pb-2 z-10 transition-colors duration-300 absolute sm:fixed top-0
        ${
          isScrolled
            ? " sm:bg-black/90 sm:backdrop-blur-sm"
            : "bg-gradient-to-b from-black/80 to-transparent"
        }
      `}
    >
      <div className="w-[90%] mx-auto flex justify-between items-center">
        <div className="w-[20%] lg:w-[10%]">
          <img
            className="w-30 lg:w-full"
            src={NETFLIX_LOGO_URL}
            alt="netflix logo"
          />
        </div>

        <div className="hidden lg:block w-[70%]">
          <ul className="text-gray-300 flex space-x-6 text-base">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Movies</li>
            <li className="cursor-pointer">TV Shows</li>
          </ul>
        </div>

        <div className="flex gap-2 w-auto items-center">
          {user && (
            <button
              className="text-white text-[.7rem] sm:text-sm px-2 sm:px-3 md:px-4 py-1 rounded border hover:bg-neutral-900 border-neutral-100 cursor-pointer"
              onClick={navigateToPage}
            >
              {isSearchPageActive ? "Home Page" : "AI Movie Search"}
            </button>
          )}

          {user && (
            <>
              <div
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={toggleDropdown}
              >
                <div className="flex sm:space-x-2 items-center">
                  <div className="rounded overflow-hidden relative">
                    <img
                      className="w-7 h-7 cursor-pointer"
                      src={USER_ICON}
                      alt="user-icon"
                    />
                  </div>
                  <div className="hidden sm:block">
                    <FontAwesomeIcon
                      className="text-neutral-300 hover:text-neutral-100 cursor-pointer"
                      icon={faCaretDown}
                    />
                  </div>
                </div>

                <div
                  className={`bg-black/80 absolute mt-2 -ml-25 w-36 text-neutral-300 rounded overflow-hidden transition duration-200 ease-out ${
                    isDropdownOpen
                      ? "opacity-100 pointer-events-auto"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  <ul className="cursor-pointer pt-3">
                    <li className="hover:underline w-full px-6 py-1">User</li>
                    <li className="hover:underline w-full px-6 py-1">
                      Accounts
                    </li>
                    <li className="hover:underline w-full px-6 py-1">
                      Help Centre
                    </li>
                  </ul>
                  <button
                    className="text-center w-full py-2 cursor-pointer bg-black hover:bg-neutral-900 mt-2"
                    onClick={userSignOut}
                  >
                    Sign out
                  </button>
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
