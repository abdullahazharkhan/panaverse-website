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
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Navbar />
      <MainBanner />
      <hr />
      <HomeIntro />
      <hr />
      <motion.div
        initial={{ x: -50 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <HomeProgram />
      </motion.div>
      <hr />
      <motion.div
        initial={{ x: 50 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <HomeFeatures />
      </motion.div>
      <hr />
      <motion.div
        initial={{ x: -50 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <HomeObjct />
      </motion.div>
      <hr />

      <HomeStudentFB />
      <hr />
      <Footer />
    </main>
  );
}
