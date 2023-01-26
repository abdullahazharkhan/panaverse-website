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
          Quarter III (Core)
          <br /> Dollar Making Bootcamp - Full-Stack Template and API Product
          Development
        </Heading>
        <Text maxW="500px" fontSize="lg" textAlign="center" color="gray.500">
          Duration: 13 Weeks
        </Text>
      </Stack>
      <Divider mb={"10px"} />
      <Box border={"1px"} borderRadius={"xl"} mx={"50px"} p="20px" mt={"60px"}>
        <Heading fontSize="3xl">Earn While You Learn Projects</Heading>
        <br />
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={"lg"} fontWeight="semibold">
                    Build Full-Stack Next.js 13 Jamstack Templates
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={2}>
              You will be assigned to build a template which we will sell on
              Theme Forest and Panaverse DAO marketplace. The Panaverse DAO will
              receive 25% share on the sale of the template which will be used
              to manage the platform. An additional 15% will be spent on
              marketing the template. 60% of the revenues will be distributed to
              the developer through the Panaverse DAO in the form of Panaverse
              tokens.
              <br />
              <Link href="https://github.com/panaverse/panaverse-template-standard">
                The Template Standard
              </Link>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={"lg"} fontWeight="semibold">
                    Build GraphQL APIs
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={2}>
              You will be assigned to build APIs for which you will sell
              subscriptions on the Panaverse DAO Marketplace. The Panaverse DAO
              will receive 25% share on the sale of the template which will be
              used to manage the platform. An additional 15% will be spent on
              marketing the template. 60% of the revenues will be distributed to
              the developer through the Panaverse DAO in the form of Panaverse
              tokens.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
      <Footer />
    </div>
  );
};

export default q1;
