import { Badge, Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import img1 from "../../assets/home/h2.jpg";
import HCom2 from "./HCom2";
import HowItWorkCom from "./HowItWorkCom";

const HowItWorks = () => {
  return (
    <>
      <HowItWorkCom />
      <HCom2 />
      <Box mt={32}>
        <VStack>
          <HStack display={"flex"}>
            <Text fontSize={40} fontWeight={"thin"}>
              Future{" "}
            </Text>
            <Text fontSize={40} fontWeight={"thin"}>
              Concept{" "}
            </Text>
          </HStack>
        </VStack>
      </Box>
      <Box
        display={"flex"}
        alignItems="center"
        justifyContent={"space-evenly"}
        flexWrap={"wrap"}
        mt={40}
      >
        <Box mt={3}>
          <Text fontSize={32} mb={5} fontWeight={"thin"}>
            Concept Overview
          </Text>
          <Box display={"flex"} flexDirection="column">
            <Badge
              variant={"outline"}
              colorScheme={"orange"}
              p={5}
              mb={5}
              textAlign="center"
              width={300}
            >
              {" "}
              Login/Register
            </Badge>
            <Badge
              variant={"outline"}
              colorScheme={"orange"}
              p={5}
              mb={5}
              textAlign="center"
              width={300}
            >
              {" "}
              Query
            </Badge>
            <Badge
              variant={"outline"}
              colorScheme={"orange"}
              p={5}
              mb={5}
              textAlign="center"
              width={300}
            >
              {" "}
              Find...
            </Badge>
            <Badge
              variant={"outline"}
              colorScheme={"orange"}
              p={5}
              mb={5}
              textAlign="center"
              width={300}
            >
              {" "}
              Inquiry
            </Badge>

            <Text mt={5} textAlign={"center"}>
              Tools
            </Text>
            <Image
              textAlign={"center"}
              width={100}
              borderRadius={"100%"}
              src={img1}
            />
          </Box>
        </Box>
        <Box width={400} p={3}>
          <Box mb={4}>
            <Text fontSize={30} fontWeight={"thin"}>
              Description
            </Text>
            <Text>
              An Auto Mechanic fixes vehicles and replaces their parts for
              customers. Their duties include repairing the vehicle's mechanical
              components, diagnosing problems with cars/ trucks and
            </Text>
          </Box>
          <Box mb={4}>
            <Text fontSize={30} fontWeight={"thin"}>
              Problem
            </Text>
            <Text>
              Perform basic care and maintenance, including changing oil,
              checking fluid levels, and rotating tires
            </Text>
          </Box>
          <Box mb={4}>
            <Text fontSize={30} fontWeight={"thin"}>
              Goal
            </Text>
            <Text>
              Increase Mechanic Productivity. Use Automotive Management
              Software. Reduce Employee Turnover Rate. ... Give Discounts And
              Introduce Sales Offers. ...
            </Text>
          </Box>
          <Box>
            <Text>Works</Text>
            <Text>Labor price and All.</Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HowItWorks;
