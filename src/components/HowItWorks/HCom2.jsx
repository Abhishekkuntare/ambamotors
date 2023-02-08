import React from "react";
import {
  Box,
  chakra,
  Container,
  Text,
  HStack,
  VStack,
  Flex,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaRegNewspaper } from "react-icons/fa";
import { Link } from "react-router-dom";

const articles = [
  {
    id: 1,
    categories: ["Get Access ", "1st"],
    title: "Login Or Register 1st",
    content: `What is the job description of automotive?
    Image result for car servicing desc
    Auto Mechanic responsibilities include:
    
    Inspecting vehicle engine and mechanical/electrical components to diagnose issues accurately.  `,
  },
  {
    id: 2,
    categories: ["What is Query", "2nd"],
    title: "Explore your query in it",
    content: `specting vehicle computer and electronic systems to repair, maintain and upgrade. Conducting routine maintenance work aiming to vehicle functionality and longevity.Perform basic care and maintenance, including changing oil, checking fluid levels, and rotating tires. Repair or replace worn parts,`,
  },
  {
    id: 3,
    categories: ["Contact us", "3rd"],
    title: "At the end call or message us",
    content: `What is servicing of a car?
    A motor vehicle service or tune-up is a series of maintenance procedures carried out at a set time interval or after the vehicle has traveled a certain distance.`,
  },
];

const HCom2 = () => {
  return (
    <Container maxWidth="4xl" p={{ base: 2, sm: 10 }}>
      {articles.map((article, index) => (
        <Flex key={index} mb="10px">
          <LineWithDot />
          <Card {...article} />
        </Flex>
      ))}
    </Container>
  );
};

const Card = ({ title, categories, content, created_at }) => {
  return (
    <HStack
      p={{ base: 3, sm: 6 }}
      bg={useColorModeValue("gray.100", "gray.800")}
      spacing={5}
      rounded="lg"
      alignItems="center"
      pos="relative"
      _before={{
        content: `""`,
        w: "0",
        h: "0",
        borderColor: `transparent ${useColorModeValue(
          "#edf2f6",
          "#1a202c"
        )} transparent`,
        borderStyle: "solid",
        borderWidth: "15px 15px 15px 0",
        position: "absolute",
        left: "-15px",
        display: "block",
      }}
    >
      <Icon as={FaRegNewspaper} w={12} h={12} color="teal.400" />
      <Box>
        <HStack spacing={2} mb={1}>
          {categories.map((cat) => (
            <Text fontSize="sm" key={cat}>
              {cat}
            </Text>
          ))}
        </HStack>
        <VStack spacing={0} mb={3} textAlign="left">
          <chakra.h1
            as={Link}
            _hover={{ color: "teal.400" }}
            fontSize="2xl"
            lineHeight={1.2}
            fontWeight="bold"
            w="100%"
          >
            <Link to={"/about"}>{title}</Link>
          </chakra.h1>
          <Text fontSize="md" noOfLines={2}>
            {content}
          </Text>
        </VStack>
        <Text fontSize="sm">{created_at}</Text>
      </Box>
    </HStack>
  );
};

const LineWithDot = () => {
  return (
    <Flex pos="relative" alignItems="center" mr="40px">
      <chakra.span
        position="absolute"
        left="50%"
        height="calc(100% + 10px)"
        border="1px solid"
        borderColor={useColorModeValue("gray.200", "gray.700")}
        top="0px"
      ></chakra.span>
      <Box pos="relative" p="10px">
        <Box
          pos="absolute"
          width="100%"
          height="100%"
          bottom="0"
          right="0"
          top="0"
          left="0"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          backgroundColor="rgb(255, 255, 255)"
          borderRadius="100px"
          border="3px solid rgb(4, 180, 180)"
          backgroundImage="none"
          opacity={1}
        ></Box>
      </Box>
    </Flex>
  );
};

export default HCom2;
