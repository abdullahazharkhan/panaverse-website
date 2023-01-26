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
      <body>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            transition={{
              delay: 1,
            }}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
          >
            <ChakraProvider>{children}</ChakraProvider>
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}
