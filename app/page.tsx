"use client";
import { Inter } from "@next/font/google";

import Navbar from "@/components/Navbar";
import MainBanner from "@/components/MainBanner";
import HomeFeatures from "@/components/HomeCourses";
import HomeObjct from "@/components/HomeObjct";
import HomeIntro from "@/components/HomeIntro";
import HomeProgram from "@/components/HomeProgram";
import HomeStudentFB from "@/components/HomeStudentFB";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Navbar />
      <MainBanner />
      <hr />
      <HomeIntro />
      <hr />
      <HomeProgram />
      {/* #D2001A */}
      <hr />
      <HomeFeatures />
      <hr />
      <HomeObjct />
      <hr />
      <HomeStudentFB />
      <hr />
      <Footer />
    </main>
  );
}
