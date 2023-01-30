"use client";
import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  transition,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ArrowRightIcon,
  LinkIcon,
} from "@chakra-ui/icons";
import Image from "next/image";
import { TbBrandGithub } from "react-icons/tb";
import { motion } from "framer-motion";
const Links = ["Courses", "About"];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    color="#D2001A"
    fontWeight="semibold"
    transition="0.25s ease"
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("red.900", "red.700"),
      transition: "0.25s ease",
      color: "#EFEFEF",
    }}
    href={`/${children}`}
  >
    {children}
  </Link>
);
export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        zIndex={20}
        m={"20px"}
        borderRadius={10}
        boxShadow="md"
        position={"sticky"}
        top={"20px"}
        bg={useColorModeValue("#EFEFEF", "gray.900")}
        px={4}
      >
        <Flex h={"80px"} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            color={"#D2001A"}
            bg="#EFEFEF"
            borderColor={"#D2001A"}
            size={"lg"}
            _hover={{
              textDecoration: "none",
              bg: useColorModeValue("#EFEFEF", "#D2001A"),
            }}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={2} alignItems={"center"}>
            <Flex
              boxShadow="2xl"
              rounded="md"
              justify={"center"}
              zIndex={10}
              display={{ base: "none", md: "flex", lg: "flex" }}
              align={"center"}
              borderRadius={"100%"}
              bg="#EFEFEF"
              mt={"20px"}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ type: "spring", duration: 5, bounce: 0.6 }}
              >
                <Link href="/">
                  <Image
                    src={
                      "https://avatars.githubusercontent.com/u/99120681?s=280&v=4"
                    }
                    alt="logo"
                    height={150}
                    width={150}
                  />
                </Link>
              </motion.div>
            </Flex>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Button
              variant={"solid"}
              bg="#D2001A"
              color={"gray.50"}
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("red.700", "red.700"),
              }}
              size={"sm"}
              mr={4}
              rightIcon={<ArrowRightIcon />}
            >
              <Link href="https://www.piaic.org/">Apply</Link>
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
                borderColor={"#D2001A"}
                border={"1px"}
              >
                <Avatar
                  size={"lg"}
                  name="Panaverse"
                  bg={"#EFEFEF"}
                  src={
                    "https://avatars.githubusercontent.com/u/99120681?s=280&v=4"
                  }
                />
              </MenuButton>
              <MenuList zIndex={11} bg={"#EFEFEF"}>
                <MenuItem bg={"#EFEFEF"} color={"#D2001A"}>
                  {" "}
                  <LinkIcon /> &nbsp;
                  <Link href="https://linktr.ee/panaverse">
                    Important Links
                  </Link>
                </MenuItem>
                <MenuDivider />
                <MenuItem bg={"#EFEFEF"} color={"#D2001A"}>
                  <TbBrandGithub /> &nbsp;
                  <Link href="https://github.com/panaverse">GitHub</Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
