import { NextResponse } from "next/server";

export default function middleware(req, res) {
  // console.log(req.cookies)
  const verify = req.cookies.get("_commercefy");

  const url = req.url;
  const checkUr =
    url.includes("/dashboard") ||
    url.includes("/profile")
||    url.includes("/businessprofile")
    
  if (!verify && checkUr) {
    return NextResponse.redirect("http://localhost:3000/login");
  }
}
