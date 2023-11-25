import React from 'react'
import ActiveLink from "@/components/header/layout/ActiveLink";
import { MdDashboardCustomize } from "react-icons/md";
import { RiMenu4Fill } from "react-icons/ri";

function DashboardDrawer(){
  return (
    <div className="drawer">
      <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content"></div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-1"
          aria-label="close sidebar"
          className="drawer-overlay"></label>
        <ul className="menu p-4  flex flex-col justify-between  h-[100dvh]  bg-[#4F378B]  text-white">
          <div>
            <ActiveLink href={"/"}>
              <MdDashboardCustomize />
              Dashboard
            </ActiveLink>
            <ActiveLink
              href="/profile.html"
              className="block py-2 px-3 lg:text-black text-[#ffffff] md:p-0"
              aria-current="page">
              <i className="fa-regular fa-circle-user lg:text-black text-[#ffffff]"></i>{" "}
              My Profile
            </ActiveLink>

            <ActiveLink
              href="/know your customer.html"
              className="block py-2 px-3 lg:text-black text-[#ffffff]">
              <i className="fa-solid fa-arrow-up-right-from-square lg:text-black text-[#ffffff]"></i>{" "}
              Invoice
            </ActiveLink>
            <ActiveLink
              href="/know your customer.html"
              className="block py-2 px-3 lg:text-black text-[#ffffff]">
              <i className="fa-solid fa-arrow-up-right-from-square lg:text-black text-[#ffffff]"></i>{" "}
              Clients
            </ActiveLink>
            <ActiveLink
              href="/know your customer.html"
              className="block py-2 px-3 lg:text-black text-[#ffffff]">
              <i className="fa-solid fa-arrow-up-right-from-square lg:text-black text-[#ffffff]"></i>{" "}
              Complete KYC
            </ActiveLink>

      

     
          </div>
          <span className=" cursor-pointer block text-[#B3261E] rounded bg-[#ffffff] p-2">
            <i
              className="fa-solid fa-arrow-right-from-bracket"
              style={{ color: "#B3261E" }}></i>{" "}
            Log Out
          </span>{" "}
        </ul>
      </div>
    </div>
  );
}

export default function LoginHeader() {
  return (
    <>
      <DashboardDrawer />
      <header>
        <nav className="w-full z-20 shadow-sm bg-[#0000001a]">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div>
              <h1 className="text-xl text-[#000000] font-normal">Welcome!</h1>
            </div>
            <div className="flex items-center md:order-2  md:space-x-0 rtl:space-x-reverse">
              <a
                href="/notification.html"
                className="bg-[#4F378B1A] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  text-xs  py-2 text-center">
                <i
                  className="fa-regular fa-bell fa-xl"
                  style={{ color: "#0c254f" }}></i>
              </a>
              <div
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="cursor-pointer inline-flex items-center p-2 w-10 h-10 justify-center text-[#141B34] lg:hidden xl:hidden"
                aria-controls="navbar-sticky"
                aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <label
                  htmlFor="my-drawer-1"
                  className="  cursor-pointer drawer-button">
                  <RiMenu4Fill />{" "}
                </label>
              </div>
            </div>
            <div
              className="items-center justify-between hidden w-full lg:flex lg:w-auto md:order-1"
              id="navbar-sticky">
              <ul className="  lg:flex lg:items-center flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 lg:bg-opacity-0 bg-[#4F378B]">
                <li>
                  <a
                    href="/profile.html"
                    className="block py-2 px-3 lg:text-black text-[#ffffff] md:p-0"
                    aria-current="page">
                    <i className="fa-regular fa-circle-user lg:text-black text-[#ffffff]"></i>{" "}
                    My Profile
                  </a>
                </li>
                <li>
                  <a
                    href="/know your customer.html"
                    className="block py-2 px-3 lg:text-black text-[#ffffff]">
                    <i className="fa-solid fa-arrow-up-right-from-square lg:text-black text-[#ffffff]"></i>{" "}
                    Complete KYC
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 lg:text-black text-[#ffffff]">
                    <i className="fa-solid fa-circle-info lg:text-black text-[#ffffff]"></i>{" "}
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 lg:text-black text-[#ffffff]">
                    <i className="fa-solid fa-file-circle-check lg:text-black text-[#ffffff]"></i>{" "}
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block text-[#B3261E] rounded bg-[#ffffff] p-2">
                    <i
                      className="fa-solid fa-arrow-right-from-bracket"
                      style={{ color: "#B3261E" }}></i>{" "}
                    Log Out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
