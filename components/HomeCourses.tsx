import { SVGProps } from "react";
import {
  Container,
  Box,
  chakra,
  Text,
  SimpleGrid,
  Flex,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
interface IFeature {
  heading: string;
  content: string;
  icon: SVGProps<SVGElement>;
  link: string;
}

const features: any[] = [
  {
    heading: "Web 3.0",
    content:
      "This Web 3.0 specialization focuses on developing full-stack Web 3.0 experiences for the next generation of the internet.",
    icon: (
      <svg
        width={36}
        height={36}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        ></path>
      </svg>
    ),
    link: "",
  },
  {
    heading: "Metaverse",
    content:
      "This Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet.",
    icon: (
      <svg
        width={36}
        height={36}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        ></path>
      </svg>
    ),
    link: "",
  },
  {
    heading: "Blockchain",
    content:
      "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet.",
    icon: (
      <svg
        width={36}
        height={36}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        ></path>
      </svg>
    ),
    link: "",
  },
  {
    heading: "Artificial Intelligence",
    content:
      "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
    icon: (
      <svg
        width={36}
        height={36}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        ></path>
      </svg>
    ),
    link: "",
  },

  {
    heading: "Cloud-Native Computing",
    content:
      "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
    icon: (
      <svg
        width={36}
        height={36}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        ></path>
      </svg>
    ),
    link: "",
  },
  {
    heading: "Ambient Computing and IoT",
    content:
      "Roll your own API to easily connect with other apps or services. Pull in updates.",
    icon: (
      <svg
        width={36}
        height={36}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        ></path>
      </svg>
    ),
    link: "",
  },
  {
    heading: "Genomics and Bioinformatics Specialization",
    content:
      "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved",
    icon: (
      <svg
        width={36}
        height={36}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        ></path>
      </svg>
    ),
    link: "",
  },
  {
    heading: "Network Programmability and Automation Specialization",
    content:
      "Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile",
    icon: (
      <svg
        width={36}
        height={36}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        ></path>
      </svg>
    ),
    link: "",
  },
];

const Features = () => {
  return (
    <Container maxW="6xl" p={{ base: 5, md: 10 }}>
      <chakra.h3 fontSize="4xl" fontWeight="bold" mb={20} textAlign="center">
        Courses <chakra.span color={"red.500"}>Panaverse</chakra.span> Offers
      </chakra.h3>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3 }}
        placeItems="center"
        spacing={10}
        mb={4}
      >
        {features.map((feature, index) => (
          <motion.div whileHover={{ scale: 0.95 }} key={index}>
            <Box
              bg={"gray.100"}
              p={6}
              rounded="lg"
              textAlign="center"
              pos="relative"
            >
              <Flex
                p={2}
                w="max-content"
                color="white"
                bgGradient="linear(to-l, red.300,#D2001A)"
                rounded="md"
                marginInline="auto"
                pos="absolute"
                left={0}
                right={0}
                top="-1.5rem"
                boxShadow="lg"
              >
                {feature.icon}
              </Flex>
              <chakra.h3 fontWeight="semibold" fontSize="2xl" mt={6}>
                {feature.heading}
              </chakra.h3>
              <Text fontSize="md" mt={4}>
                {feature.content}
              </Text>
              <Link href={"/Courses"} mt={4} fontSize="sm" color="red.500">
                Learn more →
              </Link>
            </Box>
          </motion.div>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Features;
