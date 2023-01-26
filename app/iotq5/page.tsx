"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Link,
} from "@chakra-ui/react";
import React from "react";

const q1 = () => {
  return (
    <div>
      <Navbar />
      <Stack direction="column" spacing={6} alignItems="center" mt={8} mb={16}>
        <Heading
          as="h1"
          fontSize="4xl"
          fontWeight="bold"
          textAlign="center"
          maxW="600px"
        >
          Quarter V (Specialization) <br /> Embedded Programming using C and
          Rust
        </Heading>
        <Text maxW="500px" fontSize="lg" textAlign="center" color="gray.500">
          Duration: 13 Weeks
        </Text>
      </Stack>
      <Divider mb={"10px"} />
      <Box border={"1px"} borderRadius={"xl"} mx={"50px"} p="20px">
        <Heading fontSize="3xl">Course Description</Heading>
        <Text>
          This is an introductory course about using the C and Rust Programming
          Languages on "Bare Metal" embedded systems, such as Microcontrollers.
          We will start by introducing embedded systems and move on to learn the
          C++ and Rust programming languages. We'll learn about basic
          programming concepts using C and Rust, then we will explore key
          concepts in electronics, microcontrollers, and embedded programming.
          It is a fast-paced, thorough introduction to programming with C and
          Rust that will have you writing programs, solving problems, burning
          your code on microcontrollers, playing with GPIOs, and making things
          that work in no time.
        </Text>
      </Box>
      <Box border={"1px"} borderRadius={"xl"} mx={"50px"} p="20px" mt={"60px"}>
        <Heading fontSize="3xl">Course Outline</Heading>
        <br />
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={"lg"} fontWeight="semibold">
                    The C Reference Book: The C programming language Embedded
                    Programming book: Internet of things with ESP8266
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={2}>
              <Link
                href={
                  "https://drive.google.com/drive/folders/1CZFxLSFoo9rl3le7KRuhUwLEV6h4xLXN?usp=sharing"
                }
              >
                Download
              </Link>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={"lg"} fontWeight="semibold">
                    Embedded Programming using Rust (Extra Weeks in the Course)
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={2}>
              <Link href={"https://www.rust-lang.org/what/embedded"}>
                https://www.rust-lang.org/what/embedded
              </Link>
            </AccordionPanel>
            <AccordionPanel pb={2}>
              <Link href={"https://crates.io/crates/esp8266"}>
                https://crates.io/crates/esp8266
              </Link>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
      <Footer />
    </div>
  );
};

export default q1;
