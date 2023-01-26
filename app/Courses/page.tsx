"use client";
import Navbar from "@/components/Navbar";
import React from "react";
import {
  Box,
  chakra,
  Container,
  Link,
  Text,
  HStack,
  VStack,
  Stack,
  useColorModeValue,
  Flex,
  Icon,
  Heading,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";
import Footer from "@/components/Footer";
interface CardProps {
  title: string;
  categories: string[];
  content: string;
  created_at: string;
  link: string;
}
const articles = [
  {
    id: 1,
    categories: ["Web Dev", "With Videos"],
    title: "Web 3.0 and Blockchain",
    content: `This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet. `,
    created_at: "2023",
    link: "/metaverse",
  },
  {
    id: 2,
    categories: ["Web Dev", "With Videos"],
    title: "Metaverse",
    content: `This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet. `,
    created_at: "2023",
    link: "/metaverse",
  },
  {
    id: 3,
    categories: ["AI", "With Videos"],
    title: "Artificial Intelligence",
    content: `The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.`,
    created_at: "2022",
    link: "/ai",
  },
  {
    id: 4,
    categories: ["CNC", "With Videos"],
    title: "Cloud-Native Computing Specialization",
    content: `The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes. 
    `,
    created_at: "2022",
    link: "/cloudnative",
  },
  {
    id: 5,
    categories: ["IoT", "With Videos"],
    title: "Ambient Computing and IoT Specialization",
    content: `The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter, and Embedded Devices. `,
    created_at: "2022",
    link: "/iot",
  },
  {
    id: 6,
    categories: ["Bio", "With Videos"],
    title: "Genomics and Bioinformatics Specialization",
    content: `Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured `,
    created_at: "2023",
    link: "/bio",
  },
  {
    id: 7,
    categories: ["NP", "With Videos"],
    title: "Network Programmability and Automation Specialization",
    content: `his course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.`,
    created_at: "2023",
    link: "/network",
  },
];

const CoursesSec = () => {
  return (
    <Container maxWidth="4xl" p={{ base: 2, sm: 10 }}>
      {articles.map((article, index) => (
        <Flex key={index} mb="10px">
          <LineWithDot />
          <motion.div whileHover={{ scale: 0.9 }}>
            <Card {...article} />
          </motion.div>
        </Flex>
      ))}
    </Container>
  );
};
const LineWithDot = () => {
  return (
    <Flex pos="relative" alignItems="center" mr="40px">
      <chakra.span
        position="absolute"
        left="50%"
        height="calc(100% + 10px)"
        border="1px solid"
        borderColor={useColorModeValue("red.100", "red.200")}
        top="0px"
      ></chakra.span>
      <Box pos="relative" p="10px">
        <Box
          pos="absolute"
          width="100%"
          height="100%"
          bottom="0"
          right="0"
          top="0"
          left="0"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          backgroundColor="rgb(255, 255, 255)"
          borderRadius="100px"
          border="3px solid #D2001A"
          backgroundImage="none"
          opacity={1}
        ></Box>
      </Box>
    </Flex>
  );
};

const Card = ({ title, categories, content, created_at, link }: CardProps) => {
  return (
    <HStack
      p={{ base: 3, sm: 6 }}
      bg={useColorModeValue("gray.100", "gray.800")}
      spacing={5}
      rounded="lg"
      alignItems="center"
      pos="relative"
      _before={{
        content: `""`,
        w: "0",
        h: "0",
        borderColor: `transparent ${useColorModeValue(
          "#edf2f6",
          "#1a202c"
        )} transparent`,
        borderStyle: "solid",
        borderWidth: "15px 15px 15px 0",
        position: "absolute",
        left: "-15px",
        display: "block",
      }}
    >
      <Icon as={FaCode} w={12} h={12} color="#D2001A" />
      <Box>
        <HStack spacing={2} mb={1}>
          {categories.map((cat) => (
            <Text fontSize="sm" key={cat}>
              {cat}
            </Text>
          ))}
        </HStack>
        <VStack spacing={0} mb={3} textAlign="left">
          <chakra.h1
            _hover={{ color: "#D2001A" }}
            fontSize="2xl"
            lineHeight={1.2}
            fontWeight="bold"
            w="100%"
          >
            <Link href={link}>{title}</Link>
          </chakra.h1>
          <Text fontSize="md" noOfLines={2}>
            {content}
          </Text>
        </VStack>
        <Text fontSize="sm">{created_at}</Text>
      </Box>
    </HStack>
  );
};

function Courses() {
  return (
    <div>
      <Navbar />
      <Box pb={8}>
        <Stack
          pos="relative"
          bgGradient={`linear(to-l, red.50, red.100 , red.50)`}
          height="250px"
          w="100%"
        ></Stack>
        <Box
          maxW="4xl"
          p={4}
          isolation="isolate"
          zIndex={3}
          mt="-5rem"
          marginInline="auto"
        >
          <Box
            boxShadow={useColorModeValue(
              "0 4px 6px rgba(160, 174, 192, 0.6)",
              "0 4px 6px rgba(9, 17, 28, 0.9)"
            )}
            bg={useColorModeValue("white", "gray.800")}
            p={{ base: 4, sm: 8 }}
            overflow="hidden"
            rounded="2xl"
          >
            <Stack
              pos="relative"
              zIndex={1}
              direction="column"
              spacing={5}
              textAlign="left"
            >
              <chakra.h1
                fontSize="5xl"
                lineHeight={1.2}
                textAlign={"center"}
                fontWeight="bold"
                color={"red.800"}
              >
                Earn While You Learn
              </chakra.h1>
            </Stack>
          </Box>
        </Box>
      </Box>
      <hr />

      <CoursesSec />
      <hr />
      <Footer />
    </div>
  );
}

export default Courses;
