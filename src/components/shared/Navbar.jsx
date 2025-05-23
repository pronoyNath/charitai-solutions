import { Link, useLocation, useNavigate } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import logo from "../../assets/logo.png";
import { navigation } from "../constants";
// import Button from "./Button";
import MenuSvg from "../../assets/svg/MenuSvg";
import { MobileMenu } from "../design/Header";
import { useState } from "react";
import { nav } from "framer-motion/client";

const Navbar = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const currentPath = pathname.pathname;
  console.log("currentPath", currentPath);
  const navigate = useNavigate();
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6   lg:backdrop-blur-sm  ${
        openNavigation ? "bg-[#d2cce4]" : " backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center   px-5 lg:px-7.5 xl:px-10 max-lg:py-4 0">
        <Link to="/">
          <div className="cursor-pointer  flex  items-center   gap-2">
            <a className="block " href="#hero">
              <img src={logo} className="h-12" alt="logo" />
            </a>
            <h3 className=" font-semibold">
              CharitAI
              <span className="block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Solutions
              </span>
            </h3>
          </div>
        </Link>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-[#d2cce4] overflow-y-scroll lg:static lg:flex  lg:mx-auto  lg:bg-transparent`}
        >
          <div className="relative  z-2 flex flex-col items-center  justify-center m-auto lg:flex-row ">
            {navigation.map((item) => (
              <Link key={item.id} to={item.url}>
                <div
                  onClick={handleClick}
                  className={`block relative font-code text-2xl uppercase  transition-colors hover:text-color-1 hover:text-purple-400 ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-base lg:font-semibold ${
                    item.url === pathname.hash ? "z-2 " : ""
                  } ${item.url == currentPath && "text-fuchsia-400 font-bold"} lg:leading-5  xl:px-7`}
                >
                  {item.title}
                </div>
              </Link>
            ))}
          </div>

          <MobileMenu />
        </nav>

        <div className=" ml-auto flex items-center gap-3 md:gap-10 lg:m-0">
          <button
          onClick={()=>navigate("/contact-us")}
            type="submit"
            className="flex justify-center gap-1 lg:gap-2 items-center mx-auto text-xs md:text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-500 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-2 md:px-4 py-1 md:py-2 overflow-hidden border rounded-full group"
          >
            Let's talk
            <svg
              className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
              viewBox="0 0 16 19"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                className="fill-gray-800 group-hover:fill-gray-800"
              ></path>
            </svg>
          </button>

          <button
            className="ml-auto lg:hidden text-black "
            //   px="px-3"
            onClick={toggleNavigation}
          >
            <MenuSvg openNavigation={openNavigation} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
