import Applayout from '@/components/header/layout/Applayout'
import Modal from '@/components/header/modal/Modal'
import { IoAddCircleOutline } from "react-icons/io5";

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { generateInvoice, getCookie } from '@/services/request';
import { initCurrentClient, setCurrentClient, setCurrentInvoice } from '@/redux/storeSlice';

export default function GenerateInvoice() {
    const { user, currentClient } = useSelector((state) => state.store);
    const [client, setClient] = useState({
  
      clientId:"",
      email: "",
      amount: "",
      name: "",
      phone: "",
      address:"",
      subTotal: "",
      dateDue:"",
      discount: "0",
      tax: "0",
      item: [],
    });
    useEffect(()=>{

      setClient({
        ...client,
        email: currentClient?.email,
        clientId: currentClient?.id,
        name: currentClient?.name,
        phone: currentClient?.phone,
        address: currentClient?.address,
      });
    },[currentClient])
    
    const [loading, setLoading] =  useState(false)
    const  [item, setItem] = useState({
      name: "",
      price: "",
      qty: 1,
      subTotal: "",
    })

    function handleItemChange(e){

      const { name, value } = e.target;
      setItem({ ...item, [name]: value });
    }

 

    const  [token, setToken] = useState(null)

    const dispatch  = useDispatch()
        useEffect(()=>{
const token  = getCookie()

if(token){
  setToken(token)
}
// dispatch(initCurrentClient([]));
    },[])

    function handleInputChange(e) {
      const { name, value } = e.target;
      setClient({ ...client, [name]: value });
    }

   function handleNewClientSelection(e){
         const { name, value } = e.target;

   dispatch(setCurrentClient(value));
       
         setClient({ ...client, [name]: value });
    }




function handleQtyIncrease(){
  console.log("hi");
if(item.qty <1){
  return
}
console.log("hi")
  setItem({
...item, qty: item.qty + 1,
subTotal : item.qty * item.price
  });
}
function handleQtyDecrease(){

  
if(item.qty <2){
  return
}
  setItem({
    ...item,
    qty: item.qty - 1,
    subTotal: item.qty * item.price,
  });
}

function additem(){
  if(Boolean(item.qty ) && Boolean(item.price) && Boolean(item.name)){
    const newItem = { ...item, subTotal: Number(item.qty) * Number(item.price) };
    const newTemList  =  [...client.item, newItem]
    const total  =  newTemList.reduce((sum, item) => sum + item.subTotal, 0);
   
    setClient({ ...client, item: newTemList, amount: total, subTotal:total });
    setItem({
      name: "",
      price: "",
      qty: 1,
      subTotal: "",
    });



  }

  
  
}
console.log(client)

function NavNext(e){
  e.preventDefault();
    if (Boolean(item.qty) && Boolean(item.price) && Boolean(item.name)) {
       const newItem = {
         ...item,
         subTotal: Number(item.qty) * Number(item.price),
       };
       const newTemList = [...client.item, newItem];
       const total = newTemList.reduce((sum, item) => sum + item.subTotal, 0);
      dispatch(
        setCurrentInvoice({
          ...client,
          item: newTemList,
          amount: total,
          subTotal: total,
          dateDue: `${new Date(client.dateDue).toLocaleDateString("en-UK")}`,
       
        })
      );
      if(currentClient){
        router.push("/summary")

      }
  
    }

}


    const router  = useRouter()
  return (
    <Applayout>
      <div className="flex items-center justify-center flex-col  ">
        <Modal />
        <div className="w-full max-w-md">
          <div className="max-w-md mx-auto  lg:p-0 p-3 text-right">
            <span className=' cursor-pointer' onClick={() => router.back()}>
              <i
                className="fa-solid fa-chevron-left fa-sm"
                style={{ color: "#000000;" }}></i>{" "}
              Go back
            </span>
          </div>
          <div className="lg:p-0 p-5">
            <h1 className="lg:text-3xl font-semibold text-xl">
              Generate Invoice
            </h1>
            <h2 className="font-semibold mt-3">
              Fill in the details below to generate invoice
            </h2>
          </div>
        </div>

        <form>
          <div className=" lg:p-0 px-5">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <div className="mb-3">
                <label
                  for="date"
                  className="block text-gray-700 text-sm font-medium mb-2">
                  Date Created
                </label>
                <div>
                  <input
                    type="date"
                    className="w-full pl-4 pr-4 py-2 border border-t-0 border-r-0 border-l-0"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label
                  for="date"
                  className="block text-gray-700 text-sm font-medium mb-2">
                  Due Date
                </label>
                <div>
                  <input
                    type="date"
                    onChange={handleInputChange}
                    value={client.dateDue}
                    id="date"
                    name="dateDue"
                    className="w-full pl-4 pr-4 py-2 border border-t-0 border-r-0 border-l-0"
                  />
                </div>
              </div>
            </div>
            <h1 className="lg:text-2xl font-semibold text-xl mb-7">Bill to</h1>
            <div className="mb-3">
              <label
                for="birth"
                className="block text-gray-700 text-sm font-medium mb-2">
                Add new recipient
              </label>
              <div className="mt-3">
                <button
                  type="button"
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                  className="cursor-pointer bg-[#4F378B1A] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center">
                  <i
                    className="fa-solid fa-plus fa-lg"
                    style={{ color: "#252525" }}></i>
                </button>
              </div>
            </div>
            <div className="mb-3">
              <label
                for="exampleSelect"
                className="block text-sm font-medium text-gray-700">
                Add existing recipient
              </label>
              <select
                onClick={handleNewClientSelection}
                id="exampleSelect"
                className="mt-1 block w-full p-2 border rounded-md shadow-sm bg-gray-100 focus:outline-none focus:border-blue-500">
                {user &&
                  user?.client &&
                  user?.client.length > 0 &&
                  user?.client.map((buyer) => {
                    return (
                      <option value={buyer.id} key={buyer.id}>
                        {buyer.name}
                      </option>
                    );
                  })}
              </select>
            </div>
            <h1 className="lg:text-2xl font-semibold text-xl mb-3">
              Add Items
            </h1>
            <div className="mb-3">
              <label
                for="occupation"
                className="block text-[#252525] text-sm font-medium mb-2">
                Product Name
              </label>
              <div>
                <input
                  type="text"
                  id="occupation"
                  onChange={handleItemChange}
                  value={item.name}
                  name="name"
                  className="w-full pl-4 pr-4 py-2 rounded-md"
                />
              </div>
            </div>
            <div className="mb-3">
              <label
                for="occupation"
                className="block text-[#252525] text-sm font-medium mb-2">
                Enter Amount
              </label>
              <div>
                <input
                  type="text"
                  id="occupation"
                  onChange={handleItemChange}
                  value={item.price}
                  name="price"
                  className="w-full pl-4 pr-4 py-2 rounded-md"
                />
              </div>
            </div>
            <div className="mb-3">
              <label
                for="occupation"
                className="block text-[#252525] text-sm font-medium mb-2">
                Enter Quantity
              </label>
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={handleQtyDecrease}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-l-md">
                  -
                </button>
                <div
                  id="quantity"
                  className="px-6 py-2 bg-gray-100 text-gray-700">
                  {item.qty}
                </div>
                <button
                  onClick={handleQtyIncrease}
                  type="button"
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-r-md">
                  +
                </button>
              </div>
            </div>
            <div className=" ">
              <button
                onClick={additem}
                type="button"
                className=" flex     font-semibold  text-[#000] bg-gray-300 w-full py-3 rounded-md btn">
                Add another Item <IoAddCircleOutline className=" text-xl" />
              </button>
            </div>
            <div className="text-center mt-3 p-2 mb-5">
              <button
                onClick={NavNext}
                className=" font-semibold text-[#FEFEFE] bg-[#4F378B] w-full rounded-md btn">
                Next
              </button>
            </div>
          </div>
        </form>
      </div>
    </Applayout>
  );
}
