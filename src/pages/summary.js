import Applayout from '@/components/header/layout/Applayout';
import Spinner from '@/components/header/spinner/Spinner';
import { setCurrentInvoice, setGenereatedInvoices } from '@/redux/storeSlice';
import { generatePaymentLink, getCookie } from '@/services/request';
import { current } from '@reduxjs/toolkit';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function summary() {
        const { user, currentIvoice } = useSelector((state) => state.store);
        const [loading, setLoading] = useState(false)
        const  [token, setToken] = useState(null)
const router  = useRouter()
const dispatch = useDispatch()

useEffect(()=>{
    const token  = getCookie()

    if(token){
        setToken(token)
    }
    
}, [])



async function preview(){
    setLoading(true)
const res = await generatePaymentLink(currentIvoice, token)

const data  =  await res.json()
dispatch(setGenereatedInvoices(data.updateInvoice));
    router.push("/invoicepaper")
   
    setLoading(false)
}

        
  return (
    <Applayout>
      <main>
        <div className="flex items-center justify-center ">
          <div className="w-full max-w-md">
            <div className="max-w-md mx-auto  lg:p-0 p-3 text-right">
              <span onClick={() => router.back()}>
                <i
                  className="fa-solid fa-chevron-left fa-sm"
                  style={{ color: "#000000;" }}></i>{" "}
                Go back
              </span>
            </div>
            <div className="lg:p-0 px-5">
              <h1 className="lg:text-3xl font-semibold text-xl text-center">
                Summary
              </h1>
              <h2 className="font-semibold mt-0 px-5">Invoice to</h2>
            </div>
            <div className="lg:p-0 px-5">
              <div className="bg-[#ffffff] shadow-md p-5 rounded-md space-y-2 mt-3">
                <div>
                  <h1>Name</h1>
                  <h2 className="mt-1 font-semibold text-[#252525]">
                    {currentIvoice?.name}
                  </h2>
                </div>
                <h1 className="border-[#25252580] border mt-2"></h1>
                <div>
                  <h1>Phone Number</h1>
                  <h2 className="mt-1 font-semibold text-[#252525]">
                    {currentIvoice?.phone}
                  </h2>
                </div>
                <h1 className="border-[#25252580] border mt-2"></h1>
                <div>
                  <h1>E-mail Address</h1>
                  <h2 className="mt-1 font-semibold text-[#252525]">
                    {currentIvoice?.email}
                  </h2>
                </div>
                <h1 className="border-[#25252580] border mt-2"></h1>
                <div>
                  <h1>Delivery Address</h1>
                  <h2 className="mt-1 font-semibold text-[#252525]">
                    {currentIvoice?.address}
                  </h2>
                </div>
              </div>
              <h2 className="font-semibold mt-5 px-5 text-[#252525]">Item</h2>
              <div className="bg-[#ffffff] shadow-md px-5 rounded-md space-y-2 mt-3">
                {currentIvoice?.item.length > 0 &&
                  currentIvoice?.item.map((prod) => {
                    return (
                      <div>
                        <h1>Item Name</h1>
                        <h2 className="mt-1 font-semibold text-[#252525]">
                          {prod.name}
                        </h2>
                        <h1 className="border-[#25252580] border mt-2"></h1>
                        <h1 className="mt-3">Quantity</h1>
                        <h2 className="mt-1 font-semibold text-[#252525]">
                          {prod.qty}
                        </h2>
                      </div>
                    );
                  })}
              </div>
              <div>
                <div className=" space-y-2 mt-3">
                  <div className="flex items-center justify-between">
                    <h1>Sub-Total</h1>
                    <h2 className="mt-1 font-medium text-[#252525]">
                      ₦ {currentIvoice?.subTotal}
                    </h2>
                  </div>
                  <h1 className="border-[#25252580] border mt-2"></h1>
                  <div className="flex items-center justify-between">
                    <h1>Discount</h1>
                    <h2 className="mt-1 font-medium text-[#252525]">
                      {currentIvoice?.discount}%
                    </h2>
                  </div>
                  <h1 className="border-[#25252580] border mt-2"></h1>
                  <div className="flex items-center justify-between">
                    <h1>Tax</h1>
                    <h2 className="mt-1 font-medium text-[#252525]">
                      {currentIvoice?.tax}%
                    </h2>
                  </div>
                  <h1 className="border-[#25252580] border mt-2"></h1>
                  <div className="flex items-center justify-between">
                    <h1>Grand Total</h1>
                    <h2 className="mt-1 font-extrabold text-[#252525]">
                      ₦{currentIvoice?.amount}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center p-2 mb-5">
          <button
            type="button"
            onClick={preview}
            className="text-[#FEFEFE] btn hover:bg-[#4F378B]  hover:text-white bg-[#4F378B] px-16 py-3 rounded-md">
            Preview {loading && <Spinner />}
          </button>
        </div>
      </main>
    </Applayout>
  );
}
