import ActiveLink from '@/components/header/layout/ActiveLink';
import { MdDashboardCustomize } from 'react-icons/md';
import React, { useEffect, useState } from 'react'
import Applayout from '@/components/header/layout/Applayout';
import KYCModal from '@/components/header/modal/KYCModal';



export default function Dashbooard() {
  const [show, setShow] = useState(true)

  function closeKYC (){

    setShow(false)
  }

  return (
    <Applayout>
      {show && <KYCModal show={show} close={closeKYC} />}

      <div className="max-w-md mx-auto mt-10">

        <div className="" id="tab1">
          <div className="lg:p-1 p-2">
            <div className="bg-gradient-to-r from-[#BAA4F7] via-[#FFA0A0] to-[#6750A4CC] p-5  rounded-lg shadow-md">
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="mb-4">
                  <h1 className="lg:text-xl text-base font-bold text-[#0,000.00]">
                    Wallet 1 Balance
                  </h1>
                  <p
                    className="lg:text-3xl text-lg font-bold text-[#252525] mt-2"
                    id="numberDisplay">
                    # 0,000.00
                  </p>
                  <div className="mt-5 bg-[#FEFEFE80] flex items-center rounded-md">
                    <a
                      href="/withdrawal.html"
                      className="text-[#252525] lg:text-lg text-xs p-2 flex items-center">
                      Transfer funds
                      <div className="ml-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none">
                          <path
                            d="M6 12.6667L12.1953 6.47141C12.6796 5.98705 12.9218 5.74488 13.1275 5.83011C13.3333 5.91535 13.3333 6.25783 13.3333 6.9428V9.1746"
                            stroke="#141B34"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M10.0001 3.33334L3.80482 9.5286C3.32047 10.0129 3.07829 10.2551 2.87252 10.1699C2.66675 10.0847 2.66675 9.7422 2.66675 9.0572V6.66667"
                            stroke="#141B34"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>

                <button className="focus:outline-none" onclick="toggleNumber()">
                  <i
                    id="toggleIcon"
                    className="far fa-eye"
                    style={{ color: "#FEFEFE" }}></i>
                </button>
              </div>
            </div>
          </div>
          <div className="flex mb-4 mt-10 p-0">
            <a
              href="#!"
              className="w-1/2 py-2 text-[#252525] text-center hover:bg-[#4F378B1A] lg:text-base text-sm font-medium">
              All Transaction
            </a>
            <a
              href="#!"
              className="w-1/2 py-2 text-[#252525] text-center hover:bg-[#4F378B1A] lg:text-base text-sm font-medium">
              Money In
            </a>
            <a
              href="#!"
              className="w-1/2 py-2 text-[#252525] text-center hover:bg-[#4F378B1A] lg:text-base text-sm font-medium">
              Money Out
            </a>
          </div>
        </div>
      </div>
    </Applayout>
  );
}