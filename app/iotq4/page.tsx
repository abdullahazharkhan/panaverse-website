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
          Quarter IV (Specialization) <br /> Ambient Computing with Voice
          Assistants and Matter Devices
        </Heading>
        <Text maxW="500px" fontSize="lg" textAlign="center" color="gray.500">
          Duration: 13 Weeks
        </Text>
      </Stack>
      <Divider mb={"10px"} />
      <Box border={"1px"} borderRadius={"xl"} mx={"50px"} p="20px">
        <Heading fontSize="3xl">Course Description</Heading>
        <Text>
          Ambient computing, also commonly referred to as ubiquitous computing,
          is the concept of blending computing power into our everyday lives in
          a way that is embedded into our surroundings - invisible but useful.
          In a multi-device world, people don't want to spend their life fussing
          with technology. An ambient approach gets the tech out of your way so
          you can live your life while getting the help you need. It doesn't
          matter what device you're using, what context you're in, whether
          you're talking, typing, or tapping. The technology in your life works
          together seamlessly. Ambient computing uses all aspects of modern-day
          technology, including voice assistants, artificial intelligence,
          sensors, connectivity, cloud computing and more.
          <br />
          If you were thinking that the IoT and ambient computing sound a lot
          alike, you aren't wrong; the two concepts are intertwined. IoT refers
          to the vast array of devices that connect to the internet to optimize
          their functionality, like smart sensors and smart speakers: ambient
          computing builds on that. Ambient computing focuses on the interaction
          between these devices once they are connected.
          <br />
          Matter, the next-generation smart home standard, solves many smart
          home pain points while bringing all our IoT devices together. Some of
          the biggest tech companies are working together to make Matter a
          unified protocol for future smart homes. These companies include
          Apple, Amazon, and Google. This means Apple HomeKit, Amazon Alexa,
          Samsung SmartThings, Google Nest, and Samsung SmartThings will support
          the Matter standard by default for all new devices.
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
                    Alexa Skill Developement
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={2}>
              <Link href={"https://developer.amazon.com/en-US/alexa"}>
                https://developer.amazon.com/en-US/alexa
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
