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
          Quarter V (Specialization) <br /> Network Programmability and
          Automation
        </Heading>
        <Text maxW="500px" fontSize="lg" textAlign="center" color="gray.500">
          Duration: 13 Weeks
        </Text>
      </Stack>
      <Divider mb={"10px"} />
      <Box border={"1px"} borderRadius={"xl"} mx={"50px"} p="20px">
        <Heading fontSize="3xl">Course Description</Heading>
        <Text>
          Traditional network management techniques can't be effectively
          automated and don't scale well. By implementing network
          programmability based on Application Programming Interfaces, this
          course will assist in overcoming issues of the future and help you
          develop the skills required for the Next-Generation Network Engineer.
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
                    Textbook
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={2}>
              <Link
                href={
                  "https://www.amazon.com/Network-Programmability-Automation-Networking-Technology/dp/1587145146/ref=sr_1_3"
                }
              >
                https://www.amazon.com/Network-Programmability-Automation-Networking-Technology/dp/1587145146/ref=sr_1_3
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