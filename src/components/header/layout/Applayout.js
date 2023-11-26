import React, { useEffect, useState } from 'react'
import Header from '../header'
import ActiveLink from './ActiveLink'
import LoginHeader from '../LoginHeader';
import { getCookie } from '@/services/request';
export default function Applayout({children}) {
  const  [token, setToken]= useState(null)
  useEffect(()=>{
const token = getCookie()
setToken(token)

  }, [])
  return (
    <main className="  flex flex-col">
      <div>{Boolean(token) ? <LoginHeader /> : <Header />}</div>

      {Boolean(token) ? (
        <div className=" max-w-md  mx-auto w-full mt-4">
          <div className="flex  ">
            <a
              href="#!"
              className=" font-semibold w-1/2 py-2 text-[#252525] text-center hover:bg-[#4F378B1A] lg:text-base text-sm  px-4 hover:bg-[#e3e2e5]">
              Wallet
            </a>
            <a
              href="#!"
              className=" font-semibold w-1/2 py-2 text-[#252525] text-center hover:bg-[#4F378B1A] lg:text-base text-sm  px-4 hover:bg-[#e3e2e5]">
              Invoice
            </a>
            <a
              href="#!"
              className=" font-semibold w-1/2 py-2 text-[#252525] text-center hover:bg-[#4F378B1A] lg:text-base text-sm  px-4 hover:bg-[#e3e2e5]">
              My Clients
            </a>
          </div>
        </div>
      ) : null}
      <div className="">{children}</div>
    </main>
  );
}
