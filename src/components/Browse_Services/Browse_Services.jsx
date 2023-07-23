import { Fragment } from "react";
import {
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Flex,
  Box,
} from "@chakra-ui/react";

const features = [
  {
    title: "Jumpstart your car",
    detail:
      "Jump-starting your car involves using the battery of another vehicle to crank up your engine. ",
  },
  {
    title: "Change the oil.",
    detail:
      "An Oil Change is the act of removing the used oil in your engine and replacing it with new, clean oil. ",
  },
  {
    title: "Change spark plugs",
    detail:
      "The engine will run smoother and faster, and the car will have better acceleration. ",
  },
];
const Browse_Services = () => {
  return (
    <Box
      backgroundRepeat={"no-repeat"}
      width={"full"}
      backgroundSize={"cover"}
      backgroundImage="url(https://cdn.dribbble.com/userupload/4097805/file/original-c5c45b077b4e2cedc18c1b42323b3463.png?resize=1200x900)"
    >
      <Container maxW="6xl" px={{ base: 6, md: 10 }} py={120}>
        <Stack direction={{ base: "column", md: "row" }}>
          <Stack direction="column" spacing={10} justifyContent="center">
            <chakra.h1
              fontSize="5xl"
              lineHeight={1}
              fontWeight="bold"
              textAlign="left"
            >
              Explore All Activities with
              <chakra.span
                bgGradient="linear(to-br, #228be6, #15aabf)"
                bgClip="text"
              >
                {" "}
                diagnosing problems
              </chakra.span>{" "}
              <br />
              cars and things
            </chakra.h1>
            <Text
              color={useColorModeValue("gray.500", "gray.400")}
              fontSize="lg"
              textAlign="left"
              fontWeight="400"
              maxW="700px"
            >
              An Auto Mechanic fixes vehicles and replaces their parts for
              customers. The automotive industry includes industries associated
              with the production, wholesaling, retailing, and maintenance of
              motor vehicles.
            </Text>
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={{ base: 5, md: 10 }}
              flexWrap="wrap"
            >
              {features.map((feature, index) => (
                <Stack
                  key={index}
                  direction={{ base: "row", md: "column" }}
                  spacing={2}
                >
                  <Flex
                    p={3}
                    maxH="52px"
                    w="max-content"
                    color="white"
                    bgGradient="linear(to-br, #228be6, #15aabf)"
                    rounded="md"
                  >
                    {feature.icon}
                  </Flex>
                  <Stack direction="column" spacing={2}>
                    <Text fontSize="md" fontWeight="500">
                      {feature.title}
                    </Text>
                    <Text
                      fontSize="sm"
                      color="gray.400"
                      maxW={{ base: "100%", md: "200px" }}
                    >
                      {feature.detail}
                    </Text>
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Container>
      {/* <Box overflow="hidden">
        <svg
          fill={useColorModeValue("#f7fafc", "#171923")}
          width="150%"
          height="56px"
          transform="scaleX(-1)"
          filter="drop-shadow(10px 5px 5px rgba(0, 0, 0, 0.05))"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d={`M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 
            250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 
            3V0H0v27.35a600.21 600.21 0 00321.39 29.09z`}
          ></path>
        </svg>
      </Box> */}
    </Box>
  );
};

export default Browse_Services;
