import Applayout from "@/components/header/layout/Applayout";
import Spinner from "@/components/header/spinner/Spinner";
import { requestOTP, verifyOtp } from "@/services/request";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";

export default function OTP() {
  const { visitor } = useSelector((state) => state.store);
  const[loading, setLoading] = useState(false);
  const[resend, setResend] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ]; // Refs to focus inputs

  const router  = useRouter()
  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to the next input field
    if (value && index < otp.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

    const handlePaste = (e) => {
      e.preventDefault();
      const pastedData = e.clipboardData.getData("Text").slice(0, 6);
      const newOtp = [...otp];

      for (let i = 0; i < pastedData.length; i++) {
        newOtp[i] = pastedData[i];
      }

      setOtp(newOtp);

      submit(newOtp.join(""));
    };

    
  async function submit(otp) {
    setLoading(true);

    const response = await verifyOtp( otp);
    const data = await response.json();

    console.log(data)

    if (response.status === 200) {
  router.push("/login")
      
    } else {
    
    }

    setLoading(false);
  }

   async function handleSubmit(e) {
     e.preventDefault();

     if (otp.join("").length !== 6) {
       return;
     }
     submit(otp.join(""));
   }

  async function resendOtp() {
    setResend((prev) => false);
    const response = await requestOTP(visitor);
    if (response.status === 200) {
      setResend(prev=>true)
    } else {
      setResend((prev) => false);
    }
  }

  return (
    <Applayout>
      <div className="flex items-center justify-center ">
        <div className="w-full max-w-md">
          <div className="bg-[#ffffff] px-5 py-10 rounded-md mt-5 shadow-sm">
            <div className="text-left">
              {resend && (
                <div className="  text-center font-bold">OTP sent</div>
              )}

              <h1 className="text-2xl font-bold text-[#000000] text-center">
                You’re almost there
              </h1>
              <h2 className="text-[#000000] mt-3 font-semibold text-center">
                {" "}
                Enter your OTP to be verified
              </h2>
            </div>
            <div>
              <div className="mt-10">
                <form>
                  <div className="flex items-center justify-between">
                    {otp.map((digit, index) => (
                      <div className="mb-4">
                        <input
                          key={index}
                          class="w-10  border rounded-md text-center focus:outline-none focus:border-blue-500"
                          placeholder="0"
                          type="text"
                          maxLength={1}
                          value={digit}
                          onChange={(e) =>
                            handleOtpChange(index, e.target.value)
                          }
                          onPaste={handlePaste}
                          ref={inputRefs[index]}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="text-center mt-3 p-2 ">
                    <button class="text-[#FEFEFE] bg-[#4F378B] w-full py-3 rounded-md flex items-center justify-center gap-4">
                      Continue {loading && <Spinner />}
                    </button>
                  </div>

                  <div className=" flex justify-end p-2 cursor-pointer text-[#4F378B] ">
                    <span onClick={resendOtp}>Resend </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Applayout>
  );
}
