import Applayout from "@/components/header/layout/Applayout";
import Spinner from "@/components/header/spinner/Spinner";
import { signupOwner } from "@/services/request";
import { data } from "autoprefixer";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { setCurrentVisitor } from "@/redux/storeSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

export default function signup() {
  const [reg, setReg] = useState({
    loading: false,
    email: "",
    password: "",
    cPassword: "",
    checkPassword: false,
  });
  const router  = useRouter()
  const dispatch = useDispatch()

  function handleInputChange(e) {
    const { value, name } = e.target;
    setReg({ ...reg, [name]: value, checkPassword: false });
  }

  async function handleSUbmit(e) {
    e.preventDefault();

    if (reg.password !== reg.cPassword) {
        toast.error("Password must match", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      setReg({ ...reg, checkPassword: true });

      return;
    }
    const { email, cPassword, password } = reg;
    if (
      Boolean(
        email.trim() && Boolean(cPassword.trim()) && Boolean(password.trim())
      )
    ) {

      
    setReg({ ...reg,loading: true });
      const response = await signupOwner(reg);

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

       dispatch(setCurrentVisitor(reg.email))
       
       router.push("/otp")
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

    setReg({ ...reg, password: "", cPassword: "", email: "", loading: false });
  }
  return (
    <Applayout>
      <div className="flex items-center justify-center  ">
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
            <h1 className="uppercase font-bold text-center text-[#ffffff] ">
              commercefy
            </h1>
          </div>
          <div className="bg-[#ffffff] px-5 pb-10 rounded-md ">
            <div className="text-left">
              <h1 className="text-2xl font-bold text-[#252525] text-center">
                Register for an account
              </h1>
            </div>
            <div>
              <div>
                <form>
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
                          placeholder="E-mail Address"
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
                          required
                          value={reg.password}
                          className={`w-full pl-4 pr-4 py-2 border focus:outline-none focus:border-[#F5F0FF] rounded-md bg-[#F5F0FF] placeholder:text-[#0000004D] focus:bg-[#ffffff] ${
                            reg.checkPassword
                              ? "boder border-red-500"
                              : "border"
                          }`}
                          placeholder="Create Password"
                        />
                      </div>
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="password"
                        className="block text-gray-700 text-sm font-medium mb-2"></label>
                      <div>
                        <input
                          type="password"
                          id="cPassword"
                          name="cPassword"
                          onChange={handleInputChange}
                          required
                          value={reg.cPassword}
                          className={`w-full pl-4 pr-4 py-2 border focus:outline-none focus:border-[#F5F0FF] rounded-md bg-[#F5F0FF] placeholder:text-[#0000004D] focus:bg-[#ffffff] ${
                            reg.checkPassword
                              ? "boder border-red-500"
                              : "border"
                          }`}
                          placeholder="Confirm Password"
                        />
                      </div>
                    </div>
                  </div>
                </form>
                <div>
                  <h1 className="text-center text-sm mt-3">
                    By signing up, you confirm that you’ve read and accepted our
                    Term of use and Privacy Policy
                  </h1>
                </div>
                <div className="text-center mt-3 p-2">
                  <button
                    onClick={handleSUbmit}
                    id="reg-btn"
                    className=" btn text-[#FEFEFE] bg-[#4F378B] px-28 py-3 rounded-md">
                    Register {reg.loading && <Spinner />}
                  </button>
                </div>
                <div className="flex space-x-3 items-center justify-center mt-5">
                  <h1 className="text-[#252525]">Already have an account?</h1>
                  <Link href="/login" className="text-[#4F378B]">
                    Log in
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
