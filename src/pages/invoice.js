import Applayout from '@/components/header/layout/Applayout'
import React from 'react'

export default function Invoice() {
  return (
    <Applayout>
      <div className=" p-3 max-w-md mx-auto  " id="tab2 ">
        <div className="text-center mt-28 bg-[#FFF7FD] p-20">
          <div></div>
          <a
            href="/generate invoice.html"
            className="text-[#252525] lg:text-2xl text-xl font-bold">
            <div className="flex justify-center text-[#141B34]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="50"
                viewBox="0 0 41 41"
                fill="none">
                <path
                  d="M20.5 12.1667V28.8334M28.8333 20.5001H12.1666"
                  stroke="#141B34"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M37.1667 20.4999C37.1667 11.2952 29.7047 3.83325 20.5 3.83325C11.2953 3.83325 3.83337 11.2952 3.83337 20.4999C3.83337 29.7046 11.2953 37.1666 20.5 37.1666C29.7047 37.1666 37.1667 29.7046 37.1667 20.4999Z"
                  stroke="#141B34"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            Generate New Invoice
          </a>
        </div>
        <div className="flex mb-4 mt-10">
          <a
            href="#!"
            className="w-1/2 py-2 text-[#252525] text-center hover:bg-[#4F378B1A] lg:text-base text-sm font-medium px-4">
            Cleared
          </a>
          <a
            href="#!"
            className="w-1/2 py-2 text-[#252525] text-center hover:bg-[#4F378B1A] lg:text-base text-sm font-medium px-4">
            Pending
          </a>
        </div>
      </div>
    </Applayout>
  );
}
