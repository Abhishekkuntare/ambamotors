import React from "react";
import { useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";
import { GiStripedSun } from "react-icons/gi";
import { SiDarkreader } from "react-icons/si";

export const ColorModeSwitcher = (props) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(SiDarkreader, GiStripedSun);

  return (
    <IconButton
      zIndex={"overlay"}
      size="md"
      fontSize="lg"
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      position={"fixed"}
      top="4"
      right={"4"}
      color="teal.200"
      backgroundImage="linear-gradient(to right bottom, #010b1a, #003c54, #00728b, #00aeb4, #12ebc9);;"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};
