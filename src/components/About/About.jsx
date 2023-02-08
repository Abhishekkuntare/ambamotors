import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { RiSecurePaymentFill } from "react-icons/ri";
import { IoMdCall } from "react-icons/io";
import { Link } from "react-router-dom";
import introVideo from "../../assets/about.mp4";
import termsandcondition from "../../assets/docs/termsandcondition";
import pravin from "../../assets/about.jpg";

const Founder = () => {
  return (
    <Stack
      direction={["column", "row"]}
      spacing={["4", "16"]}
      padding={"8"}
      mt={5}
    >
      <VStack>
        <Avatar src={pravin} boxSize={["40", "48"]} />
        <Text fontFamily={"Charmonman"} children="Founder" opactiy={0.7} />
      </VStack>
      <VStack justifyContent={"center"} alignItems={["center", "flex-start"]}>
        <Heading
          fontFamily={"Babylonica"}
          children="Pravin Kuntare"
          size={["md", "xl"]}
        />
        <Text
          children="Hello , Iam  Full time Mechanical Engineer with Last 25+ years experience. We are provide different types of  services you just checkout in our website. "
          textAlign={["center", "left"]}
        />
      </VStack>
    </Stack>
  );
};

const VideoPlayer = () => (
  <video
    autoPlay={true}
    loop
    controls
    src={introVideo}
    controlsList="nodownload nofullscreen noremoteplayback"
    disablePictureInPicture
    disableRemotePlayback
  />
);

const TandC = ({ termsandcondition }) => (
  <Box>
    <Heading
      children="Terms & Condition"
      size={"md"}
      textAlign={["center", "left"]}
    />

    <Box h={"sm"} p="4" overflowY={"scroll"}>
      <Text letterSpacing={"widest"} textAlign={["center", "left"]}>
        {termsandcondition}
      </Text>
      <Heading
        my={"4"}
        size="xs"
        children="Quickly & Perfect Services provided by us. "
      />
    </Box>
  </Box>
);
const About = () => {
  return (
    <Box
      pt={10}
      backgroundImage="url(https://cdna.artstation.com/p/assets/images/images/036/926/718/large/james-o-brien-vadim-ignatiev-car-dealership-dayorange.jpg?1619007297)"
    >
      <Container mt={5} maxW={"container.lg"} boxShadow={"lg"} padding="16">
        <Heading
          fontFamily={"Cinzel"}
          children="About Us"
          textAlign={["center", "left"]}
        />
        <Founder />
        <Stack m="8" direction={["column", "row"]} alignItems="center">
          <Text m="8" textAlign={["center", "left"]}>
            We are providing the services to our customer and do work
            faithfully, Neat and clean without any brokness we have last 25+
            years experience in this field so We know how to tackle in any
            situation.
            <HStack mt={5}>
              {" "}
              <Text
                display={"flex"}
                alignItems="center"
                justifyContent={"center"}
              >
                {" "}
                <IoMdCall />
                Customer Care - {"  "} +91 9823028110
              </Text>
            </HStack>
            <HStack>
              <Text
                display={"flex"}
                alignItems="center"
                justifyContent={"center"}
              >
                {" "}
                <IoMdCall />
                Customer Call - +91 9528032110
              </Text>
            </HStack>
          </Text>
          <Link to="/subscribe">
            <Button variant={"ghost"} colorScheme="teal">
              Checkout Plan
            </Button>
          </Link>
        </Stack>
        <VideoPlayer />

        <TandC termsandcondition={termsandcondition} />

        <HStack my={4} p={4}>
          <RiSecurePaymentFill />
          <Heading
            children={"No Dignity of Brokenness !"}
            textTransform="uppercase"
            size="xs"
          />
        </HStack>
      </Container>
    </Box>
  );
};

export default About;
