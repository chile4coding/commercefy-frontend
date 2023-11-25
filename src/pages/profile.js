import Applayout from '@/components/header/layout/Applayout';
import React, { useState } from 'react'

function ProfileDetails({ shownext }) {
  return (
    <div>
   
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
              Personal Profile
            </h1>
            <h2 className="font-semibold mt-3">
              Fill in your personal details below
            </h2>
          </div>
          <form>
            <div className="mt-5 lg:p-0 p-5">
              <div className="mb-7">
                <label
                  for="firstname"
                  className="block text-gray-700 text-sm font-medium mb-2">
                  First Name (as shown in your ID document)
                </label>
                <div>
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    className="w-full pl-4 pr-4 py-2 border rounded-md"
                  />
                </div>
              </div>
              <div className="mb-7">
                <label
                  for="lastname"
                  className="block text-gray-700 text-sm font-medium mb-2">
                  Last Name (as shown in your ID document)
                </label>
                <div>
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    className="w-full pl-4 pr-4 py-2 border rounded-md"
                  />
                </div>
              </div>
              <div className="mb-7">
                <label
                  for="birth"
                  className="block text-gray-700 text-sm font-medium mb-2">
                  Date of Birth
                </label>
                <div>
                  <input
                    type="text"
                    id="birth"
                    name="birth"
                    className="w-full pl-4 pr-4 py-2 border rounded-md"
                  />
                </div>
              </div>
              <div className="mb-7">
                <label
                  for="nationality"
                  className="block text-gray-700 text-sm font-medium mb-2">
                  Nationality
                </label>
                <div>
                  <input
                    type="text"
                    id="nationaly"
                    name="nationaly"
                    className="w-full pl-4 pr-4 py-2 border rounded-md"
                  />
                </div>
              </div>
              <div className="mb-7 relative">
                <label
                  for=""
                  className="block text-gray-700 text-sm font-medium mb-2">
                  Phone Number
                </label>
                <div className="flex items-center border rounded-md">
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    className="w-full pl-4 pr-4 py-2 rounded-md border"
                  />
                  <a
                    href="#"
                    className="text-[#4F378B] text-sm -ml-20 font-semibold">
                    {" "}
                    verify
                  </a>
                </div>
              </div>
              <div className="mb-2">
                <label
                  for="occupation"
                  className="block text-gray-700 text-sm font-medium mb-2">
                  Occupation
                </label>
                <div>
                  <input
                    type="text"
                    id="occupation"
                    name="occupation"
                    className="w-full pl-4 pr-4 py-2 rounded-md border"
                  />
                </div>
              </div>
            </div>
          </form>
          <div className="text-center mt-10 p-2">
            <button
              onClick={shownext}
              className="text-[#FEFEFE] bg-[#4F378B] px-32 py-3 rounded-md">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Residential(){
    return (
      <div className="flex items-center justify-center ">
        <div className="w-full max-w-md">
          <div className="mt-10 lg:p-0 p-5">
            <h1 className="lg:text-3xl font-semibold text-xl">
              Residential Address
            </h1>
            <h1 className="bg-[#25252580] border mt-2"></h1>
          </div>
          <form>
            <div className="mt-5 lg:p-0 p-5">
              <div className="mb-7">
                <label
                  for="street"
                  className="block text-gray-700 text-sm font-medium mb-2">
                  Street
                </label>
                <div>
                  <input
                    type="text"
                    id="street"
                    name="street"
                    className="w-full pl-4 pr-4 py-2 rounded-md border"
                  />
                </div>
              </div>
              <div className="mb-7">
                <label
                  for="country"
                  className="block text-gray-700 text-sm font-medium mb-2">
                  Country
                </label>
                <div>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    className="w-full pl-4 pr-4 py-2 rounded-md border"
                  />
                </div>
              </div>
              <div className="mb-7">
                <label
                  for="state"
                  className="block text-gray-700 text-sm font-medium mb-2">
                  State
                </label>
                <div>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    className="w-full pl-4 pr-4 py-2 rounded-md border"
                  />
                </div>
              </div>
              <div className="mb-7">
                <label
                  for="city"
                  className="block text-gray-700 text-sm font-medium mb-2">
                  City
                </label>
                <div>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    className="w-full pl-4 pr-4 py-2  border rounded-md bg-[#ffffff]"
                  />
                </div>
              </div>
              <div className="mb-2">
                <label
                  for="postalcode"
                  className="block text-gray-700 text-sm font-medium mb-2">
                  Postal
                </label>
                <div>
                  <input
                    type="text"
                    id="postalcode"
                    name="postalcode"
                    className="w-full pl-4 pr-4 py-2 border rounded-md placeholder:text-[#0000004D] bg-[#ffffff]"
                  />
                </div>
              </div>
            </div>
          </form>
          <div className="text-center mt-10 p-2">
            <a
              href="/business.html"
              className="text-[#FEFEFE] bg-[#4F378B] px-32 py-3 rounded-md">
              Save
            </a>
          </div>
        </div>
      </div>
    );
}
export default function Profile() {
    const [show,setShow] = useState(false)

    function shownext(){
setShow(prev=>true)
    }
  return (
    <Applayout>
    <main>
      {!show && <ProfileDetails shownext={shownext} />}
      {show && <Residential />}
    </main>

    </Applayout>
  );
}
