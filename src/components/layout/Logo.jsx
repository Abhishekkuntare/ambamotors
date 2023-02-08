import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ m }) => {
  return (
    <>
      <Box m={m} p={2} borderRadius={5}>
        <Link to={"/"}>
          {" "}
          <HStack>
            <Text
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
    </>
  );
};

export default Logo;
