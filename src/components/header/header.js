import React from "react";
import ActiveLink from "./layout/ActiveLink";
import {
  MdDashboardCustomize,
  MdOutlineDashboardCustomize,
} from "react-icons/md";
import { RiMenu4Fill } from "react-icons/ri";

import { RiDashboard3Fill, RiDashboardLine } from "react-icons/ri";

function Drawer() {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content"></div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"></label>
        <ul className="menu p-4  flex flex-col justify-between  h-[100dvh]  bg-[#4F378B]  text-white">
          <div>
            <ActiveLink
              href="/login"
              className="block py-2 px-3 lg:text-black text-[#ffffff] md:p-0"
              aria-current="page">
              <i className="fa-regular fa-circle-user lg:text-black text-[#ffffff]"></i>{" "}
              Login
            </ActiveLink>
            <ActiveLink
              href="/signup"
              className="block py-2 px-3 lg:text-black text-[#ffffff] md:p-0"
              aria-current="page">
              <i className="fa-regular fa-circle-user lg:text-black text-[#ffffff]"></i>{" "}
              Sing up
            </ActiveLink>

            <ActiveLink
              href="/profile.html"
              className="block py-2 px-3 lg:text-black text-[#ffffff] md:p-0"
              aria-current="page">
              <i className="fa-regular fa-circle-user lg:text-black text-[#ffffff]"></i>{" "}
              Account
            </ActiveLink>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <nav className="  w-full z-20 top-0 start-0 shadow-sm bg-[#4F378B1A]">
      <Drawer />
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <ActiveLink href={"/"}>
          <span
            className="uppercase text-2xl text-[#4F378B] font-extrabold">
            commercefy
          </span>
        </ActiveLink>

        <div className=" md:hidden lg:hidden xl:hidden flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <label htmlFor="my-drawer" className=" cursor-pointer drawer-button">
          <RiMenu4Fill className=" text-lg"/>
           
          </label>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          >
          <ul className="flex lg:items-center flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 lg:bg-opacity-0 ] text-[#4F378B] ">
            <ActiveLink href={"/login"}>Sign in</ActiveLink>
            <ActiveLink href={"/sign-up"}> Sign up</ActiveLink>
            <ActiveLink href={"/about-us"}> About us</ActiveLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}
