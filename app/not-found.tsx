"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Heading } from "@chakra-ui/react";
import React from "react";

function notFound() {
  return (
    <div>
      <Navbar />
      <Heading fontWeight={"bold"} fontSize="8xl" color={"red.500"}>
        404 Page Not Found
      </Heading>
      <Footer />
    </div>
  );
}

export default notFound;
