import Applayout from '@/components/header/layout/Applayout'
import Modal from '@/components/header/modal/Modal'
import { IoAddCircleOutline } from "react-icons/io5";

import React, { useState } from 'react'

export default function GenerateInvoice() {

    
  return (
    <Applayout>
      <div className="flex items-center justify-center flex-col">
        <Modal />
        <div class="w-full max-w-md">
          <div class="max-w-md mx-auto mt-10 lg:p-0 p-3 text-right">
            <a href="/dashboard.html">
              <i
                class="fa-solid fa-chevron-left fa-sm"
                style={{ color: "#000000;" }}></i>{" "}
              Go back
            </a>
          </div>
          <div class="lg:p-0 p-5">
            <h1 class="lg:text-3xl font-semibold text-xl">Generate Invoice</h1>
            <h2 class="font-semibold mt-3">
              Fill in the details below to generate invoice
            </h2>
          </div>
        </div>

        <form>
          <div class="mt-5 lg:p-0 p-5">
            <div class="mb-7">
              <label
                for="invoicenumber"
                class="block text-gray-700 text-sm font-medium mb-2">
                Invoice Number
              </label>
              <div>
                <input
                  type="text"
                  id="invoicenumber"
                  name="invoicenumber"
                  class="w-full pl-4 pr-4 py-2 border border-t-0 border-r-0 border-l-0"
                />
              </div>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <div class="mb-7">
                <label
                  for="date"
                  class="block text-gray-700 text-sm font-medium mb-2">
                  Date Created
                </label>
                <div>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    class="w-full pl-4 pr-4 py-2 border border-t-0 border-r-0 border-l-0"
                  />
                </div>
              </div>
              <div class="mb-7">
                <label
                  for="date"
                  class="block text-gray-700 text-sm font-medium mb-2">
                  Due Date
                </label>
                <div>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    class="w-full pl-4 pr-4 py-2 border border-t-0 border-r-0 border-l-0"
                  />
                </div>
              </div>
            </div>
            <h1 class="lg:text-2xl font-semibold text-xl mb-7">Bill to</h1>
            <div class="mb-7">
              <label
                for="birth"
                class="block text-gray-700 text-sm font-medium mb-2">
                Add new recipient
              </label>
              <div class="mt-5">
                <button
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                  class="cursor-pointer bg-[#4F378B1A] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center">
                  <i
                    class="fa-solid fa-plus fa-lg"
                    style={{ color: "#252525" }}></i>
                </button>
              </div>
            </div>
            <div class="mb-7">
              <label
                for="exampleSelect"
                class="block text-sm font-medium text-gray-700">
                Add existing recipient
              </label>
              <select
                id="exampleSelect"
                name="exampleSelect"
                class="mt-1 block w-full p-2 border rounded-md shadow-sm bg-gray-100 focus:outline-none focus:border-blue-500">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <h1 class="lg:text-2xl font-semibold text-xl mb-7">Add Items</h1>
            <div class="mb-7">
              <label
                for="occupation"
                class="block text-[#252525] text-sm font-medium mb-2">
                Product Name
              </label>
              <div>
                <input
                  type="text"
                  id="occupation"
                  name="occupation"
                  class="w-full pl-4 pr-4 py-2 rounded-md"
                />
              </div>
            </div>
            <div class="mb-7">
              <label
                for="occupation"
                class="block text-[#252525] text-sm font-medium mb-2">
                Enter Amount
              </label>
              <div>
                <input
                  type="text"
                  id="occupation"
                  name="occupation"
                  class="w-full pl-4 pr-4 py-2 rounded-md"
                />
              </div>
            </div>
            <div class="mb-7">
              <label
                for="occupation"
                class="block text-[#252525] text-sm font-medium mb-2">
                Enter Amount
              </label>
              <div class="flex items-center">
                <button
                  id="removeBtn"
                  class="px-4 py-2 bg-gray-300 text-gray-700 rounded-l-md">
                  -
                </button>
                <div id="quantity" class="px-6 py-2 bg-gray-100 text-gray-700">
                  1
                </div>
                <button
                  id="addBtn"
                  class="px-4 py-2 bg-gray-300 text-gray-700 rounded-r-md">
                  +
                </button>
              </div>
            </div>
            <div className=" ">
              <button className="   font-semibold  text-[#000] bg-[#EDEAF3]  w-full py-3 rounded-md btn">
                Add another Item <IoAddCircleOutline className=" text-xl" />
              </button>
            </div>
            <div class="text-center mt-3 p-2 mb-5">
              <button className="font-semibold text-[#FEFEFE] bg-[#4F378B] w-full rounded-md btn">
                Next
              </button>
            </div>
          </div>
        </form>
      </div>
    </Applayout>
  );
}
