import Applayout from '@/components/header/layout/Applayout'
import { getInvoice } from '@/redux/storeSlice';
import { getCookie, getInvoices } from '@/services/request';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

export default function Invoice() {

  const router  = useRouter()
  const dispatch  = useDispatch()

  useEffect(()=>{
const token =  getCookie()
if(!token){
  return 
}

async function getInvoiceN (){
  const data= await getInvoices(token)

  

  dispatch(getInvoice(data.invoices))
}
getInvoiceN()
  }, [])

  function navToCreateInvoice(){
    router.push("/generate-invoice")
  }
  return (
    <Applayout>
      <div className=" p-3 max-w-md mx-auto  " id="tab2 ">
        <div className="text-center  bg-[#FFF7FD]  ">
          <div></div>

          <img
            src="/invoice.svg"
            onClick={navToCreateInvoice}
            alt=""
            className=" w-[165px] rounded-md bg-[#FFF7FD]  cursor-pointer"
          />
        </div>
        <div className="flex mb-4 ">
          <a
            href="#!"
            className="w-1/2 py-2 text-[#252525] text-center hover:bg-[#4F378B1A] lg:text-base text-sm  font-semibold px-4 hover:bg-[#e3e2e5] ">
            All Invoices
          </a>
          <a
            href="#!"
            className="w-1/2 py-2 text-[#252525] text-center hover:bg-[#4F378B1A] lg:text-base text-sm  font-semibold px-4 hover:bg-[#e3e2e5]">
            Cleared
          </a>
          <a
            href="#!"
            className="w-1/2 py-2 text-[#252525] text-center hover:bg-[#4F378B1A] lg:text-base text-sm  font-semibold px-4 hover:bg-[#e3e2e5]">
            Pending
          </a>
        </div>
      </div>
    </Applayout>
  );
}
