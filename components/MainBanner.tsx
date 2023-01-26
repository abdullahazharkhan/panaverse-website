import * as React from "react";
import { motion } from "framer-motion";
import {
  chakra,
  Container,
  Stack,
  HStack,
  Text,
  useColorModeValue,
  Button,
  Image,
  Skeleton,
  Box,
  Link,
  Icon,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { GoChevronRight } from "react-icons/go";
import { BsFillBookmarkFill } from "react-icons/bs";

const MainBanner = () => {
  return (
    <Container
      maxW="9xl"
      px={{ base: 6, md: 3, lg: 1 }}
      py={24}
      bg="#EFEFEF"
      mt={"-9px"}
    >
      <Stack direction={{ base: "column", md: "row" }} justifyContent="center">
        <Stack
          direction="column"
          spacing={6}
          justifyContent="center"
          maxW="600px"
        >
          <HStack
            p={1}
            rounded="full"
            fontSize="sm"
            textDecoration={"none"}
            w="max-content"
            bg={useColorModeValue("gray.300", "gray.700")}
          >
            <Box
              py={1}
              px={2}
              lineHeight={1}
              cursor={"pointer"}
              rounded="full"
              color="white"
              bgGradient="linear(to-l, red.300,#D2001A)"
            >
              Get Enrolled
            </Box>
            <HStack spacing={1} alignItems="center" justifyContent="center">
              <Link lineHeight={1} href="https://www.piaic.org/">
                Visit PIAIC
              </Link>
              <Icon as={GoChevronRight} w={4} h={4} />
            </HStack>
          </HStack>
          <chakra.h1
            fontSize="5xl"
            lineHeight={1}
            fontWeight="bold"
            textAlign="left"
          >
            Become a Certified Developer <br />
            <chakra.span color="red.500">with Panaverse</chakra.span>
          </chakra.h1>
          <Text
            fontSize="1.2rem"
            textAlign="left"
            lineHeight="1.375"
            fontWeight="400"
            color="gray.500"
          >
            A One and Quarter Years Panaverse DAO Earn as you Learn Program.
            <br />
            <chakra.span className="spoiler">
              Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
              Cloud, Edge, and Ambient Computing/IoT Technologies
            </chakra.span>
          </Text>
          <HStack
            spacing={{ base: 0, sm: 2 }}
            mb={{ base: "3rem !important", sm: 0 }}
            flexWrap="wrap"
          >
            <chakra.button
              w={{ base: "100%", sm: "auto" }}
              h={12}
              px={6}
              color="white"
              //   size="lg"
              rounded="md"
              mb={{ base: 2, sm: 0 }}
              zIndex={5}
              fontWeight="semibold"
              lineHeight={1}
              transition={"0.2s"}
              bg="#D2001A"
              _hover={{
                bg: useColorModeValue("red.700", "red.700"),
                transition: "0.2s ease",
                opacity: 0.9,
              }}
            >
              <Link href="/Courses"> Courses We Offer </Link>
              <Icon as={BsFillBookmarkFill} h={4} w={4} ml={1} />
            </chakra.button>
            <Box
              display="flex"
              justifyContent="center"
              bg={useColorModeValue("white", "gray.800")}
              w={{ base: "100%", sm: "auto" }}
              border="1px solid"
              borderColor="gray.300"
              p={3}
              lineHeight={1.18}
              rounded="md"
              boxShadow="md"
              cursor={"pointer"}
            >
              <Link href="/About">About</Link>
            </Box>
          </HStack>
        </Stack>
        <Box ml={{ base: 0, md: 5 }} pos="relative">
          <DottedBox />
          <motion.div
            initial={{ rotate: -3 }}
            animate={{ rotate: 3 }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Image
              w={400}
              h="100%"
              minW={{ base: "auto", md: "30rem" }}
              objectFit="cover"
              src={`https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg?w=800`}
              rounded="md"
              fallback={<Skeleton />}
            />
          </motion.div>
        </Box>
      </Stack>
    </Container>
  );
};

function DottedBox() {
  return (
    <Box
      position="absolute"
      left="-45px"
      top="-30px"
      height="full"
      maxW="700px"
      zIndex={-1}
    >
      <svg
        color={useColorModeValue("rgba(55,65,81, 0.1)", "rgba(55,65,81, 0.7)")}
        width="350"
        height="420"
        fill="none"
      >
        <defs>
          <pattern
            id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" fill="currentColor"></rect>
          </pattern>
        </defs>
        <rect
          width="404"
          height="404"
          fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
        ></rect>
      </svg>
    </Box>
  );
}

export default MainBanner;
