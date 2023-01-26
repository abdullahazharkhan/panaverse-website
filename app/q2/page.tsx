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
          Quarter II (Core) <br /> Developing Planet-Scale Web 2.0 Serverless
          Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK)
          for Terraform
        </Heading>
        <Text maxW="500px" fontSize="lg" textAlign="center" color="gray.500">
          Duration: 13 Weeks
        </Text>
      </Stack>
      <Divider mb={"10px"} />
      <Box border={"1px"} borderRadius={"xl"} mx={"50px"} p="20px">
        <Heading fontSize="3xl">Course Description</Heading>
        <Text>
          The objective of this course is to teach participants to develop
          customer-facing planet-scale Websites, Full-Stack Apps and templates,
          Dashboards, and Muti-Cloud Serverless APIs. By the end of the quarter,
          the participants will be able to develop and deploy web platforms like
          Facebook, Shopify, etc. The technologies covered in this course will
          include Next.js 13, Figma, Tailwind CSS, Chakra UI, tRPC, QraphQL,
          Prisma, Cockroachdb Serverless (PostgreSQL Compatible), AWS Serverless
          Technologies, and Cloud Development Kit for Terraform (CDKTF).
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
                    Next.js 13 Web Development
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={2}>
              <Link href={"https://beta.nextjs.org/docs"}>
                Next 13 Official Documentation
              </Link>
            </AccordionPanel>
            <AccordionPanel pb={2}>
              <Link href={"https://github.com/panaverse/learn-nextjs"}>
                Learn Next.js 13 Learning Repo
              </Link>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={"lg"} fontWeight="semibold">
                    Next.js 13 using Chakra UI (Remote Zoom Class)
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={2}>
              <Link href="https://www.freecodecamp.org/news/css-flexbox-complete-guide/">
                CSS Flexbox Explained – Complete Guide to Flexible Containers
                and Flex Items
              </Link>
            </AccordionPanel>
            <AccordionPanel pb={2}>
              <Link href="https://chakra-ui.com/getting-started">
                Chakra UI Docs
              </Link>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={"lg"} fontWeight="semibold">
                    UI/UX Design with Figma, TailwindCSS, and Chakra UI (Remote
                    Zoom Class)
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={2}>
              <Link href="https://www.amazon.com/Designing-Prototyping-Interfaces-Figma-interactive/dp/180056418X/ref=sr_1_1_sspa">
                Designing and Prototyping Interfaces with Figma: Learn essential
                UX/UI design principles by creating interactive prototypes for
                mobile, tablet, and desktop by Fabio Staiano
              </Link>
            </AccordionPanel>
            <AccordionPanel pb={2}>
              <Link href="https://www.figma.com/community/file/768809027799962739">
                Figma Design Kit for TailwindCSS
              </Link>
            </AccordionPanel>
            <AccordionPanel pb={2}>
              <Link href="https://www.figma.com/community/file/971408767069651759">
                Chakra UI Figma Kit
              </Link>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={"lg"} fontWeight="semibold">
                    API Routes with Next.js (Remote Zoom Class)
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={2}>
              <Link href="https://nextjs.org/docs/api-routes/introduction">
                API Routes
              </Link>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={"lg"} fontWeight="semibold">
                    APIs with Next.js and tRPC (Remote Zoom Class)
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={2}>
              <Link href="https://codevoweb.com/build-a-trpc-crud-api-example-with-next-js/">
                Build a tRPC CRUD API Example with Next.js
              </Link>
            </AccordionPanel>
            <AccordionPanel pb={2}>
              <Link href="https://brockherion.dev/blog/posts/stop-building-rest-apis-for-your-next-apps/">
                Stop building REST APIs for your Next.js apps, use tRPC instead
              </Link>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={"lg"} fontWeight="semibold">
                    APIs with Next.js and tRPC (Remote Zoom Class)
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={2}>
              <Link href="https://codevoweb.com/build-a-trpc-crud-api-example-with-next-js/">
                Build a tRPC CRUD API Example with Next.js
              </Link>
            </AccordionPanel>
            <AccordionPanel pb={2}>
              <Link href="https://brockherion.dev/blog/posts/stop-building-rest-apis-for-your-next-apps/">
                Stop building REST APIs for your Next.js apps, use tRPC instead
              </Link>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={"lg"} fontWeight="semibold">
                    SQL and Prisma
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={2}>
              <Link href="https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres">
                Start from scratch with relational databases
              </Link>
            </AccordionPanel>
            <AccordionPanel pb={2}>
              <Link href="https://www.youtube.com/watch?v=5hzZtqCNQKk">
                SQL For Beginners Video Tutorial
              </Link>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={"lg"} fontWeight="semibold">
                    Next.js 13 using TailwindCSS (Remote Zoom Class)
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={2}>
              <Link href="https://pragprog.com/titles/tailwind2/modern-css-with-tailwind-second-edition/">
                Modern CSS with Tailwind, Second Edition by Noel Rappin
              </Link>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={"lg"} fontWeight="semibold">
                    AWS Application Composer (Remote Zoom Class)
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={2}>
              <Link href="https://www.youtube.com/watch?v=BujE_tik5r8">
                What is AWS Application Composer?
              </Link>
            </AccordionPanel>
            <AccordionPanel pb={2}>
              <Link href="https://www.youtube.com/watch?v=p411uh363jQ">
                Event-driven apps with AWS Application Composer
              </Link>
            </AccordionPanel>
            <AccordionPanel pb={2}>
              <Link href="https://aws.amazon.com/application-composer/">
                Visually design and build serverless applications quickly
              </Link>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={"lg"} fontWeight="semibold">
                    Web 2.0 Projects
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={2}>
              <Link href="https://github.com/panaverse/nextjs-projects">
                Next.js Projects
              </Link>
            </AccordionPanel>
            <AccordionPanel pb={2}>
              <Link href="https://github.com/panaverse/styling-nextjs-projects">
                Styling Next.js Projects using TailwindCSS and Chakra UI
              </Link>
            </AccordionPanel>
            <AccordionPanel pb={2}>
              <Link href="https://github.com/ogzhanolguncu/min-todo">
                Todo Full-Stack App
              </Link>
            </AccordionPanel>
            <AccordionPanel pb={2}>
              <Link href="https://www.youtube.com/watch?v=nzJsYJPCc80">
                Build a Twitter Clone
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
