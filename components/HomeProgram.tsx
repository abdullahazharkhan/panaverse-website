import {
  chakra,
  Stack,
  useColorModeValue,
  Container,
  Link,
  Box,
  Button,
} from "@chakra-ui/react";

const HomeProgram = () => {
  return (
    <Container maxW="6xl" p="6">
      <Banner />
    </Container>
  );
};

const Banner = () => {
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      spacing={5}
      alignItems={{ base: "flex-start", md: "center" }}
      justifyContent="space-between"
      rounded="lg"
      boxShadow="md"
      bg={useColorModeValue("gray.100", "gray.700")}
      p={{ base: 8, md: 16 }}
    >
      <Box>
        <chakra.h1 fontSize="4xl" lineHeight={1.2} fontWeight="bold">
          Program in a Nutshell <br />
        </chakra.h1>
        <chakra.h2 fontSize="md" lineHeight={1.5} fontWeight="semibold">
          In this brand-new type of curriculum, students will learn how to make
          money and boost exports in the classroom and will begin doing so
          within six months of the program's beginning. It resembles a cross
          between a corporate venture and an educational project.
        </chakra.h2>
      </Box>
      <Stack
        direction={{ base: "column", sm: "row" }}
        spacing={{ base: 0, sm: 3 }}
        w={{ base: "100%", sm: "auto" }}
      >
        <Button
          as={Link}
          href="https://www.piaic.org/"
          color="white"
          variant="solid"
          size="lg"
          rounded="md"
          mb={{ base: 2, sm: 0 }}
          lineHeight={1}
          bgGradient="linear(to-l, red.300,#D2001A)"
          _hover={{ bgGradient: "linear(to-l, red.300,#D2001A)" }}
        >
          Apply
        </Button>
        <Button
          as={Link}
          href="#"
          size="lg"
          rounded="md"
          mb={{ base: 2, sm: 0 }}
          bg={useColorModeValue("gray.200", "gray.600")}
          _hover={{ bg: useColorModeValue("gray.300", "gray.500") }}
          lineHeight={1}
        >
          Visit PIAIC
        </Button>
      </Stack>
    </Stack>
  );
};

export default HomeProgram;
