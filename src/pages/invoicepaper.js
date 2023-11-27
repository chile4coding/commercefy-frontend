import Applayout from '@/components/header/layout/Applayout'
import { getNotification } from '@/redux/storeSlice';
import { socket } from '@/services/request';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

export default function Invoicepaper() {
      const { user, generatedInvoice } = useSelector((state) => state.store);
    const router  = useRouter()

    useEffect(()=>{
  socket.on(`${user?.id}transferNotification`, (message) => {
    dispatch(getNotification(message.notification));
  });
    }, [socket])
    function handleNexNav(){
        router.push("/payment-link")
    }

    function prinInvoice(){
      window.print()
    }
  return (
    <Applayout>
      <div class="flex items-center justify-center ">
        <div class="w-full max-w-md">
          <div class="max-w-md mx-auto   lg:p-0 p-3 text-right">
            <a href="/generate invoice.html">
              <i
                class="fa-solid fa-chevron-left fa-sm"
                style={{ color: "#000000;" }}></i>{" "}
              Go back
            </a>
          </div>
          <div class="bg-[#fefefe] p-5  rounded-md">
            <div>
              <div className=" flex justify-between items-center">
                <h1>Generated From:</h1>
                <button
                  onClick={prinInvoice}
                  className=" btn btn-sm bg-[#4F378B] hover:bg-[#4F378B] text-white">
                  print
                </button>
              </div>
              <p class="font-semibold">COMMERCEFY</p>
            </div>
            <div>
              <h1 class="text-center font-semibold mt-5">
                {user.business[0]?.businessName}
              </h1>
              <h2 class="text-center mt-2 font-extrabold lg:text-3xl text-xl">
                INVOICE
              </h2>
            </div>
            <div class="flex justify-between mt-3">
              <h1>
                Invoice No: <span class="font-bold">{generatedInvoice.id}</span>
              </h1>

              <span class="font-bold">{generatedInvoice.date}</span>
            </div>
            <div class="flex gap-10 mt-3">
              <div>
                <h1 class="font-bold">Invoice To:</h1>
                <h1 class="font-bold">{generatedInvoice.name}</h1>
                <h1 className=" mt-4">{generatedInvoice.address}</h1>

                <h2 class="font-bold">{generatedInvoice.phone}</h2>
              </div>
              <div></div>
            </div>
            <div class="flex items-center gap-4 mt-5 border-gray-400 border p-2">
              <h1>S/N</h1>
              <h2>Description</h2>
              <h2>Price</h2>
              <h2>Qty</h2>
              <h2>Total</h2>
            </div>

            {generatedInvoice.items.map((item) => {
              return (
                <div class="flex gap-8 mt-5">
                  <h1>1</h1>
                  <h2>{item.name}</h2>
                  <h2>₦{item.price}</h2>
                  <h2>{item.qty}</h2>
                  <h2>₦{item.subTotal}</h2>
                </div>
              );
            })}

            <div>
              <div class="flex gap-10">
                <div>
                  <h1 class="font-semibold mt-5">Sub-Total</h1>
                  <p>Tax</p>
                  <p>Grand Total</p>
                </div>
                <div>
                  <h1 class="font-semibold mt-5">
                    ₦{generatedInvoice.subTotal}
                  </h1>
                  <p>₦{generatedInvoice?.tax}</p>
                  <p>₦{generatedInvoice?.amountPaid}</p>
                </div>
              </div>
              <div>
                <h1 class="font-semibold mt-5">Terms and Conditions</h1>
                <p>
                  This invoice is only valid for a week as price of goods are
                  not rigid. Support us by making payments within a week
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center p-2 mb-5">
        <button
          onClick={handleNexNav}
          class="text-[#FEFEFE] bg-[#4F378B] px-16 py-3 rounded-md">
          Generate Payment Link
        </button>
      </div>
    </Applayout>
  );
}
