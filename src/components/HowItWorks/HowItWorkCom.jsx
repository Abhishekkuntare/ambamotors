import * as React from "react";
import { Container, chakra, Stack, Text, Button, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const HowItWorkCom = () => {
  return (
    <Container p={{ base: 8, sm: 14 }} mt={100}>
      <Stack direction="column" spacing={6} alignItems="center">
        <Box py={2} px={3} bg="teal" color="white" rounded="md" fontSize="sm">
          <Stack direction={{ base: "column", sm: "row" }}>
            <Text fontWeight="bold">Ready, Set, Cars! 🚀</Text>
            <Text>Join the Amba Motors!</Text>
          </Stack>
        </Box>
        <chakra.h1
          fontSize={{ base: "4xl", sm: "5xl" }}
          fontWeight="bold"
          textAlign="center"
        >
          “Cars bring me
          <chakra.span
            color="teal"
            bg="linear-gradient(transparent 50%, #83e9e7 50%)"
          >
            {" "}
            sheer joy.” ...
          </chakra.span>
        </chakra.h1>
        <Text maxW="550px" fontSize="xl" textAlign="center" color="gray.500">
          My car is my pride and I'm not gonna lose it. I've been dreaming about
          this moment forever! There's a lot of stress… but once you get in the
          car, all that goes out the window.
        </Text>
        <Stack
          direction={{ base: "column", sm: "row" }}
          w={{ base: "100%", sm: "auto" }}
          spacing={5}
        >
          <Button
            colorScheme="teal"
            variant="outline"
            rounded="md"
            size="lg"
            height="3.5rem"
            fontSize="1.2rem"
          >
            <Link to={"/explore_services"}>Explore more</Link>
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default HowItWorkCom;
