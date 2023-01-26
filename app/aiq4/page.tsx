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
          Quarter IV (Specialization) <br /> Developing Planet-Scale Intelligent
          APIs and Python Programming
        </Heading>
        <Text maxW="500px" fontSize="lg" textAlign="center" color="gray.500">
          Duration: 13 Weeks
        </Text>
      </Stack>
      <Divider mb={"10px"} />
      <Box border={"1px"} borderRadius={"xl"} mx={"50px"} p="20px">
        <Heading fontSize="3xl">Course Description</Heading>
        <Text>
          Artificial intelligence is the simulation of human intelligence
          processes by machines, especially computer systems. The AI and Deep
          Learning Specialization is a foundational program that will aid in
          your comprehension of deep learning's potential, difficulties, and
          effects as well as equip you to take part in the creation of
          cutting-edge AI technology. <br /> We will start this course by
          understanding the fundamentals and use cases for AI and move on to
          building next-gen intelligent apps using OpenAI’s powerful models and
          Next.js 13. <br />
          We'll conclude the course by learning about basic programming concepts
          using Python, such as lists, dictionaries, classes, functions, and
          loops, and practice writing clean and readable code with exercises for
          each topic. We'll also learn how to make your programs interactive and
          how to test your code safely before adding it to a project. It is a
          fast-paced, thorough introduction to programming with Python 3.10+
          that will have you writing programs, solving problems, and making
          things that work in no time. In this quarter we will also learn Git,
          the distributed version control system. We will also review Git-based
          GitHub services.
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
                    Introduction to Machine Learning, Data Science, and AI
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={2}>
              <Link href={"https://www.coursera.org/learn/ai-for-everyone"}>
                AI for Everyone
              </Link>
            </AccordionPanel>
            <AccordionPanel pb={2}>
              AI for Everyone Quiz in Week 3 Total Questions: 60, Total Time: 75
              minutes
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={"lg"} fontWeight="semibold">
                    Building Next-Gen Intelligent Apps with OpenAI’s Powerful
                    Models We will cover GPT-4, ChatGPT, etc. and Next.js 13
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={"lg"} fontWeight="semibold">
                    Python Crash Course for TypeScript Developers
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={2}>
              <Link href="https://www.amazon.com/Python-Crash-Course-2nd-Edition/dp/1593279280/ref=sr_1_5">
                Python Crash Course, 2nd Edition: A Hands-On, Project-Based
                Introduction to Programming 2nd Edition
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
