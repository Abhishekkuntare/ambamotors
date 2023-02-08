import { Box, Button, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import not from "../../assets/notfound.gif";

const NotFound = () => {
  return (
    <Box
      display={"flex"}
      height={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDir={"column"}
    >
      <Image
        mb={4}
        width={300}
        borderRadius={"50%"}
        src={not}
        alt={"not found"}
      />
      <Button>
        <Link to={"/"}>Go to Home </Link>
      </Button>
    </Box>
  );
};

export default NotFound;
