import {
  Container,
  Text,
  VStack,
  Stack,
  Avatar,
  Icon,
  useColorModeValue,
  Heading,
  chakra,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
// Here we have used react-icons package for the icon
import { FaQuoteRight } from "react-icons/fa";
interface TestimonialAttributes {
  username: string;
  position: string;
  company: string;
  content: string;
  image: string;
}

const testimonial: TestimonialAttributes = {
  username: "Abdullah Azhar Khan",
  position: "Student | Panaverse",
  company: "PK",
  image:
    "https://avatars.githubusercontent.com/u/109475658?s=400&u=69029c9dc5a66e779bd6be1494105736239f3c3a&v=4",
  content: `Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit
      rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam,
      risus at semper`,
};

const HomeStudentFB = () => {
  return (
    <Container maxW="8xl" p={{ base: 10, md: 14 }}>
      <Heading textAlign={"center"} mb={"30px"}>
        <chakra.span color={"#D2001A"}>Student</chakra.span> Speaks
      </Heading>
      <VStack
        spacing={3}
        p={4}
        bg={useColorModeValue("white", "blackAlpha.600")}
        border="3px solid"
        borderColor="#D2001A"
        maxW="4xl"
        margin="0 auto"
        boxShadow="lg"
        pos="relative"
      >
        <Icon
          as={FaQuoteRight}
          w={10}
          h={10}
          color="#D2001A"
          left="-1.3rem"
          position="absolute"
          top="-1.5rem"
        />
        <Stack direction="column" spacing={5}>
          <Text color="gray.500">
            As a student, I have found this course to be very good to my
            learning and professional development. One of the things I
            appreciate most about this course is the relevance of the material
            to my field of study. The course content is directly applicable to
            my career goals and has given me with a solid foundation of
            knowledge and skills. The difficulty of the course was challenging
            but not overwhelming, it has pushed me to learn new skills and think
            critically. The workload was well-balanced, and I felt that the
            assignments were challenging but achievable.The quality of
            instruction was excellent, the instructor was knowledgeable,
            engaging, and given clear explanations. The support team was quick
            to respond to any issues I had and given clear and concise
            instructions for resolving them.
          </Text>

          <Text
            fontWeight="bold"
            fontSize="lg"
            align="right"
            mr="3rem !important"
          >
            {testimonial.username}
          </Text>
        </Stack>

        <Avatar
          name="avatar"
          src={testimonial.image}
          showBorder={true}
          borderColor="#D2001A"
          size="xl"
          pos="absolute"
          right="-48px"
          bottom="-20px"
          shadow="lg"
        />
      </VStack>
    </Container>
  );
};

export default HomeStudentFB;
