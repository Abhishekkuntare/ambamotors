import React from "react";
import { Button } from "@chakra-ui/react";
import { BiUpArrow } from "react-icons/bi";

const TopDown = () => {
  return (
    <Button
      zIndex={100}
      colorScheme={"teal"}
      position={"fixed"}
      right={4}
      bottom={4}
    >
      <a href="#" id="upside">
        <BiUpArrow />
      </a>
    </Button>
  );
};

export default TopDown;
