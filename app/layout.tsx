"use client";
import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <AnimatePresence exitBeforeEnter>
        <body>
          <ChakraProvider>{children}</ChakraProvider>
        </body>
      </AnimatePresence>
    </html>
  );
}
