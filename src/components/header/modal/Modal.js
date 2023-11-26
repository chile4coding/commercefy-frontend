import React, { useEffect, useState } from "react";
import Spinner from "../spinner/Spinner";
import { createClient, getCookie, getUser } from "@/services/request";
import { setUser } from "@/redux/storeSlice";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

export default function Modal() {
  const [client, setClient] = useState({
    email: "",

    name: "",
    phone: "",

    address: "",
    loading:false
  });
    const { user } = useSelector((state) => state.store);




  const [message, setMessage] =  useState("")
  const router  = useRouter()
const dispatch = useDispatch()
  const  [token, setToken] = useState(null)
  useEffect(()=>{
    const token  = getCookie()
    setToken(token)
  })

  function handleInputChange(e) {
    const { name, value } = e.target;
    setClient({ ...client, [name]: value });
  }
  async function createNewClient(e) {
    e.preventDefault();

    setClient({ ...client, loading: true });
setMessage("");


    const response   =  await createClient(client, token)
    const data  = await response.json()

    setMessage(data.message)

    if(response.status === 200){

         const res = await getUser();
         const data = await res.json();

         dispatch(setUser(data.owner));

         router.reload()
    }

    console.log(data)
    console.log(client);

    setClient({ ...client, loading: false });
  }
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_2" className="modal">
        <div className=" max-w-sm modal-box">
          <h1 class=" text-lg font-bold  text-[#252525]">Add New Recipient</h1>
          <h1 className="text-[#4F378B] text-center">{message}</h1>
          <form className=" card-body" onClick={createNewClient}>
            <div class="">
              <label
                for="nationality"
                class="block text-gray-700 text-sm font-medium mb-2">
                Client’s Name
              </label>
              <div>
                <input
                  type="text"
                  id="nationaly"
                  onChange={handleInputChange}
                  value={client.name}
                  required
                  name="name"
                  class="w-full pl-4 pr-4 py-2 border rounded-md"
                />
              </div>
            </div>
            <div class="">
              <label
                for="occupation"
                class="block text-gray-700 text-sm font-medium mb-2">
                Phone Number
              </label>
              <div>
                <input
                  type="text"
                  id="phone"
                  onChange={handleInputChange}
                  value={client.phone}
                  required
                  name="phone"
                  class="w-full pl-4 pr-4 py-2 rounded-md"
                />
              </div>
            </div>
            <div class="">
              <label
                for="nationality"
                class="block text-gray-700 text-sm font-medium mb-2">
                Delivery Address
              </label>
              <div>
                <input
                  type="text"
                  onChange={handleInputChange}
                  value={client.address}
                  required
                  id="nationaly"
                  name="address"
                  class="w-full pl-4 pr-4 py-2 border rounded-md"
                />
              </div>
            </div>
            <div class="mb-7">
              <label
                for="occupation"
                class="block text-gray-700 text-sm font-medium mb-2">
                E-mail Address{" "}
              </label>
              <div>
                <input
                  type="text"
                  id="occupation"
                  onChange={handleInputChange}
                  value={client.email}
                  required
                  name="email"
                  class="w-full pl-4 pr-4 py-2 rounded-md"
                />
              </div>
            </div>

            <button class="bg-[#4F378B] text-[#FEFEFE] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Save {client.loading && <Spinner />}
            </button>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
