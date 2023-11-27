import { NextResponse } from "next/server";

export default function middleware(req, res) {
  // console.log(req.cookies)
  const verify = req.cookies.get("_commercefy");

  const url = req.url;
  const checkUr =
    url.includes("/dashboard") ||
    url.includes("/profile") ||
    url.includes("/businessprofile") ||
    url.includes("/clients") ||
    url.includes("/businessprofile") ||
    url.includes("/generate-invoice") ||
    url.includes("/invoice"); 
    url.includes("/notifications"); 
    url.includes("/summary"); 
    url.includes("/withdraw"); 
    url.includes("/payment-link"); 
    url.includes("/invoicepaper"); 
    url.includes("/pin"); 
    
  if (!verify && checkUr) {
    return NextResponse.redirect("https://commercefyhere.netlify.app/login");
  }
}
