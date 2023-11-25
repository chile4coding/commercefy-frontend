import Applayout from '@/components/header/layout/Applayout'
import React from 'react'

export default function PaymentLink() {
  return (
    <Applayout>
      <div className="flex items-center justify-center ">
        <div className="w-full max-w-md">
          <div className="max-w-md mx-auto mt-10 lg:p-0 p-3 text-right">
            <a href="/invoice summary.html">
              <i
                className="fa-solid fa-chevron-left fa-sm"
                style={{ color: " #000000" }}></i>{" "}
              Go back
            </a>
          </div>
          <div className="lg:p-0 p-5">
            <h2 className="font-semibold mt-3 lg:text-xl text-base">
              Invoice ID:{" "}
              <span className="text-[#4F378B] font-semibold">123456</span>
            </h2>
            <div>
              <h3 className="text-center mt-3 font-semibold lg:text-lg text-sm">
                Send this link to your client to receive payment
              </h3>
            </div>
          </div>
          <div className="flex justify-center">
            <h1 className="text-center mt-5 text-[#6750A4] font-semibold bg-[#4F378B1A] p-4 w-fit rounded-md">
              jkyz213.uioh
            </h1>
          </div>
          <div className="flex justify-center mt-5">
            <h1 className="text-[#252525]">
              <i
                className="fa-solid fa-link fa-xs"
                style={{ color: " #252525" }}></i>{" "}
              Copy Link
            </h1>
          </div>
          <h1 className="text-center mt-4 text-[#252525] font-medium">
            Share link via
          </h1>
          <div className="flex justify-center mt-5 items-center space-x-5">
            <i
              className="fa-brands fa-whatsapp fa-md"
              style={{ color: " #040c1b" }}></i>
            <i
              className="fa-brands fa-instagram fa-md"
              style={{ color: " #0e2448" }}></i>
            <i
              className="fa-regular fa-envelope fa-md"
              style={{ color: " #030c1c" }}></i>
            <i
              className="fa-brands fa-x-twitter fa-mf"
              style={{ color: " #223d6d" }}></i>
          </div>
        </div>
      </div>
      <div className="text-center  mt-6">
        <button className="text-[#FEFEFE] hover:text-[#FEFEFE] bg-[#4F378B] hover:bg-[#4F378B] px-32 py-3 rounded-md">
          Go back
        </button>
      </div>
    </Applayout>
  );
}
