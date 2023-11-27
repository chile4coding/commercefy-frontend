import Image from "next/image";
import { Inter } from "next/font/google";
import { Web5 } from "@web5/api";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Applayout from "@/components/header/layout/Applayout";
import { useDispatch, useSelector } from "react-redux";
import { allTransaction, clearNotification, getInvoice, getNotification, getTransactions, setCurrentClient, setCurrentInvoice, setCurrentVisitor, setGenereatedInvoices, setUser } from "@/redux/storeSlice";
import { ToastContainer } from "react-toastify";
import Hero from "@/components/Hero";
import SectionTwo from "@/components/SectionTwo";
import SectionThree from "@/components/SectionThree";
import SectionFour from "@/components/SectionFour";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const dispatch = useDispatch();
  const {
    user,
    transactionFilter,
    transactions,
    visitor,
    currentClient,
    currentIvoice,
    generatedInvoice,
    initCurrentClient,
    invoices,
    withdraw,
    ownerClients,
    clientSearch,
    notifications,
  } = useSelector((state) => state.store);

  useEffect(() => {
    if (!user) {
      dispatch(setUser([]));
    }

    if(!currentClient){
      dispatch(initCurrentClient({}));
    }
    



    if(!notifications){
      dispatch(clearNotification([]))
    }

    if(!generatedInvoice){
      dispatch(setGenereatedInvoices({}))
    }

    if(!currentIvoice){
      dispatch(setCurrentInvoice({}))
    }

    if(!invoices){
      dispatch(getInvoice([]))
    }
    if(!transactions){
      dispatch(getTransactions([]))
    }
    if(transactionFilter){
      dispatch(allTransaction([]))
    }
   


  }, []);

  return (
    <Applayout>
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
    <div>
      <Hero/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <Footer/>
    </div>
    </Applayout>
  );
}
