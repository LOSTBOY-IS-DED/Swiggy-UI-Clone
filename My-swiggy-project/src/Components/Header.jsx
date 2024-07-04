import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { CiDiscount1 } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { CgPokemon } from "react-icons/cg";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const showSideMenu = () => {
    console.log("hi");
    setToggle(true);
  };

  const hideSideMenu = () => {
    setToggle(false);
  };

  const links = [
    {
      icons: <IoSearch />,
      name: "Search",
    },
    {
      icons: <CiDiscount1 />,
      name: "Offers",
      sup: "NEW",
    },
    {
      icons: <CgPokemon />,
      name: "Help",
    },
    {
      icons: <CiUser />,
      name: "Sign in",
    },
    {
      icons: <IoCartOutline />,
      name: "Cart",
      sup: "(2)",
    },
  ];

  return (
    <>
      <div
        className=" black-overlay w-full h-full fixed duration-500"
        onClick={hideSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-[500px] bg-white h-full absolute duration-[400ms]"
          style={{
            left: toggle ? "0%" : "-100%",
          }}
        ></div>
      </div>
      <header className="p-[15px] shadow-xl text-[#686b78] sticky top-0 bg-white z-[9999]">
        <div className="max-w-[1200px] mx-auto flex items-center">
          <div className="w-[100px]">
            <img src="Images/logo.png"></img>
          </div>
          <div className="">
            <span className="font-bold border-b-[3px] border-[black]">
              {" "}
              Tin Plate
            </span>{" "}
            Jamshedpur, Jharkhand, India
            <RxCaretDown
              onClick={showSideMenu}
              fontSize={25}
              className="font-bold inline text-[#fc8019] cursor-pointer"
            ></RxCaretDown>
          </div>
          <nav className="flex list-none gap-10 ml-auto font-semibold text-[18px]">
            {links.map((link, index) => {
              return (
                <li
                  key={index}
                  className="flex cursor-pointer hover:text-[#fc8019] items-center gap-2"
                >
                  {link.icons}
                  {link.name}
                  <sup>{link.sup}</sup>
                </li>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
