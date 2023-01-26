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
          Quarter IV (Specialization)
          <br /> Developing Smart Contracts and Planet-Scale Web 3.0 Dapps
        </Heading>
        <Text maxW="500px" fontSize="lg" textAlign="center" color="gray.500">
          Duration: 13 Weeks
        </Text>
      </Stack>
      <Box border={"1px"} borderRadius={"xl"} mx={"50px"} p="20px">
        <Heading fontSize="3xl">Course Description</Heading>
        <Text>
          In this course you will learn how to develop Web 3.0 DApps, create a
          project, deploy it in production, write smart contracts, unit test
          them, and create user interfaces for them. We will also learn to
          develop ERC-20 and NFT tokens, DAOs, Oracles, etc. Please note that in
          order to develop Web 3 applications you also need to build on top of
          Web 2.0 technologies which we have already covered in the previous
          quarters.
        </Text>
      </Box>
      <Divider mb={"10px"} />
      <Box border={"1px"} borderRadius={"xl"} mx={"50px"} p="20px" mt={"60px"}>
        <Heading fontSize="3xl">Course Outline</Heading>
        <br />
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={"lg"} fontWeight="semibold">
                    Blockchain and Metaverse Theory
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={2}>
              <Link href="https://www.amazon.com/Metaverse-How-Will-Revolutionize-Everything/dp/1324092033/ref=tmm_hrd_swatch_0">
                The Metaverse: And How It Will Revolutionize Everything by
                Matthew Ball
              </Link>
            </AccordionPanel>
            <AccordionPanel pb={2}>
              <Link href="https://www.packtpub.com/product/mastering-blockchain-fourth-edition/9781803241067">
                Mastering Blockchain - Fourth Edition by Imran Bashir
              </Link>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={"lg"} fontWeight="semibold">
                    Smart Contract Development in Solidity
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={2}>
              <Link href="https://www.packtpub.com/product/solidity-programming-essentials-second-edition/9781803231181">
                Solidity Programming Essentials - Second Edition By Ritesh Modi
              </Link>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={"lg"} fontWeight="semibold">
                    Dapp Development using Ethers.js and Next.js 13
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={2}>
              <Link href="https://github.com/panaverse/dapps-nextjs">
                Dapp Learning Repo
              </Link>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={"lg"} fontWeight="semibold">
                    Tokennomics
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
          </AccordionItem>
        </Accordion>
      </Box>
      <Footer />
    </div>
  );
};

export default q1;
