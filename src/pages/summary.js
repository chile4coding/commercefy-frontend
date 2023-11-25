import Applayout from '@/components/header/layout/Applayout';
import React from 'react'

export default function summary() {
  return (
    <Applayout>
      <div className="flex items-center justify-center ">
        <div className="w-full max-w-md">
          <div className="max-w-md mx-auto mt-10 lg:p-0 p-3 text-right">
            <a href="/generate invoice.html">
              <i
                className="fa-solid fa-chevron-left fa-sm"
                style={{ color: "#000000;" }}></i>{" "}
              Go back
            </a>
          </div>
          <div className="lg:p-0 p-5">
            <h1 className="lg:text-3xl font-semibold text-xl text-center">
              Summary
            </h1>
            <h2 className="font-semibold mt-3">Invoice to</h2>
          </div>
          <div className="lg:p-0 p-5">
            <div className="bg-[#ffffff] shadow-md p-5 rounded-md space-y-2 mt-3">
              <div>
                <h1>Name</h1>
                <h2 className="mt-1 font-semibold text-[#252525]">Ali Chile</h2>
              </div>
              <h1 className="border-[#25252580] border mt-2"></h1>
              <div>
                <h1>Phone Number</h1>
                <h2 className="mt-1 font-semibold text-[#252525]">0814 657 3112</h2>
              </div>
              <h1 className="border-[#25252580] border mt-2"></h1>
              <div>
                <h1>E-mail Address</h1>
                <h2 className="mt-1 font-semibold text-[#252525]">
                  peaceadekola2@gmail.com
                </h2>
              </div>
              <h1 className="border-[#25252580] border mt-2"></h1>
              <div>
                <h1>Delivery Address</h1>
                <h2 className="mt-1 font-semibold text-[#252525]">
                  2, Sanni Street, Osogbo, Lagos State
                </h2>
              </div>
            </div>
            <h2 className="font-semibold mt-3 text-[#252525]">Item</h2>
            <div className="bg-[#ffffff] shadow-md p-5 rounded-md space-y-2 mt-3">
              <div>
                <h1>Item Name</h1>
                <h2 className="mt-1 font-semibold text-[#252525]">Furnitures</h2>
                <h1 className="border-[#25252580] border mt-2"></h1>
                <h1 className="mt-3">Quantity</h1>
                <h2 className="mt-1 font-semibold text-[#252525]">2</h2>
              </div>
            </div>
            <div>
              <div className=" space-y-2 mt-5">
                <div className="flex items-center justify-between">
                  <h1>Sub-Total</h1>
                  <h2 className="mt-1 font-medium text-[#252525]">#0.00</h2>
                </div>
                <h1 className="border-[#25252580] border mt-2"></h1>
                <div className="flex items-center justify-between">
                  <h1>Discount</h1>
                  <h2 className="mt-1 font-medium text-[#252525]">0%</h2>
                </div>
                <h1 className="border-[#25252580] border mt-2"></h1>
                <div className="flex items-center justify-between">
                  <h1>Tax</h1>
                  <h2 className="mt-1 font-medium text-[#252525]">0%</h2>
                </div>
                <h1 className="border-[#25252580] border mt-2"></h1>
                <div className="flex items-center justify-between">
                  <h1>Grand Total</h1>
                  <h2 className="mt-1 font-extrabold text-[#252525]">#0.00</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center p-2 mb-5">
        <button className="text-[#FEFEFE] btn hover:bg-[#4F378B]  hover:text-white bg-[#4F378B] px-16 py-3 rounded-md">
          Preview
        </button>
      </div>
    </Applayout>
  );
}
