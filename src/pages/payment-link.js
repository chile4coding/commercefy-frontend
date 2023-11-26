import Applayout from '@/components/header/layout/Applayout'
import { Router, useRouter } from 'next/router';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';

export default function PaymentLink() {
          const { user, generatedInvoice } = useSelector(
            (state) => state.store
          );

          const  [copy, setCopy] = useState(false)
function pay(){
    window.location.href = generatedInvoice.paymentLink
}

const  router  = useRouter()
function copyToClipboard(text) {

    setCopy(true)
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("Text copied to clipboard");
    })
    .catch((error) => {
      console.error("Failed to copy text to clipboard:", error);
    });

    setCopy(false)
}

function  openWhatsapp(){
      window.open(`https://wa.me/${generatedInvoice.phone}`, "_blank");

}

function openEmail() {
  window.open(`mailto:${generatedInvoice.email}`, "_blank");
}

function openTwitter() {
  window.open("https://twitter.com/", "_blank");
}

function openInstagram() {
  window.open("https://www.instagram.com/", "_blank");
}

function NavBack(){
    router.push("/dashboard")
}
  return (
    <Applayout>
      <div className="flex items-center justify-center ">
        <div className="w-full max-w-md">
          <div className="max-w-md mx-auto  lg:p-0 p-3 text-right">
            <span onClick={()=>router.back()}>
              <span onClick={()=>router.back()}
                className="fa-solid fa-chevron-left fa-sm"
                style={{ color: " #000000" }}></span>{" "}
              Go back
            </span>
          </div>
          <div className="lg:p-0 p-5">
            <h2 className="font-semibold mt-3 lg:text-xl text-base">
              Invoice ID:{" "}
              <span className="text-[#4F378B] font-semibold">
                {generatedInvoice.id}
              </span>
            </h2>
            <div>
              <h3 className="text-center mt-3 font-semibold lg:text-lg text-sm">
                Send this link to your client to receive payment
              </h3>
              <h3 className="text-center mt-3 font-semibold lg:text-lg text-sm">
                Check your email for the payment link
              </h3>
            </div>
          </div>
          <div className="flex justify-center">
            <h1
              onClick={pay}
              className=" cursor-pointer text-center flex break-after-all break-all mt-5 text-[#6750A4] font-semibold bg-[#4F378B1A] p-4 w-fit rounded-md">
              {generatedInvoice.paymentLink}
            </h1>
          </div>
          {copy && <h2 className=" text-center">Link copied</h2>}
          <div className="flex justify-center mt-5">
            <span
              onClick={copyToClipboard.bind(this, generatedInvoice.paymentLink)}
              className="text-[#252525]">
              <i
                className="fa-solid fa-link fa-xs"
                style={{ color: " #252525" }}></i>{" "}
              Copy Link
            </span>
          </div>
          <h1 className="text-center mt-4 text-[#252525] font-medium">
            Share link via
          </h1>
          <div className="flex justify-center mt-5 items-center space-x-5">
            <i
              onClick={openWhatsapp}
              className="fa-brands fa-whatsapp fa-md"
              style={{ color: " #040c1b" }}></i>
            <i
              onClick={openInstagram}
              className="fa-brands fa-instagram fa-md"
              style={{ color: " #0e2448" }}></i>
            <i
              onClick={openEmail}
              className="fa-regular fa-envelope fa-md"
              style={{ color: " #030c1c" }}></i>
            <i
              onClick={openTwitter}
              className="fa-brands fa-x-twitter fa-mf"
              style={{ color: " #223d6d" }}></i>
          </div>
        </div>
      </div>
      <div className="text-center  mt-6" onClick={NavBack}>
        <button className="text-[#FEFEFE] hover:text-[#FEFEFE] bg-[#4F378B] hover:bg-[#4F378B] px-32 py-3 rounded-md">
          Done
        </button>
      </div>
    </Applayout>
  );
}
