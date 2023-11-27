import React, { useEffect, useState } from "react";
import ActiveLink from "@/components/header/layout/ActiveLink";
import { MdDashboardCustomize } from "react-icons/md";
import { RiMenu4Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { setUser, allTransaction, getTransactions } from "@/redux/storeSlice";
import { clearCookie, doKYC, getCookie } from "@/services/request";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import { GoArrowUpRight } from "react-icons/go";
import { TiBusinessCard } from "react-icons/ti";
import { IoPersonAddSharp } from "react-icons/io5";


function DashboardDrawer() {
  const { user, transactionFilter, transactions, notifications } = useSelector(
    (state) => state.store
  );
  const dispatch = useDispatch();
  const [token, setToken] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = getCookie();
    setToken(token);
  }, []);

  function logout() {
    clearCookie();

    dispatch(allTransaction([]));
    dispatch(getTransactions([]));

    window.location.href = "/login";
  }

  async function kyc() {
    const detail = {
      email: user.email,
      firstname: user.firstName,
      lastname: user.lastName,
    };
    if (
      Boolean(detail.email) &&
      Boolean(detail.firstname) &&
      Boolean(detail.lastname)
    ) {
      const response = await doKYC(detail, token);
      const data = await response.json();

      if (response.status === 200) {
        toast.success(data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

        window.location.href = data.session.redirectUrl;
      } else {
        toast.error(data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } else {
      toast.error("Complete Your profile first", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }

  function invoice() {
    if (!user?.KYC) {
      toast.error("Complete your KYC ", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      router.push("/dashboard");
      return;
    }

    router.push("/invoice");
  }

  function clients() {
    if (!user?.KYC) {
      toast.error("Complete your KYC ", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      router.push("/dashboard");
      return;
    }

    router.push("/clients");
  }

  return (
    <div className="drawer">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content"></div>
      <div className="drawer-side z-10">
        <label
          htmlFor="my-drawer-1"
          aria-label="close sidebar"
          className="drawer-overlay"></label>
        <ul className="menu p-4  flex flex-col justify-between  h-[100dvh]  bg-[#4F378B]  text-white">
          <div>
            <ActiveLink href={"/dashboard"}>
              <MdDashboardCustomize />
              Dashboard
            </ActiveLink>
            <ActiveLink
              href="/profile"
              className="block py-2 px-3 lg:text-black text-[#ffffff] md:p-0"
              aria-current="page">
              <i className="fa-regular fa-circle-user lg:text-black text-[#ffffff]"></i>{" "}
              My Profile
            </ActiveLink>
            <ActiveLink
              href="/businessprofile"
              className="block py-2 px-3 lg:text-black text-[#ffffff] md:p-0"
              aria-current="page">
              <TiBusinessCard /> My Business
            </ActiveLink>

            <span
              onClick={invoice}
              className=" cursor-pointer flex gap-2 items-center py-2 my-3 px-3 lg:text-black text-[#ffffff]">
              <i className="fa-solid fa-arrow-up-right-from-square lg:text-black text-[#ffffff]"></i>{" "}
              Invoice
            </span>
            <span
              onClick={clients}
              className=" cursor-pointer py-2 px-3 my-3 flex items-center gap-2 lg:text-black text-[#ffffff]">
              <IoPersonAddSharp />
              Clients
            </span>
            {!user?.KYC && (
              <span
                onClick={kyc}
                className="flex cursor-pointer   items-center gap-2 py-2 px-3 lg:text-black text-[#ffffff]">
                <GoArrowUpRight  className=" font-bold text-lg"/>
                Complete KYC
              </span>
            )}
          </div>
          <span
            onClick={logout}
            className=" cursor-pointer block text-[#B3261E] rounded bg-[#ffffff] p-2">
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
  const { user, transactionFilter, transactions, notifications } = useSelector(
    (state) => state.store
  );
  const dispatch = useDispatch();
  const [token, setToken] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = getCookie();
    setToken(token);
  }, []);

  function logout() {
    clearCookie();

    // dispatch(setUser([]));
    dispatch(allTransaction([]));
    dispatch(getTransactions([]));

    window.location.href = "/login";
  }

  async function kyc() {
    const detail = {
      email: user.email,
      firstname: user.firstName,
      lastname: user.lastName,
    };
    if (
      Boolean(detail.email) &&
      Boolean(detail.firstname) &&
      Boolean(detail.lastname)
    ) {
      const response = await doKYC(detail, token);
      const data = await response.json();

      if (response.status === 200) {
        toast.success(data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        window.location.href = data.session.redirectUrl;
      } else {
        toast.error(data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } else {
      toast.error("Complete Your profile first", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }

  return (
    <>
      <DashboardDrawer />
      <header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <nav className="w-full z-20 shadow-sm bg-[#0000001a]">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div className=" ">
              <h1 className="text-xl text-[#000000] font-normal flex gap-4">
                Welcome!{" "}
                <span className=" font-bold text-[#4F378B]">
                  {" "}
                  {user?.firstName}
                </span>
              </h1>
            </div>
            <div className=" relative flex items-center md:order-2  md:space-x-0 rtl:space-x-reverse">
              <a
                onClick={() => router.push("/notifications")}
                className=" cursor-pointerbg-[#4F378B1A] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  text-xs  py-2 text-center">
                <i
                  className="fa-regular fa-bell fa-xl cursor-pointer  "
                  style={{ color: "red" }}></i>
              </a>
              <span className=" font-bold  absolute top-0  left-4   rounded-badge bottom-4   flex justify-center  items-center flex-col">
                {" "}
             
                {notifications && notifications.length} 
              </span>
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
                <ActiveLink
                  href="/profile"
                  className="block py-2 px-3 lg:text-black text-[#ffffff] md:p-0"
                  aria-current="page">
                  <i className="fa-regular fa-circle-user lg:text-black text-[#ffffff]"></i>{" "}
                  My Profile
                </ActiveLink>
                {!user?.KYC && (
                  <span
                    onClick={kyc}
                    className=" cursor-pointer block py-2 px-3 lg:text-black text-[#ffffff]">
                    <i className="fa-solid fa-arrow-up-right-from-square lg:text-black text-[#ffffff]"></i>{" "}
                    Complete KYC
                  </span>
                )}

                <ActiveLink
                  href="/about-us"
                  className="block py-2 px-3 lg:text-black text-[#ffffff]">
                  <i className="fa-solid fa-circle-info lg:text-black text-[#ffffff]"></i>{" "}
                  About Us
                </ActiveLink>

                <li>
                  <ActiveLink
                    href={"/terms-codition"}
                    className="block py-2 px-3 lg:text-black text-[#ffffff]">
                    <i className="fa-solid fa-file-circle-check lg:text-black text-[#ffffff]"></i>{" "}
                    Terms and Conditions
                  </ActiveLink>
                </li>
                <li>
                  <span
                    onClick={logout}
                    className=" cursor-pointer block text-[#B3261E] rounded bg-[#ffffff] p-2">
                    <i
                      className="fa-solid fa-arrow-right-from-bracket"
                      style={{ color: "#B3261E" }}></i>{" "}
                    Log Out
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
