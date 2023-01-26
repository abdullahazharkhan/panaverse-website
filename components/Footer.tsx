import {
  Stack,
  HStack,
  Link,
  Divider,
  Image,
  IconButton,
  LinkProps,
  Text,
  Box,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import {
  FaFacebook,
  FaFacebookF,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const links = [
  "Panaverse",
  "PIAIC",
  "Careers",
  "Sign up",
  "Terms of use",
  "Privacy policy",
];
const accounts = [
  {
    url: "https://github.com/panaverse",
    label: "Github Account",
    type: "gray",
    icon: <FaGithub />,
  },
  {
    url: "https://twitter.com/Panaverse_edu",
    label: "Twitter Account",
    type: "twitter",
    icon: <FaTwitter />,
  },
  {
    url: "https://www.youtube.com/@panaverse/streams",
    label: "Youtube Account",
    type: "linkedin",
    icon: <FaYoutube />,
  },
  {
    url: "https://www.facebook.com/groups/panaverse",
    label: "FaceBook Account",
    type: "linkedin",
    icon: <FaFacebookF />,
  },
];

const Footer = () => {
  return (
    <Box>
      <Stack
        maxW="6xl"
        marginInline="auto"
        p={8}
        spacing={{ base: 8, md: 0 }}
        justifyContent="space-between"
        alignItems="center"
        direction={{ base: "column", md: "row" }}
      >
        <Link href="https://www.panaverse.co/" isExternal>
          <Image
            w="150px"
            src="https://www.panaverse.co/red-p-logo-text_dao_croped.png"
            alt="Panaverse"
          />
        </Link>

        {/* Desktop Screen */}
        <HStack
          spacing={4}
          alignItems="center"
          display={{ base: "none", md: "flex" }}
        >
          {links.map((link, index) => (
            <CustomLink key={index}>{link}</CustomLink>
          ))}
        </HStack>

        {/* Mobile and Tablet Screens */}
        <Stack display={{ base: "flex", md: "none" }} alignItems="center">
          <HStack alignItems="center">
            <CustomLink>Sign up</CustomLink>
            <Divider h="1rem" orientation="vertical" />
            <CustomLink>Blog</CustomLink>
            <Divider h="1rem" orientation="vertical" />
            <CustomLink>Career</CustomLink>
          </HStack>
          <HStack alignItems="center">
            <CustomLink>Documentation</CustomLink>
            <Divider h="1rem" orientation="vertical" />
            <CustomLink>Terms of use</CustomLink>
          </HStack>
          <CustomLink>Privacy policy</CustomLink>
        </Stack>

        <Stack
          direction="row"
          spacing={5}
          pt={{ base: 4, md: 0 }}
          alignItems="center"
        >
          {accounts.map((sc, index) => (
            <IconButton
              key={index}
              as={Link}
              isExternal
              href={sc.url}
              aria-label={sc.label}
              icon={sc.icon}
              rounded="md"
            />
          ))}
        </Stack>
      </Stack>
      <hr />
      <HStack justifyContent={"center"} bg={"gray.200"} p={3}>
        <Box>
          <Text fontSize={"xs"} textAlign="center">
            Made with 💖 by{" "}
          </Text>
          <Link href="https://github.com/abdullahazharkhan">
            Abdullah Azhar Khan
          </Link>
        </Box>
      </HStack>
    </Box>
  );
};

const CustomLink = ({ children, ...props }: LinkProps) => {
  return (
    <Link
      href="#"
      fontSize="sm"
      _hover={{ textDecoration: "underline" }}
      {...props}
    >
      {children}
    </Link>
  );
};

export default Footer;
