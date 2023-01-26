"use client";
import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { Suspense } from "react";
import "./globals.css";
import SkeletonCards from "./loading";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Suspense fallback={<SkeletonCards />}>
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
        </Suspense>
      </body>
    </html>
  );
}
