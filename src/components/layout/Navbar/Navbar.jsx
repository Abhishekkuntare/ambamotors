import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  HStack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { ColorModeSwitcher } from "../../../ColorModeSwitcher";
import { RiDashboardFill, RiLogoutBoxLine } from "react-icons/ri";
import { CgMenuRightAlt } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/actions/user";
import Logo from "../Logo";

const Header = ({ isAuthenticated, user }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useDispatch();

  const logoutHandler = () => {
    onClose();
    dispatch(logout());
  };
  return (
    <Box pos="fixed" top={0} zIndex={1000} bg={"whiteAlpha.100"} width={"full"}>
      <Logo m={4} />
      <Button
        zIndex={"overlay"}
        onClick={onOpen}
        colorScheme={"teal"}
        width={12}
        height={12}
        position={"fixed"}
        top="3"
        right="2"
      >
        <CgMenuRightAlt />
      </Button>
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay backdropFilter={"blur(10px)"} zIndex={1000} />
        <DrawerContent
        // backgroundImage={[
        //   "url(https://cdnb.artstation.com/p/assets/images/images/008/555/507/large/cody-zimmerman-merc-amg-gt-45.jpg?1513535091)",
        //   "url(https://cdnb.artstation.com/p/assets/images/images/007/639/003/large/darek-zabrocki-abandonedairport-shoot1-004-final-fixed-darekzabrocki.jpg?1507544597)",
        // ]}
        >
          <Box ml={3} mt={3}>
            <ColorModeSwitcher />

            <Logo />
          </Box>
          <DrawerBody color={"teal.200"}>
            <VStack spacing={"4"} alignItems="flex-start">
              {isAuthenticated ? (
                <>
                  <Link to={"/"} onClick={onClose}>
                    <Button variant={"ghost"}>Home</Button>
                  </Link>
                  <Link to={"/contact"} onClick={onClose}>
                    <Button variant={"ghost"}>Contact Us</Button>
                  </Link>
                  <Link to={"/about"} onClick={onClose}>
                    <Button variant={"ghost"}>About</Button>
                  </Link>
                  <Link to={"/request"} onClick={onClose}>
                    <Button variant={"ghost"}>
                      <Text
                        fontWeight={"bold"}
                        color={"yellow.400"}
                        pos={"relative"}
                        top={-3}
                      >
                        New
                      </Text>{" "}
                      Emergency
                    </Button>
                  </Link>
                  <Link to={"/explore_services"} onClick={onClose}>
                    <Button variant={"ghost"}>Get All Services</Button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to={"/"} onClick={onClose}>
                    <Button variant={"ghost"}>Home</Button>
                  </Link>
                  <Link to={"/contact"} onClick={onClose}>
                    <Button variant={"ghost"}>Contact Us</Button>
                  </Link>
                  <Link to={"/about"} onClick={onClose}>
                    <Button variant={"ghost"}>About</Button>
                  </Link>
                  <Link to={"/howitworks/"} onClick={onClose}>
                    <Button variant={"ghost"}>How it Works</Button>
                  </Link>
                </>
              )}
              <HStack
                justifyContent={"space-evenly"}
                position="absolute"
                bottom={"2rem"}
                width="80%"
              >
                {isAuthenticated ? (
                  <>
                    <VStack>
                      <HStack>
                        <Link to={"/profile"} onClick={onClose}>
                          <Button colorScheme={"yellow"} variant={"ghost"}>
                            Profile
                          </Button>
                        </Link>
                        <Button variant={"ghost"} onClick={logoutHandler}>
                          <RiLogoutBoxLine />
                          Logout
                        </Button>
                      </HStack>
                      {user && user.role === "admin" && (
                        <Link to={"/admin/dashboard"} onClick={onClose}>
                          <Button colorScheme={"purple"} variant="ghost">
                            <RiDashboardFill style={{ margin: "4px" }} />
                            Dashboard
                          </Button>
                        </Link>
                      )}
                    </VStack>
                  </>
                ) : (
                  <>
                    <Link to={"/login"} onClick={onClose}>
                      <Button colorScheme={"teal"}> Login </Button>
                    </Link>
                    <p>OR</p>
                    <Link to={"/register"} onClick={onClose}>
                      <Button colorScheme={"yellow"}> Sign Up </Button>
                    </Link>
                  </>
                )}
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;
