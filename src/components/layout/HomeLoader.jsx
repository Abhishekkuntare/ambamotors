import { Box, Text, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import loader from "../../assets/loader.gif";

const HomeLoader = () => {
  return (
    <Box
      backgroundColor={"#fff"}
      display={"flex"}
      alignItems="center"
      justifyContent={"center"}
      minH={"100vh"}
    >
      <Box p={2} borderRadius={5}>
        <Link to={"/"}>
          {" "}
          <HStack>
            <Text
              color={"black"}
              fontFamily={"Major Mono Display"}
              fontWeight={"extrabold"}
              fontSize={30}
              mr={1}
            >
              AMBA
            </Text>
            <Text
              fontFamily={"Major Mono Display"}
              fontWeight={"extrabold"}
              color={"teal.300"}
              fontSize={30}
            >
              MOTORS
            </Text>
          </HStack>
        </Link>
      </Box>
    </Box>
  );
};

export default HomeLoader;
