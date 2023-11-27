import Applayout from '@/components/header/layout/Applayout'
import { allInvoice, filterInvoice, getInvoice } from '@/redux/storeSlice';
import { getCookie, getInvoices } from '@/services/request';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';



function InvoiceTable({invoice}){
  
  
  return (
    <table className="table">
      <thead>
        <tr className="bg-[#EDEAF3] font-semibold p-2 text-sm">
          <th>Date</th>
          <th>Client</th>
          <th>Status</th>
          <th>Amount</th>
        </tr>
      </thead>

      <tbody>
      
        
            {invoice && invoice.length > 0 && invoice.map((item)=>{
          return (
            <tr>
              <td>{item?.date}</td>

              <td>
                <div>{item?.name}</div>
             
              </td>
              <td className=" text-center">
                {" "}
                <span>{item?.status}</span>
                {item.status !== "pending" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none">
                    <g clip-path="url(#clip0_256_621)">
                      <path
                        d="M14.2985 5.46666C14.3334 6.16675 14.3334 6.99959 14.3334 7.99999C14.3334 10.9855 14.3334 12.4783 13.4059 13.4059C12.4784 14.3333 10.9856 14.3333 8.00008 14.3333C5.01452 14.3333 3.52174 14.3333 2.59424 13.4059C1.66675 12.4783 1.66675 10.9855 1.66675 7.99999C1.66675 5.01443 1.66675 3.52165 2.59424 2.59415C3.52174 1.66666 5.01452 1.66666 8.00008 1.66666C8.71468 1.66666 9.34381 1.66666 9.90008 1.67938"
                        stroke="#1A8C18"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        d="M5.33325 7.66666C5.33325 7.66666 6.33325 7.66666 7.66659 9.99999C7.66659 9.99999 11.0391 3.88888 14.3333 2.66666"
                        stroke="#1A8C18"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_256_621">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none">
                    <path
                      d="M2 8C2 5.01444 2 3.52166 2.92749 2.59416C3.85499 1.66667 5.34777 1.66667 8.33333 1.66667C11.3189 1.66667 12.8117 1.66667 13.7392 2.59416C14.6667 3.52166 14.6667 5.01444 14.6667 8C14.6667 10.9855 14.6667 12.4783 13.7392 13.4059C12.8117 14.3333 11.3189 14.3333 8.33333 14.3333C5.34777 14.3333 3.85499 14.3333 2.92749 13.4059C2 12.4783 2 10.9855 2 8Z"
                      stroke="#8C1D18"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.9998 8H5.6665"
                      stroke="#8C1D18"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                )}
              </td>
              <td>₦{item?.amountPaid?.toFixed(2)}</td>
            </tr>
          );
        })}
          
        
      </tbody>
    </table>
  );
}
export default function Invoice() {

  const router  = useRouter()
  const dispatch  = useDispatch()
    const {
      user,
      transactionFilter,
      transactions,
      notifications,
      invoices,
      invoiceFilter,
    } = useSelector((state) => state.store);
       const [name, setName] = useState([
         { name: "All Invoices", id: 1, active: true },
         { name: "Cleared", id: 2, active: false },
         { name: "Pending", id: 3, active: false },
       ]);


  useEffect(()=>{
const token =  getCookie()
if(!token){
  return 
}


async function getInvoiceN (){
  const data= await getInvoices(token)

  dispatch(getInvoice(data.invoices))
  dispatch(allInvoice(data.invoices))

}
getInvoiceN()
  }, [])

  function navToCreateInvoice(){
    router.push("/generate-invoice")
  }

   function handleFilter(id) {
     const filter = name.map((item) => {
       if (item.id === id) {
         return { ...item, active: true };
       } else {
         return { ...item, active: false };
       }
     });
     setName(filter);

     if (id === 1) {
         dispatch( allInvoice(invoices));
     }
     if (id === 2) {
        dispatch(filterInvoice("success"));
     }
     if (id === 3) {
        dispatch(filterInvoice("pending"));
     }
   }
  return (
    <Applayout>
      <div className=" p-3 max-w-md mx-auto  " id="tab2 ">
        <div className="text-center    mb-4">
          <div>
            <img
              src="/invoice.svg"
              onClick={navToCreateInvoice}
              alt=""
              className=" max-w-[165px] rounded-md bg-[#FFF7FD]  cursor-pointer"
            />
          </div>
        </div>
        <div className="flex mb-0">
          {name.map((item) => (
            <span
              key={item.id}
              onClick={handleFilter.bind(this, item.id)}
              className={` cursor-pointer w-1/2 py-2 text-[#252525] text-center hover:bg-[#4F378B1A] lg:text-base text-sm  font-semibold px-4 hover:bg-[#e3e2e5] ${
                item?.active ? "bg-[#EDEAF3]" : ""
              }`}>
              {item.name}{" "}
            </span>
          ))}
        </div>
      </div>
      <div className="p-3 max-w-md mx-auto ">
        <InvoiceTable invoice={invoiceFilter} />

        {invoiceFilter && invoiceFilter.length === 0 && (
          <div className=" text-center">No invoice found</div>
        )}
      </div>
    </Applayout>
  );
}
