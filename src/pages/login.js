import Applayout from "@/components/header/layout/Applayout";
import Spinner from "@/components/header/spinner/Spinner";
import {
  searchClient,
  setUser,
  setCurrentVisitor,
  
  setCurrentClient,
  setCurrentInvoice,
  setGenereatedInvoices,
  getInvoice,
  getWithdrawal,
  getOwnerClients,
  getNotification,
  clearNotification,
  getTransactions,
  filterTransaction,
  allTransaction,
  
} from "@/redux/storeSlice";
import { login } from "@/services/request";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
    const [reg, setReg] = useState({
      loading: false,
      email: "",
      password: "",
    });
    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(()=>{
     
      

    },[])

    function handleInputChange(e) {
      const { value, name } = e.target;
      setReg({ ...reg, [name]: value, checkPassword: false });
    }

    async function handleSUbmit(e) {
      e.preventDefault();
 
      const { email, password } = reg;
      if (
        Boolean(
          email.trim() && Boolean(password.trim())
        )
      ) {
        setReg({ ...reg, loading: true });
        const response = await login(reg);

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
          dispatch(setUser(data.findUser));

          Cookies.set("_commercefy", data.token);

          window.location.href = "/dashboard";
           setReg({
             ...reg,
             password: "",
             cPassword: "",
             email: "",
             loading: false,
           });
        }else{
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
      }

           setReg({
             ...reg,
             loading: false,
           });
    }
  
  return (
    <Applayout>
      <div className="flex items-center justify-center ">
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
        <div className="w-full max-w-md">
          <div>
            <h1 className="uppercase font-bold text-center text-[#ffffff] -mt-5">
              commercefy
            </h1>
          </div>
          <div className="bg-[#ffffff] px-5 py-10 rounded-md mt-5">
            <div className="text-left">
              <h1 className="text-2xl font-bold text-[#252525] text-center">
                Login to your account
              </h1>
            </div>
            <div>
              <div className="">
                <form onSubmit={handleSUbmit}>
                  <div className="mt-10">
                    <div className="mb-7">
                      <label
                        htmlFor="email"
                        className="block text-gray-700 text-sm font-medium mb-2"></label>
                      <div>
                        <input
                          type="text"
                          id="email"
                          name="email"
                          onChange={handleInputChange}
                          value={reg.email}
                          required
                          className="w-full pl-4 pr-4 py-2 border focus:outline-none focus:border-[#F5F0FF] rounded-md bg-[#F5F0FF] placeholder:text-[#0000004D] focus:bg-[#ffffff]"
                          placeholder="Enter E-mail"
                        />
                      </div>
                    </div>

                    <div className="mb-7">
                      <label
                        htmlFor="password"
                        className="block text-gray-700 text-sm font-medium mb-2"></label>
                      <div>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          onChange={handleInputChange}
                          value={reg.password}
                          required
                          className="w-full pl-4 pr-4 py-2 border focus:outline-none focus:border-[#F5F0FF] rounded-md bg-[#F5F0FF] placeholder:text-[#0000004D] focus:bg-[#ffffff]"
                          placeholder="Your Password"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    <input
                      type="checkbox"
                      id="exampleCheckbox"
                      name="exampleCheckbox"
                      className="form-checkbox h-5 w-5 text-blue-500"
                    />
                    <label
                      htmlFor="exampleCheckbox"
                      className="ml-2 text-[#252525]">
                      Remember me
                    </label>
                  </div>
                  <div className="text-center mt-3 p-2">
                    <button className="text-[#FEFEFE] bg-[#4F378B]  w-full flex items-center justify-center gap-4 py-3 rounded-md">
                      Login {reg.loading && <Spinner />}
                    </button>
                  </div>
                </form>
                <div className="flex space-x-3 items-center justify-center mt-5">
                  <h1 className="text-[#252525]">Can't login?</h1>
                  <a href="#!" className="text-[#4F378B]">
                    Forgot password
                  </a>
                </div>
                <div className="flex space-x-3 items-center justify-center mt-5">
                  <h1 className="text-[#252525]">Don’t have an account yet?</h1>
                  <Link href="/signup" className="text-[#4F378B]">
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Applayout>
  );
}
