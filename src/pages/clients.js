import Applayout from '@/components/header/layout/Applayout'
import { getOwnerClients, searchClient, setCurrentClient } from '@/redux/storeSlice';
import { geClients, getCookie } from '@/services/request';
import { data } from 'autoprefixer';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function Clientscard({client}){
      const [show, setShow] = useState(false);

      const dispatch  = useDispatch()
      const router  = useRouter()
      function showModal() {
        setShow((prev) => !prev);
      }

      function  handleClientInvioce(id){
dispatch(setCurrentClient(id));

    router.push("/generate-invoice");

      }
    return (
      <div className="px-7  rounded-md   " onClick={showModal}>
        <div className="relative ">
          <div className=" hover:bg-[#4F378B]  rounded-md p-2">
            <a
              href="#!"
              id="dropdownButton1"
              className="text-black  hover:text-white text-sm flex items-center gap-[250px] ">
              <div className=" hover:text-white ">{client.name}</div>
              <div className="hover:text-white">
                <i
                  className="fa-solid fa-chevron-right fa-sm"
                  style={{ color: "#000000" }}></i>
              </div>
            </a>
          </div>
          {show && (
            <div
              id="dropdownContent1"
              className=" absolute top-10 right-0 bg-white w-[300px] z-10 justify-center border border-gray-300 p-2 rounded-md shadow-md">
              <h1 className="text-center">{client.name}</h1>
              <h1 className="bg-[#25252580] border mt-2"></h1>
              <div className="bg-[#FFF7FD] w-fit  cursor-pointer flex justify-center items-center mx-auto mt-2 p-2 rounded-md">
                <span  onClick={handleClientInvioce.bind(this, client.id)}
                  className="text-[#252525] lg:text-2xl text-xl font-bold">
                  <div className="flex justify-center text-[#141B34] mt-2">
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
                  <h1 className="text-center text-base">
                    Generate New Invoice
                  </h1>
                </span>
              </div>
              <div>
                <div className="flex gap-2 justify-center items-center mt-4">
                  <h1 className="hover:bg-[#4F378B1A] w-fit p-2 rounded-md">
                    <a ></a>
                  </h1>
                  <h1 className="hover:bg-[#4F378B1A] w-fit p-2 rounded-md">
                    <a ></a>
                  </h1>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
}
export default function Clients() {

  const dispatch  = useDispatch()
    const { user, transactionFilter, transactions, ownerClients , client} = useSelector(
      (state) => state.store
    );

    const  [ search , setSearch] =  useState("")
  useEffect(()=>{
const token  = getCookie()

if(!token){
  return
}

async function clients(){
  const dataC = await geClients(token);
  console.log(dataC)

  dispatch(getOwnerClients(dataC.clients));

}

clients()

  },[])
  

  function handleInputChange(e){
dispatch(searchClient(e.target.value));

    setCurrentClient(e.target.value)
  }
  
    
  return (
    <Applayout>
      <div className="max-w-md mx-auto " id="tab3">
        <div className="max-w-md mx-aut0 flex mt-10 p-5">
          <input
            type="text"
            placeholder="Search..."
            onChange={handleInputChange}
            className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        { client &&
           client.length > 0 &&
           client.map((client) => <Clientscard  key={client.id} client={client}/>)}
      </div>
    </Applayout>
  );
}
