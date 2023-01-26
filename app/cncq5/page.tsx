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
          Quarter V (Specialization) <br /> Developing Multi-Cloud Apps using
          CDK for Terraform
        </Heading>
        <Text maxW="500px" fontSize="lg" textAlign="center" color="gray.500">
          Duration: 13 Weeks
        </Text>
      </Stack>
      <Divider mb={"10px"} />
      <Box border={"1px"} borderRadius={"xl"} mx={"50px"} p="20px">
        <Heading fontSize="3xl">Course Description</Heading>
        <Text>
          Terraform lets you use the same workflow to manage multiple providers
          and handle cross-cloud dependencies. This simplifies management and
          orchestration for large-scale, multi-cloud infrastructures.
          <br />
          Cloud Development Kit for Terraform (CDKTF) allows you to use familiar
          programming languages to define and provision infrastructure. This
          gives you access to the entire Terraform ecosystem without learning
          HashiCorp Configuration Language (HCL) and lets you leverage the power
          of your existing toolchain for testing, dependency management, etc.
        </Text>
      </Box>
      <Box border={"1px"} borderRadius={"xl"} mx={"50px"} p="20px" mt={"60px"}>
        <Heading fontSize="3xl">Course Outline</Heading>
        <br />
        <Link href="https://developer.hashicorp.com/terraform/cdktf">
          CDK for Terraform
        </Link>
      </Box>
      <Footer />
    </div>
  );
};

export default q1;
