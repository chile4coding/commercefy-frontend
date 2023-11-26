import Applayout from "@/components/header/layout/Applayout";
import Spinner from "@/components/header/spinner/Spinner";
import { setUser } from "@/redux/storeSlice";
import { getBanks, getCookie, getUser, updatebusinessProfile } from "@/services/request";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
function Business({shownext}) {
  const [details, setDetails] = useState({
    businessName: "",
    bankCode: "",
    businessReg: "",
    address: "",
    country: "",
    state: "",
    postalCode: "",
    city: "",
  });

  const router  = useRouter()
    const { user } = useSelector((state) => state.store);


    useEffect(()=>{
      if(user.business && user.business.length > 0 ){
        const  {business} =  user
    const [bus] =  business
    console.log(bus)

        setDetails({
          businessName: bus.businessName,
          bankCode: bus.bankCode,
          businessReg: bus.businessReg,
          address: bus.address,
          country: bus.country,
          state: bus.state,
          postalCode: bus.postalCode,
          city: bus.city,
        })
      }

    }, [])

  function handleInputChange(e) {
    const { value, name } = e.target;
    setDetails({ ...details, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

  }


  
  return (
    <div className="flex items-center justify-center ">
      <div className="w-full max-w-md">
        <div className="max-w-md mx-auto  lg:p-0 p-3 text-right">
          <span className="cursor-pointer" onClick={() => router.back()}>
            <i
              className="fa-solid fa-chevron-left fa-sm"
              style={{ color: "#000000" }}></i>{" "}
            Go back
          </span>
        </div>
        <div className="lg:p-0 px-5">
          <h1 className="lg:text-3xl font-semibold text-xl">
            Business Profile
          </h1>
          <h2 className="font-semibold mt-3">
            Fill in your business details below
          </h2>
        </div>
        <form>
          <div className=" lg:p-0 p-5">
            <div className="mb-3">
              <label
                htmlFor="business"
                className="block text-gray-700 text-sm font-medium mb-2">
                Name of Business
              </label>
              <div>
                <input
                  type="text"
                  id="business"
                  name="businessName"
                  onChange={handleInputChange}
                  value={details.businessName}
                  className="w-full pl-4 pr-4 py-2 border rounded-md"
                />
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor="business"
                className="block text-gray-700 text-sm font-medium mb-2">
                Business Registration Number
              </label>
              <div>
                <input
                  type="text"
                  id="business"
                  onChange={handleInputChange}
                  value={details.businessReg}
                  name="businessReg"
                  className="w-full pl-4 pr-4 py-2 border rounded-md"
                />
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor="address"
                className="block text-gray-700 text-sm font-medium mb-2">
                Address
              </label>
              <div>
                <input
                  type="text"
                  id="address"
                  onChange={handleInputChange}
                  value={details.address}
                  name="address"
                  className="w-full pl-4 pr-4 py-2 border rounded-md"
                />
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor="country"
                className="block text-gray-700 text-sm font-medium mb-2">
                Country
              </label>
              <div>
                <input
                  type="text"
                  id="country"
                  onChange={handleInputChange}
                  value={details.country}
                  name="country"
                  className="w-full pl-4 pr-4 py-2 border rounded-md"
                />
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor="state"
                className="block  text-gray-700 text-sm font-medium mb-2">
                State
              </label>
              <div>
                <input
                  type="text"
                  id="state"
                  onChange={handleInputChange}
                  value={details.state}
                  name="state"
                  className=" border w-full pl-4 pr-4 py-2 rounded-md"
                />
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor="city"
                className="block text-gray-700 text-sm font-medium mb-2">
                City
              </label>
              <div>
                <input
                  type="text"
                  id="city"
                  onChange={handleInputChange}
                  value={details.city}
                  name="city"
                  className="border w-full pl-4 pr-4 py-2 rounded-md"
                />
              </div>
            </div>
            <div className="mb-0">
              <label
                htmlFor="postalcode2"
                className="block text-gray-700 text-sm font-medium mb-2">
                Postal Code(Not necessary)
              </label>
              <div>
                <input
                  type="text"
                  id="postalcode2"
                  
                  onChange={handleInputChange}
                  value={details.postalCode}
                  name="postalCode"
                  className="border w-full pl-4 pr-4 py-2 rounded-md"
                />
              </div>
            </div>
          </div>
        </form>
        <div className="text-center  p-2">
          <button
            onClick={shownext.bind(this, details)}
            className="text-[#FEFEFE] bg-[#4F378B] px-32 py-3 rounded-md">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

function Bank({ showPrev, details }) {
  const [banks, setBanks] = useState(null);
  const [token, setToken] = useState(null)
  const [bankDetails, setBankDetails] = useState({
    name:"",
    accountNo:"",
    loading:false
  })
    const { user } = useSelector((state) => state.store);


  const router  = useRouter()
  const dispatch  = useDispatch()

  useEffect(() => {
    const token = getCookie();

 
    const getBank = async () => {
      const data = await getBanks(token);
      setBanks(data.data.data);
    };
    getBank();

    setToken(token)
  }, []);

  const handleInputChange = (e) => {
    const {name, value} =  e.target
    setBankDetails({ ...bankDetails, [name]: value });
  };


  const handleSubmit =async (e) => {
    e.preventDefault();
 const bankNameCode = bankDetails.name.split("+")
 const  [name, bankCode] = bankNameCode

const detail = {
  ...details,
  name,
  bankCode,
  accountNo: bankDetails.accountNo
}

console.log(details)
setBankDetails({...bankDetails, loading:true})

const res = await updatebusinessProfile(detail, token)

const data  = await res.json()

if(res.status === 200){
  const response  = await getUser(token)
   const data = await response.json();

     if (response.status === 200) {
       dispatch(setUser(data.owner));
       router.push("/dashboard")

     }

}
setBankDetails({...bankDetails, loading:false})


  
  };


  return (
    <div className="flex items-center justify-center ">
      <div className="w-full max-w-md">
        <div className="max-w-md mx-auto  lg:p-0 p-3 text-right">
          <span className="cursor-pointer" onClick={showPrev}>
            <i
              className="fa-solid fa-chevron-left fa-sm"
              style={{ color: "#000000" }}></i>{" "}
            Go back
          </span>
        </div>
        <div className=" lg:p-0 p-5">
          <h1 className="lg:text-3xl font-semibold text-xl">
            Add Bank Details
          </h1>
          <h1 className="bg-[#25252580] border mt-2"></h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className=" lg:p-0 p-5">
            <div className="bg-white rounded-md  shadow-sm ">
              <div className="text-left">
                <h1 className="text-2xl font-bold text-gray-800">
                  Select an Option
                </h1>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="selectOption"
                  className=" text-sm font-medium text-gray-600">
                  Choose bank
                </label>
                <select
                  id="selectOption"
                  name="name"
                  onChange={handleInputChange}
                  value={bankDetails.name}
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
                  {banks &&
                    banks.length > 0 &&
                    banks.map((bank) => {
                      return (
                        <option value={`${bank.name}+${bank.code}`}>
                          {bank.name}
                        </option>
                      );
                    })}
                </select>
              </div>
            </div>
            <div className="mb-0">
              <label
                htmlFor="acctnumb"
                className="block text-gray-700 text-sm font-medium mb-2">
                Account Number
              </label>
              <div>
                <input
                  type="text"
                  id="acctnumb"
                  name="accountNo"
                  onChange={handleInputChange}
                  value={bankDetails.accountNo}
                  required
                  className=" border w-full pl-4 pr-4 py-2 rounded-md"
                />
              </div>
            </div>
            {/* <div>
              <div className="mt-10 flex justify-center">
                <a
                  href="#"
                  className="bg-[#4F378B1A] p-4 flex w-fit rounded-md font-semibold">
                  Add another Business
                  <div className="ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none">
                      <path
                        d="M12 7V17M17 12H7"
                        stroke="#141B34"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
                        stroke="#141B34"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div> */}
          </div>
          <div className="text-center mt-3 p-2">
            <button className="text-[#FEFEFE] bg-[#4F378B] cursor-pointer px-32 py-3 rounded-md">
              Save {bankDetails.loading && <Spinner/> }
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function Businessprofile() {
  const [show, setShow] = useState(false);
  const [details, setDetails] =  useState(null)

  function shownext(detail) {
    setDetails(detail)
    console.log(detail)
    setShow((prev) => true);
  }
  
  function showPrev(){
    
    setShow((prev) => false);
    
  }
  return (
    <Applayout>
      <main>
        {!show && <Business  shownext={shownext}/>}

        {show && <Bank  showPrev={showPrev} details={details}/>}
      </main>
    </Applayout>
  );
}
