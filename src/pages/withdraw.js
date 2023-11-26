import Applayout from "@/components/header/layout/Applayout";
import Spinner from "@/components/header/spinner/Spinner";
import { setUser } from "@/redux/storeSlice";
import { createPin, getCookie, getUser, withdrawalFund } from "@/services/request";
import { Router, useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function CreatePin({ showAmount }) {
  const[pin, setPin] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });

  const handleInputCange = (e) => {
    const { name, value } = e.target;
    setPin({ ...pin, [name]: value });
  };

  return (
    <div class="mt-10 max-w-md mx-auto">
      <form>
        <div class="flex items-center justify-between">
          <div class="mb-4">
            <input
              type="text"
              id="digit1"
              name="first"
              onChange={handleInputCange}
              value={pin.first}
              maxlength="1"
              class="w-16 px-4 py-2 border rounded-md text-center focus:outline-none focus:border-blue-500"
              placeholder="0"
              oninput="moveToNextInput(event, 'digit2', 'digit1')"
            />
          </div>

          <div class="mb-4">
            <input
              type="text"
              id="digit2"
              name="second"
              onChange={handleInputCange}
              value={pin.second}
              maxlength="1"
              class="w-16 px-4 py-2 border rounded-md text-center focus:outline-none focus:border-blue-500"
              placeholder="0"
              oninput="moveToNextInput(event, 'digit3', 'digit1', 'digit2')"
            />
          </div>

          <div class="mb-4">
            <input
              type="text"
              id="digit3"
              name="third"
              onChange={handleInputCange}
              value={pin.third}
              maxlength="1"
              class="w-16 px-4 py-2 border rounded-md text-center focus:outline-none focus:border-blue-500"
              placeholder="0"
              oninput="moveToNextInput(event, 'digit4', 'digit2', 'digit3')"
            />
          </div>

          <div class="mb-4">
            <input
              type="text"
              id="digit4"
              name="fourth"
              maxlength="1"
              onChange={handleInputCange}
              value={pin.fourth}
              class="w-16 px-4 py-2 border rounded-md text-center focus:outline-none focus:border-blue-500"
              placeholder="0"
              oninput="moveToNextInput(event, null, 'digit3', 'digit4')"
            />
          </div>
        </div>

        <div class="text-center mt-3 p-2">
          <span
            onClick={showAmount.bind(
              this,
              pin.first + pin.second + pin.third + pin.fourth
            )}
            class=" cursor-pointer text-[#FEFEFE] bg-[#4F378B] px-28 py-3 rounded-md">
            Continue
          </span>
        </div>
      </form>
    </div>
  );
}
export default function Withdraw() {
  const [show, setShow] = useState(false);
  const { user, transactionFilter, transactions } = useSelector(
    (state) => state.store
  );
  const [token, setToken] = useState(null);
  const [amountPin, setAmountPin] = useState({
    amount: "",
    pin: "",
    loading:false
  });
  const  [message, setMessage] = useState("")
  const dispatch = useDispatch();
  const router  = useRouter()

  useEffect(() => {
    const token = getCookie();
    if (token) {
      setToken(token);
    }
  }, []);
  function showEnablePin() {
    setShow(true);
  }

  async function showAmount(pin) {
    console.log(pin)
    const res = await createPin(pin, token);
    const data = await res.json();
    console.log(data);
    if (res.status === 200) {
      const response = await getUser(token);
      const data = await response.json();
      dispatch(setUser(data.owner));

      setShow(false);
    }
  }


  function handleAmountPinChange(e){
    const { name, value } = e.target;
    setAmountPin({ ...amountPin, [name]: value });
  }

  async function withdrawFund(){

    const busines = user.business[0]
    const detail = {
      name: `${user.firstName} ${user.lastName}`,
      pin: amountPin.pin,
      amount: amountPin.amount,
      recipient: busines.recipientBankId,
    };


 setAmountPin({...amountPin, loading:true})
 const response = await withdrawalFund(detail, token)
 const data =  await response.json()
 setMessage(data.message)
 
 if(response.status === 200){
  const res = await getUser(token);
  const data = await res.json();
  dispatch(setUser(data.owner));
  router.push("/dashboard")
  
}
setAmountPin({...amountPin, loading:false})





  }

  return (
    <Applayout>
      {!show && (
        <div class="max-w-md mx-auto mt-10 lg:p-0 p-3">
        <h2 className=" text-center text-[#4F378B] font-bold">{message}</h2>
          <h1 class="lg:text-2xl text-xl font-extrabold text-[#252525]">
            Transfer funds
          </h1>
          <div class="mt-10">
            <div class="mb-7">
              <label
                for="nationality"
                class="block text-gray-700 text-sm font-medium mb-2">
                Amount
              </label>
              <div>
                <input
                  type="text"
                  id="nationaly"
                  name="amount"
                  onChange={handleAmountPinChange}
                  value={amountPin.amount}
                  required
                  class="w-full pl-4 pr-4 py-2 border rounded-md"
                />
              </div>
            </div>
            <div class="mb-7">
              <label
                for="occupation"
                class="block text-gray-700 text-sm font-medium mb-2">
                Pin
              </label>
              <div>
                <input
                  type="text"
                  id="occupation"
                  name="pin"
                  onChange={handleAmountPinChange}
                  value={amountPin.pin}
                  required
                  class="w-full pl-4 pr-4 py-2 rounded-md"
                />
              </div>
            </div>
          </div>

          <div class="text-center mt-3 p-2">
            <span
              onClick={withdrawFund}
              class=" cursor-pointer text-[#FEFEFE] bg-[#4F378B] px-24 py-3 rounded-md">
              Submit {amountPin.loading && <Spinner />}
            </span>
          </div>
          {!user.is_pin_enabled && (
            <div className=" flex justify-center my-4 ">
              <span className=" cursor-pointer" onClick={showEnablePin}>
                {" "}
                create a new pin
              </span>
            </div>
          )}
        </div>
      )}

      {show && <CreatePin showAmount={showAmount} />}
    </Applayout>
  );
}
