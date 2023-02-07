"use client";
import {
  chakra,
  Stack,
  Box,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <Box>
      <Navbar />
      <Stack
        pos="relative"
        bgGradient={`linear(to-l, red.50, red.100 , red.50)`}
        height="150px"
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
      <Footer />
    </Box>
  );
};

export default Index;
