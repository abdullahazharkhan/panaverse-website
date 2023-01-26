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
          Quarter I (Core) <br /> Object-Oriented Programming using TypeScript
        </Heading>
        <Text maxW="500px" fontSize="lg" textAlign="center" color="gray.500">
          Duration: 13 Weeks
        </Text>
      </Stack>
      <Divider mb={"10px"} />
      <Box border={"1px"} borderRadius={"xl"} mx={"50px"} p="20px">
        <Heading fontSize="3xl">Course Description</Heading>
        <Text>
          We will start the program by learning the fundamentals of
          Object-Oriented programming using JavaScript and TypeScript. We will
          also understand the latest Web trends i.e. Web 3.0 and Metaverse
          concepts and try to understand their working from the perspective of
          the users.
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
                    HTML and CSS (Homework)
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={2}>
              <Link
                href={
                  "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"
                }
              >
                Learn HTML by Hira Khan (Watch Recorded Videos)
              </Link>
            </AccordionPanel>
            <AccordionPanel pb={2}>
              <Link
                href={
                  "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob"
                }
              >
                Learn CSS Intro by Hira Khan (Watch Recorded Videos)
              </Link>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={"lg"} fontWeight="semibold">
                    Web 3.0 and Metaverse Theory
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={2}>
              <Link href="https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing">
                Introduction to Panaverse DAO
              </Link>
            </AccordionPanel>
            <AccordionPanel pb={2}>
              <Link href="https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing">
                Web 3.0 User Manual
              </Link>
            </AccordionPanel>
            <AccordionPanel pb={2}>
              <Link href="https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing">
                Virtual and Augmented Metaverse User Manual
              </Link>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={"lg"} fontWeight="semibold">
                    Fundamentals of JavaScript
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={2}>
              <Link href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQdc0NSLknxmxBch5gLOqyo">
                Learn JavaScript by Zeeshan Hanif (Watch Recorded Videos)
              </Link>
            </AccordionPanel>
            <AccordionPanel pb={2}>
              <Link href="https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md">
                Getting Started Exercises with JavaScript and Node.js
              </Link>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={"lg"} fontWeight="semibold">
                    Object-Oriented Programming with TypeScript
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={2}>
              <Link href="https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1_1">
                Chapters 1-11 of Learning TypeScript: Enhance Your Web
                Development Skills Using Type-Safe JavaScript
              </Link>
            </AccordionPanel>
            <AccordionPanel pb={2}>
              <Link href="https://github.com/panaverse/learn-typescript">
                Learning Repository
              </Link>
            </AccordionPanel>
            <AccordionPanel pb={2}>
              <Link href="https://github.com/panaverse/learn-typescript">
                Homework Projects
              </Link>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={"lg"} fontWeight="semibold">
                    Quarter Break Assignments and Quizzes
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={2}>
              <Link href="https://github.com/panaverse/learn-nextjs/tree/main/assignment00_cloud_to_edge">
                Edge Computing Presentation
              </Link>
            </AccordionPanel>
            <AccordionPanel pb={2}>
              <Link href="https://github.com/panaverse/learn-nextjs/tree/main/assignment01_todo_app">
                Todo App
              </Link>
            </AccordionPanel>
            <AccordionPanel pb={2}>
              <Link href="https://github.com/panaverse/styling-nextjs-projects/tree/main/project00_pricing_ui">
                Pricing UI
              </Link>
            </AccordionPanel>
            <AccordionPanel pb={2}>
              <Link href="https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing">
                Build a Panaverse DAO Syllabus Website using Next.js 13 given
                the content from the following document (linked)
              </Link>
            </AccordionPanel>
            <AccordionPanel pb={2}>
              <Link href="https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing">
                Build a new PIAIC Website using Next.js 13 given the content
                from the current PIAIC Website and from the document (linked)
              </Link>
            </AccordionPanel>
            <AccordionPanel pb={2}>
              <Link href="https://www.youtube.com/playlist?list=PLKueo-cldy_HjRnPUL4G3pWHS7FREAizF">
                (TEST) Fundamentals of Version Control with Git Quiz
              </Link>
            </AccordionPanel>
            <AccordionPanel pb={2}>
              <Link href="https://github.com/panaverse/learn-typescript">
                (TEST) TypeScript Proficiency Quiz
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
