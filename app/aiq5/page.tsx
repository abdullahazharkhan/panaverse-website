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
          Quarter V (Specialization) <br /> Deep Learning and MLOps
        </Heading>
        <Text maxW="500px" fontSize="lg" textAlign="center" color="gray.500">
          Duration: 13 Weeks
        </Text>
      </Stack>
      <Divider mb={"10px"} />
      <Box border={"1px"} borderRadius={"xl"} mx={"50px"} p="20px">
        <Heading fontSize="3xl">Course Description</Heading>
        <Text>
          This course will help you understand the capabilities, challenges, and
          consequences of deep learning and prepare you to participate in the
          development of leading-edge AI technology. We will finish the program
          by learning how to envision, create, and maintain integrated systems
          that run constantly in production. Production systems must manage
          constantly changing data, in stark contrast to typical machine
          learning modeling. The production system must also operate
          continuously at the lowest possible cost while delivering the highest
          possible performance.
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
                    Deep Learning with Tensorflow
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={2}>
              <Link
                href={
                  "https://www.amazon.com/Learning-Python-Second-Fran%C3%A7ois-Chollet/dp/1617296864/ref=sr_1_2"
                }
              >
                Deep Learning with Python, Second Edition 2nd Edition
              </Link>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={"lg"} fontWeight="semibold">
                    Machine Learning Engineering for Production (MLOps) using
                    Terraform for CDK
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={2}>
              <Link
                href={
                  "https://betterprogramming.pub/a-comprehensive-guide-to-mlops-infrastructure-as-code-iac-ef4c97742351"
                }
              >
                A Comprehensive Guide to MLOps Terraform: Infrastructure As
                Code(IaC)
              </Link>
            </AccordionPanel>
            <AccordionPanel pb={2}>
              <Link
                href={
                  "https://towardsdatascience.com/mlops-leveraging-aws-sagemaker-terraform-and-gitlab-e7d97eaa6dce"
                }
              >
                MLOps leveraging AWS SageMaker and Terraform
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
