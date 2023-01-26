"use client";
import {
  chakra,
  Link,
  Stack,
  Box,
  Button,
  useColorModeValue,
  Heading,
  Divider,
  Text,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icon
import { motion } from "framer-motion";
import { BsDiscord } from "react-icons/bs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <Box>
      <Navbar />
      <Stack
        pos="relative"
        bgGradient={`linear(to-l, red.50, red.100 , red.50)`}
        height="250px"
        w="100%"
      ></Stack>
      <Box
        maxW="3xl"
        p={4}
        isolation="isolate"
        zIndex={3}
        mt="-4rem"
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
              fontWeight="bold"
              textAlign={"center"}
            >
              About
              <span color="#D2001A"> Panaverse</span>
            </chakra.h1>
          </Stack>
        </Box>
      </Box>
      <Divider />
      <motion.div whileHover={{ scale: 0.98 }}>
        <Box
          mt={"30px"}
          p={{ sm: 8, md: 10, lg: 15 }}
          mx="90px"
          border={"1px"}
          borderRadius={"xl"}
        >
          <Heading
            fontSize={{ sm: "3xl", md: "3xl", lg: "4xl" }}
            textAlign="center"
          >
            Web 3.0
          </Heading>
          <br />
          <Text>
            The internet is without a doubt the most important technological
            development in human history. Web3, 3D Metaverse, AI, IoT, Cloud,
            and Edge technologies expand the internet as we know it by
            introducing novel features and advancements. Metaverse will make use
            of all aspects of modern technology, including 3D, VR, AR, AI,
            blockchain, cloud and edge computing, voice computing, ambient
            computing, and more.
          </Text>
        </Box>
      </motion.div>
      <Divider />
      <motion.div whileHover={{ scale: 0.98 }}>
        <Box
          mt={"30px"}
          px={{ sm: 8, md: 10, lg: 15 }}
          mx="90px"
          border={"1px"}
          borderRadius={"xl"}
        >
          <Heading
            fontSize={{ sm: "3xl", md: "3xl", lg: "4xl" }}
            textAlign="center"
          >
            The Program in a Nutshell: Earn While You Learn
          </Heading>
          <br />
          <Text>
            In this brand-new type of curriculum, students will learn how to
            make money and boost exports in the classroom and will begin doing
            so within six months of the program's beginning. It resembles a
            cross between a corporate venture and an educational project.
          </Text>
        </Box>
      </motion.div>
      <Divider />
      <motion.div whileHover={{ scale: 0.98 }}>
        <Box
          mt={"30px"}
          p={{ sm: 8, md: 10, lg: 15 }}
          mx="90px"
          border={"1px"}
          borderRadius={"xl"}
        >
          <Heading
            fontSize={{ sm: "3xl", md: "3xl", lg: "4xl" }}
            textAlign="center"
          >
            Program of Studies
          </Heading>
          <br />
          <Text>
            This curriculum is intended for beginners who want to learn software
            development from the ground up. The first three quarters are shared
            by all specialties and are dedicated to studying Object-Oriented
            Programming and cutting-edge Full-Stack Web 2.0 development. It is
            going to be a fifteen-month-long hybrid program that includes both
            onsite and online classes and is divided into five quarters of 13
            weeks each. The emphasis will be on hands-on learning by educating
            students to produce projects. To accommodate everyone, courses will
            be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on
            weekdays. It employs a hybrid teaching format, with core onsite
            classes complemented by online Zoom laboratories and recorded
            videos.
          </Text>
        </Box>
      </motion.div>
      <Footer />
    </Box>
  );
};

export default Index;
