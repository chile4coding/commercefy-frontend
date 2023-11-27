import Applayout from "@/components/header/layout/Applayout";
import Spinner from "@/components/header/spinner/Spinner";
import { setUser } from "@/redux/storeSlice";
import { doKYC, getCookie, updateProfile } from "@/services/request";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

function ProfileDetails({ shownext }) {
  const router = useRouter();
  const [details, setDetails] = useState({
    firstname: "",
    lastname: "",
    dateOfBirth: "",
    nationality: "",
    phone: "",
    occupation: "",
  });

    const { user } = useSelector((state) => state.store);

    useEffect(()=>{
if(user?.firstName && user?.lastName){
  setDetails({
    firstname: user.firstName,
    lastname: user.lastName,
    dateOfBirth: user.dateOfBirth,
    nationality: user.nationality,
    phone: user.phone,
    occupation: user.occupation,
  })
}
    }, [])

  function handleInputChange(e) {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  }

  function navBack() {
    router.back();
  }
  return (
    <div>
      <div className="flex items-center justify-center ">
     
        <div className="w-full max-w-md">
          <div className="max-w-md mx-auto lg:p-0 p-3 text-right">
            <span onClick={navBack}>
              <i
                className="fa-solid fa-chevron-left fa-sm"
                style={{ color: "#000000" }}></i>{" "}
              Go back
            </span>
          </div>
          <div className="lg:p-0 px-5">
            <h1 className="lg:text-3xl font-semibold text-xl">
              Personal Profile
            </h1>
            <h2 className="font-semibold mt-1">
              Fill in your personal details below
            </h2>
          </div>
          <form>
            <div className=" lg:p-0 p-5">
              <div className="mb-3">
                <label
                  for="firstname"
                  className="block text-gray-700 text-sm font-medium mb-2">
                  First Name (as shown in your ID document)
                </label>
                <div>
                  <input
                    type="text"
                    id="firstname"
                    onChange={handleInputChange}
                    value={details.firstname}
                    required
                    name="firstname"
                    className="w-full pl-4 pr-4 py-2 border rounded-md"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label
                  for="lastname"
                  required
                  className="block text-gray-700 text-sm font-medium mb-2">
                  Last Name (as shown in your ID document)
                </label>
                <div>
                  <input
                    type="text"
                    id="dateOfBirth"
                    onChange={handleInputChange}
                    value={details.lastname}
                    required
                    name="lastname"
                    className="w-full pl-4 pr-4 py-2 border rounded-md"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label
                  for="birth"
                  className="block text-gray-700 text-sm font-medium mb-2">
                  Date of Birth
                </label>
                <div>
                  <input
                    type="date"
                    id="birth"
                    name="dateOfBirth"
                    onChange={handleInputChange}
                    value={details.dateOfBirth}
                    required
                    className="w-full pl-4 pr-4 py-2 border rounded-md"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label
                  for="nationality"
                  className="block text-gray-700 text-sm font-medium mb-2">
                  Nationality
                </label>
                <div>
                  <input
                    type="text"
                    id="nationaly"
                    onChange={handleInputChange}
                    value={details.nationality}
                    required
                    name="nationality"
                    className="w-full pl-4 pr-4 py-2 border rounded-md"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label
                  for=""
                  className="block text-gray-700 text-sm font-medium mb-2">
                  Phone Number
                </label>
                <div className="flex items-center border rounded-md">
                  <input
                    type="text"
                    id="phone"
                    onChange={handleInputChange}
                    value={details.phone}
                    required
                    name="phone"
                    className="w-full pl-4 pr-4 py-2 rounded-md border"
                  />
                </div>
              </div>
              <div className="mb-2">
                <label
                  for="occupation"
                  className="block text-gray-700 text-sm font-medium mb-2">
                  Occupation
                </label>
                <div>
                  <input
                    type="text"
                    id="occupation"
                    onChange={handleInputChange}
                    value={details.occupation}
                    required
                    name="occupation"
                    className="w-full pl-4 pr-4 py-2 rounded-md border"
                  />
                </div>
              </div>
            </div>
          </form>
          <div className="text-center   pb-2">
            <button
              onClick={shownext.bind(this, details)}
              className="text-[#FEFEFE] bg-[#4F378B] px-32 py-3 rounded-md">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Residential({ rollBack, details }) {
  const [userDetails, setUserDetails] = useState({
    ...details,
    street: "",
    country: "",
    state: "",
    city: "",
    postalCode: "",
    loading: false,
  });
  const { user } = useSelector((state) => state.store);

  const [token, setToken] = useState(null);

  const  dispatch  = useDispatch()
  useEffect(() => {
    const token = getCookie();

    setToken(token);

   

if(user?.street ){
  setUserDetails({
    ...userDetails,
    street: user?.street,
    country: user?.nationality,
    state: user?.state,
    city: user?.city,
    postalCode: user?.postalCode,
  })
}
  }, []);
  const router =    useRouter()

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserDetails({ ...userDetails, [name]: value });
  };
   async function kyc(details) {
     if (details) {
       return;
     }
     const response = await doKYC(details, token);
     const data = await response.json();
     if (response.status === 200) {
              toast.success(data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
     
     }else{
         toast.error(data.message, {
           position: "top-right",
           autoClose: 5000,
           hideProgressBar: false,
           closeOnClick: true,
           pauseOnHover: true,
           draggable: true,
           progress: undefined,
           theme: "colored",
         });
     }
   }
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!details) {
      return;
    }
    setUserDetails({ ...userDetails, loading: true });
    const response = await updateProfile(userDetails, token);

    const data = await response.json();

    if (response.status === 200) {
     toast.success(data.message, {
       position: "top-right",
       autoClose: 5000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       theme: "colored",
     });

      if (!data?.updateUser?.KYC){
        dispatch(setUser(data.findUser));
   
        const detail = {
          email: data?.updateUser?.email,
          firstname: data?.updateUser?.firstName,
          lastname: data?.updateUser?.lastName,
        };
 const resp = await doKYC(detail, token);
 const dataN = await resp.json();
       window.location.href = dataN.session.redirectUrl;
       
        
      } else{
        router.push("/businessprofile")
      }
    }else{
         toast.error(data.message, {
           position: "top-right",
           autoClose: 5000,
           hideProgressBar: false,
           closeOnClick: true,
           pauseOnHover: true,
           draggable: true,
           progress: undefined,
           theme: "colored",
         });
    }

    setUserDetails({ ...userDetails, loading: false });
  };

 

 

  return (
    <div className="flex items-center justify-center ">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="w-full max-w-md">
        <div className="max-w-md mx-auto lg:p-0 p-3 text-right">
          <span onClick={rollBack} className=" cursor-pointer">
            <i
              className="fa-solid fa-chevron-left fa-sm"
              style={{ color: "#000000" }}></i>{" "}
            Go back
          </span>
        </div>
        <div className="lg:p-0 px-5">
          <h1 className="lg:text-3xl font-semibold text-xl">
            Residential Address
          </h1>
          <h1 className="bg-[#25252580] border mt-2"></h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mt-0 lg:p-0 p-5">
            <div className="mb-3">
              <label
                for="street"
                className="block text-gray-700 text-sm font-medium mb-2">
                Street
              </label>
              <div>
                <input
                  type="text"
                  id="street"
                  onChange={handleInputChange}
                  value={userDetails.street}
                  required
                  name="street"
                  className="w-full pl-4 pr-4 py-2 rounded-md border"
                />
              </div>
            </div>
            <div className="mb-3">
              <label
                for="country"
                className="block text-gray-700 text-sm font-medium mb-2">
                Country
              </label>
              <div>
                <input
                  type="text"
                  id="country"
                  name="country"
                  onChange={handleInputChange}
                  value={userDetails.country}
                  required
                  className="w-full pl-4 pr-4 py-2 rounded-md border"
                />
              </div>
            </div>
            <div className="mb-3">
              <label
                for="state"
                className="block text-gray-700 text-sm font-medium mb-2">
                State
              </label>
              <div>
                <input
                  type="text"
                  id="state"
                  name="state"
                  onChange={handleInputChange}
                  value={userDetails.state}
                  required
                  className="w-full pl-4 pr-4 py-2 rounded-md border"
                />
              </div>
            </div>
            <div className="mb-3">
              <label
                for="city"
                className="block text-gray-700 text-sm font-medium mb-2">
                City
              </label>
              <div>
                <input
                  type="text"
                  id="city"
                  name="city"
                  onChange={handleInputChange}
                  value={userDetails.city}
                  required
                  className="w-full pl-4 pr-4 py-2  border rounded-md bg-[#ffffff]"
                />
              </div>
            </div>
            <div className="mb-2">
              <label
                for="postalcode"
                className="block text-gray-700 text-sm font-medium mb-2">
                Postal
              </label>
              <div>
                <input
                  type="text"
                  id="postalcode"
                  onChange={handleInputChange}
                  value={userDetails.postalCode}
                  required
                  name="postalCode"
                  className="w-full pl-4 pr-4 py-2 border rounded-md placeholder:text-[#0000004D] bg-[#ffffff]"
                />
              </div>
            </div>
          </div>
          <div className="text-center  p-2 mx-4">
            <button className="text-[#FEFEFE] flex btn  items-center justify-center bg-[#4F378B]  mx-auto w-full  py-3 rounded-md">
              Save {userDetails.loading && <Spinner />}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default function Profile() {
  const [show, setShow] = useState(false);

  const [details, setDetails] = useState(null);

  function shownext(details) {
    setShow((prev) => true);

    setDetails(details);
  }

  function rollBack() {
    setShow((prev) => false);
  }
  return (
    <Applayout>
      <main>
        {!show && <ProfileDetails shownext={shownext} />}
        {show && <Residential rollBack={rollBack} details={details} />}
      </main>
    </Applayout>
  );
}
