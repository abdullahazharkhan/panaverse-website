import * as React from "react";
import {
  Container,
  Text,
  SimpleGrid,
  Box,
  chakra,
  Stack,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { CiPaperplane } from "react-icons/ci";

interface StatData {
  label: string;
  score: string;
}

const statData: StatData[] = [
  {
    label: "Total DAO Members",
    score: "3500+",
  },
  {
    label: "Total Students Enrolled",
    score: "2000+",
  },
  {
    label: "Faculty Members",
    score: "7+",
  },
  {
    label: "Followers on Twitter",
    score: "1.5K+",
  },
];

const planList = [
  "Reshape Pakistan.",
  "Build Economy.",
  "Educate Youth about current situation",
];

const HomeObjct = () => {
  return (
    <Container maxW="6xl" p={{ base: 4, sm: 10 }} pt={"20px"}>
      <Stack
        direction={{ base: "column", md: "row" }}
        justifyContent="space-between"
      >
        <Stack spacing={4}>
          <chakra.h1 fontSize="3xl" lineHeight={1.2} fontWeight="bold">
            Our Ultimate Goal
          </chakra.h1>
          <Text fontSize="md" color="gray.400" maxW="480px">
            The mission of{" "}
            <chakra.span color={"red.500"}>Panaverse</chakra.span> is to reshape
            Pakistan by revolutionizing education, research, and business by
            adopting latest, cutting-edge technologies. Experts are calling this
            the 4th industrial revolution. We want Pakistan to become a global
            hub for AI, data science, cloud native computing, edge computing,
            blockchain, augmented reality, and internet of things.
          </Text>

          <Stack spacing={2}>
            {planList.map((data, index) => (
              <HStack key={index} alignItems="center" spacing={1} fontSize="md">
                <Icon as={CiPaperplane} w={4} h={4} color="#D2001A" />
                <Text color={"gray.600"} fontSize="md">
                  {data}
                </Text>
              </HStack>
            ))}
          </Stack>
        </Stack>
        <Stack>
          <SimpleGrid
            columns={2}
            spacing={5}
            pt={8}
            pl={{ base: 0, md: 10 }}
            margin="auto 0"
          >
            {statData.map((data, index) => (
              <Stack
                key={index}
                pl={3}
                py={1}
                pr={1}
                borderLeft="2px solid"
                borderLeftColor="#D2001A"
                justifyContent="space-between"
              >
                <Box fontSize="2xl" fontWeight="bold" color="#D2001A">
                  {data.score}
                </Box>
                <Text fontSize="md">{data.label}</Text>
              </Stack>
            ))}
          </SimpleGrid>
        </Stack>
      </Stack>
    </Container>
  );
};

export default HomeObjct;
