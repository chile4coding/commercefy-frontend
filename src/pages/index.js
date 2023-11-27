import Image from "next/image";
import { Inter } from "next/font/google";
import { Web5 } from "@web5/api";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Applayout from "@/components/header/layout/Applayout";
import Hero from "@/components/Hero";
import SectionTwo from "@/components/SectionTwo";
import SectionThree from "@/components/SectionThree";
import SectionFour from "@/components/SectionFour";
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

   
  



  return (
<Applayout>
  <Hero />
  <SectionTwo />
  <SectionThree />
  <SectionFour />
  <Footer />
</Applayout>
  );
}
