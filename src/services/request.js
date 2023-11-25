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
    const response = await fetch(`${base_url}/request_otp`, {
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

  export function getCookie() {
    const token = Cookies.get("_commercefy");
    if (token) {
      return token;
    }
  }