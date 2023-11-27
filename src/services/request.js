import Cookies from "js-cookie";
import {io} from "socket.io-client"
const base_url = "https://commercefy-api.onrender.com/api/v1";




export async function signupOwner(details) {
    const {email, password } = details

    console.log(details)
  try {
    const response = await fetch(`${base_url}/signup_business_owner`, {
      method: "POST",

      body: JSON.stringify({ email, password }),

      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  } catch (error) {
    console.error(error);
    return error;
  }}
export async function verifyOtp(otp) {
    
  try {
    const response = await fetch(`${base_url}/verify_otp`, {
      method: "POST",

      body: JSON.stringify({ otp }),

      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  } catch (error) {
    console.error(error);
    return error;
  }}
export async function requestOTP(email) {
    console.log(email)
    
  try {
    const response = await fetch(`${base_url}/request_otp`, {
      method: "POST",

      body: JSON.stringify({ email }),

      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  } catch (error) {
    console.error(error);
    return error;
  }}
export async function login(details) {
    
    
  try {
    const response = await fetch(`${base_url}/login`, {
      method: "POST",

      body: JSON.stringify(details),

      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  } catch (error) {
    console.error(error);
    return error;
  }}
export async function doKYC(details, token) {
    console.log(details, token)
    
  try {
    const response = await fetch(`${base_url}/do_kyc`, {
      method: "POST",

      body: JSON.stringify(details),

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    

    return response;
  } catch (error) {
    console.error(error);
    return error;
  }}
export async function updateProfile(details, token) {
    
    
  try {
    const response = await fetch(`${base_url}/update_business_owner_profile`, {
      method: "PATCH",

      body: JSON.stringify(details),

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    

    return response;
  } catch (error) {
    console.error(error);
    return error;
  }}
export async function  updatebusinessProfile(details, token) {
    
    
  try {
    const response = await fetch(`${base_url}/create_business`, {
      method: "POST",

      body: JSON.stringify(details),

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    

    return response;
  } catch (error) {
    console.error(error);
    return error;
  }}
export async function  createPin(pin, token) {
    
    
  try {
    const response = await fetch(`${base_url}/enable_pin`, {
      method: "PATCH",

      body: JSON.stringify({ pin }),

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    

    return response;
  } catch (error) {
    console.error(error);
    return error;
  }}
export async function  withdrawalFund(detail, token) {

  
    
    
  try {
    const response = await fetch(`${base_url}/withdraw`, {
      method: "POST",

      body: JSON.stringify(detail),

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    

    return response;
  } catch (error) {
    console.error(error);
    return error;
  }}

  export  function getCookie() {
    const token = Cookies.get("_commercefy");
    if (token) {
      return token;
    }
  }
  export  function clearCookie() {
    const token = Cookies.remove("_commercefy");
  
  }
export async function getUser(token) {
    
    
  try {
    const response = await fetch(`${base_url}/get_business_owner`, {
      method: "GET",
     
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    

    return response;
  } catch (error) {
    console.error(error);
    return error;
  }}
export async function getBanks(token) {
    
    
  try {
    const response = await fetch(`${base_url}/get_banks`, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    
const  data  = await response.json()
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }}
export async function getInvoices(token) {
    
    
  try {
    const response = await fetch(`${base_url}/get_invoices`, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    
const  data  = await response.json()
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }}
export async function geWithdraw(token) {
    
    
  try {
    const response = await fetch(`${base_url}/get_withdrawl`, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    
const  data  = await response.json()
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }}
export async function geClients(token) {
    
    
  try {
    const response = await fetch(`${base_url}/get_busines_owner_client`, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    
const  data  = await response.json()
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }}
  
export async function businessTransactions(token) {
    
    console.log(token)
  try {
    const response = await fetch(`${base_url}/getTransactions`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    
const  data  = await response.json()
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }}
  
export async function generateInvoice(clientId, token) {
    
    
  try {
    const response = await fetch(`${base_url}/generate_invoice`, {
      method: "POST",
      body:JSON.stringify({clientId}),

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    
const  data  = await response.json()
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }}
export async function createClient(details, token) {
    
    
  try {
    const response = await fetch(`${base_url}/create_client`, {
      method: "POST",
      body: JSON.stringify(details),

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    

    return response;
  } catch (error) {
    console.error(error);
    return error;
  }}
export async function generatePaymentLink(details, token) {

   const { email,
    amount,
    name,
     clientId,
     dateDue,
      phone,
      address,
      subTotal,
      discount,
    
      tax,
    item,} =  details
console.log(item) 
  try {
    const response = await fetch(`${base_url}/pay_business_owner`, {
      method: "POST",
      body: JSON.stringify({
        amount:amount,
        name,
        clientId,
        email,
        dateDue : dateDue+"",
        phone,
        address,
        subTotal :subTotal+"",
        discount:discount+"",
        tax:tax+"",
        item:item
      }),

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    

    return response;
  } catch (error) {
    console.error(error);
    return error;
  }}


  export const socket = io("https://commercefy-api.onrender.com");



  