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
          Quarter IV (Specialization) <br /> Certified Kubernetes Application
          Developer (CKAD)
        </Heading>
        <Text maxW="500px" fontSize="lg" textAlign="center" color="gray.500">
          Duration: 13 Weeks
        </Text>
      </Stack>
      <Divider mb={"10px"} />
      <Box border={"1px"} borderRadius={"xl"} mx={"50px"} p="20px">
        <Heading fontSize="3xl">Course Description</Heading>
        <Text>
          Cloud-native architecture and technologies are an approach to
          designing, constructing, and operating workloads that are built in the
          cloud and take full advantage of the cloud computing model.
          Cloud-native technologies empower organizations to build and run
          scalable applications in modern, dynamic environments such as public,
          private, and hybrid clouds. Containers, service meshes, microservices,
          immutable infrastructure, and declarative APIs exemplify this
          approach. <br />
          These techniques enable loosely coupled systems that are resilient,
          manageable, and observable. Combined with robust automation, they
          allow engineers to make high-impact changes frequently and predictably
          with minimal toil. <br />
          Kubernetes is an open-source system for automating the deployment,
          scaling, and management of containerized applications. In this course,
          you will learn how to develop cloud applications using cloud-native
          technologies like Containers, Kubernetes, and CDK for Kubernetes.
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
                    Kubernetes: Up and Running: Dive into the Future of
                    Infrastructure 3rd Edition
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={2}>
              <Link
                href={
                  "https://www.amazon.com/Kubernetes-Running-Dive-Future-Infrastructure/dp/109811020X/ref=sr_1_3"
                }
              >
                https://www.amazon.com/Kubernetes-Running-Dive-Future-Infrastructure/dp/109811020X/ref=sr_1_3
              </Link>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={"lg"} fontWeight="semibold">
                    Cloud Development Kit for Kubernetes
                    <Link href="https://cdk8s.io/">
                      {" "}
                      <br /> https://cdk8s.io/
                    </Link>
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
