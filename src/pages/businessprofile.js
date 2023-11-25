import Applayout from "@/components/header/layout/Applayout";
import React, { useState } from "react";
function Business({shownext}) {
  return (
    <div className="flex items-center justify-center ">
      <div className="w-full max-w-md">
        <div className="max-w-md mx-auto mt-10 lg:p-0 p-3 text-right">
          <a href="/dashboard.html">
            <i
              className="fa-solid fa-chevron-left fa-sm"
              style={{ color: "#000000" }}></i>{" "}
            Go back
          </a>
        </div>
        <div className="lg:p-0 p-5">
          <h1 className="lg:text-3xl font-semibold text-xl">
            Business Profile
          </h1>
          <h2 className="font-semibold mt-3">
            Fill in your business details below
          </h2>
        </div>
        <form>
          <div className="mt-5 lg:p-0 p-5">
            <div className="mb-7">
              <label
                htmlFor="business"
                className="block text-gray-700 text-sm font-medium mb-2">
                Name of Business
              </label>
              <div>
                <input
                  type="text"
                  id="business"
                  name="business"
                  className="w-full pl-4 pr-4 py-2 border rounded-md"
                />
              </div>
            </div>
            <div className="mb-7">
              <label
                htmlFor="business"
                className="block text-gray-700 text-sm font-medium mb-2">
                Business Registration Number
              </label>
              <div>
                <input
                  type="text"
                  id="business"
                  name="business"
                  className="w-full pl-4 pr-4 py-2 border rounded-md"
                />
              </div>
            </div>
            <div className="mb-7">
              <label
                htmlFor="address"
                className="block text-gray-700 text-sm font-medium mb-2">
                Address
              </label>
              <div>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="w-full pl-4 pr-4 py-2 border rounded-md"
                />
              </div>
            </div>
            <div className="mb-7">
              <label
                htmlFor="country"
                className="block text-gray-700 text-sm font-medium mb-2">
                Country
              </label>
              <div>
                <input
                  type="text"
                  id="country"
                  name="country"
                  className="w-full pl-4 pr-4 py-2 border rounded-md"
                />
              </div>
            </div>
            <div className="mb-7">
              <label
                htmlFor="state"
                className="block  text-gray-700 text-sm font-medium mb-2">
                State
              </label>
              <div>
                <input
                  type="text"
                  id="state"
                  name="state"
                  className=" border w-full pl-4 pr-4 py-2 rounded-md"
                />
              </div>
            </div>
            <div className="mb-7">
              <label
                htmlFor="city"
                className="block text-gray-700 text-sm font-medium mb-2">
                City
              </label>
              <div>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="border w-full pl-4 pr-4 py-2 rounded-md"
                />
              </div>
            </div>
            <div className="mb-7">
              <label
                htmlFor="postalcode2"
                className="block text-gray-700 text-sm font-medium mb-2">
                Postal Code(Not necessary)
              </label>
              <div>
                <input
                  type="text"
                  id="postalcode2"
                  name="postalcode2"
                  className="border w-full pl-4 pr-4 py-2 rounded-md"
                />
              </div>
            </div>
          </div>
        </form>
        <div className="text-center mt-10 p-2">
          <button onClick={shownext} className="text-[#FEFEFE] bg-[#4F378B] px-32 py-3 rounded-md">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

function Bank() {
  return (
    <div className="flex items-center justify-center ">
      <div className="w-full max-w-md">
        <div className="mt-10 lg:p-0 p-5">
          <h1 className="lg:text-3xl font-semibold text-xl">
            Add Bank Details
          </h1>
          <h1 className="bg-[#25252580] border mt-2"></h1>
        </div>
        <form>
          <div className="mt-5 lg:p-0 p-5">
            <div className="bg-white rounded-md mt-5 shadow-sm mb-7">
              <div className="text-left">
                <h1 className="text-2xl font-bold text-gray-800">
                  Select an Option
                </h1>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="selectOption"
                  className="block text-sm font-medium text-gray-600">
                  Choose bank
                </label>
                <select
                  id="selectOption"
                  name="selectOption"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
            </div>
            <div className="mb-7">
              <label
                htmlFor="acctnumb"
                className="block text-gray-700 text-sm font-medium mb-2">
                Account Number
              </label>
              <div>
                <input
                  type="text"
                  id="acctnumb"
                  name="acctnumb"
                  className=" border w-full pl-4 pr-4 py-2 rounded-md"
                />
              </div>
            </div>
            {/* <div>
              <div className="mt-10 flex justify-center">
                <a
                  href="#"
                  className="bg-[#4F378B1A] p-4 flex w-fit rounded-md font-semibold">
                  Add another Business
                  <div className="ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none">
                      <path
                        d="M12 7V17M17 12H7"
                        stroke="#141B34"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
                        stroke="#141B34"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div> */}
          </div>
        </form>
        <div className="text-center mt-10 p-2">
          <a
            href="/transfer pin.html"
            className="text-[#FEFEFE] bg-[#4F378B] px-32 py-3 rounded-md">
            Save
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Businessprofile() {
  const [show, setShow] = useState(false);

  function shownext() {
    setShow((prev) => true);
  }
  return (
    <Applayout>
      <main>
        {!show && <Business  shownext={shownext}/>}

        {show && <Bank />}
      </main>
    </Applayout>
  );
}
