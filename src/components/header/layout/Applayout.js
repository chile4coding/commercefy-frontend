import React, { useEffect, useState } from "react";
import Header from "../header";
import ActiveLink from "./ActiveLink";
import LoginHeader from "../LoginHeader";
import { getCookie } from "@/services/request";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
export default function Applayout({ children }) {
  const [token, setToken] = useState(null);
  const { user, transactionFilter, transactions } = useSelector(
    (state) => state.store
  );

  const router = useRouter();
  useEffect(() => {
    const token = getCookie();
    setToken(token);
  }, []);

  function invoice() {
    if (!user.KYC) {
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

      router.push("/dashboard")
      return;
    }

    router.push("/invoice");
  }

  function clients() {
     if (!user.KYC) {
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
    <main className="  flex flex-col">
      <div>{Boolean(token) ? <LoginHeader /> : <Header />}</div>

      {Boolean(token) ? (
        <div className=" max-w-md  mx-auto w-full mt-4 ">
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
          <div className="flex justify-between   mt-6">
            <span className=" font-semibold w-1/2 py-2  text-[#252525] text-center hover:bg-[#4F378B1A] lg:text-base text-sm  rounded-md hover:bg-[#e3e2e5]">
              <Link href={"/dashboard"}>Wallet</Link>
            </span>

            <span
              onClick={invoice}
              className=" cursor-pointer font-semibold w-1/2 py-2  text-[#252525] text-center hover:bg-[#4F378B1A] lg:text-base text-sm  rounded-md hover:bg-[#e3e2e5]">
              <span>Invoice</span>
            </span>

            <span
              onClick={clients}
              className=" cursor-pointer font-semibold w-1/2 py-2  text-[#252525] text-center hover:bg-[#4F378B1A] lg:text-base text-sm  rounded-md hover:bg-[#e3e2e5]">
              <span>My Clients</span>
            </span>
          </div>
        </div>
      ) : null}
      <div className="">{children}</div>
    </main>
  );
}
