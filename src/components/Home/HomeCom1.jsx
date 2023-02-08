import {
  Container,
  Stack,
  Flex,
  Box,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import h1 from "../../assets/home/h1.jpg";
import h3 from "../../assets/home/h3.jpg";
import h4 from "../../assets/home/h4.jpg";

export default function HomeCom1() {
  const home1 = [
    {
      id: 1,
      title: "Future concept",
      desc: " We have the technology making new advancements, there are several new domains in our Workshop.",
      img: h1,
      color: "yellow.300",
      btnColor: "yellow.300",
      link: "future_concept",
    },
    {
      id: 2,
      title: "The Big Ideas.",
      desc: "The ideas on fly! with any wast problem but we have the solution to solve that problem.",
      img: h3,
      color: "red.300",
      btnColor: "red.300",
      link: "the_big_ideas",
    },
    {
      id: 3,
      title: "Creative Solutions..",
      desc: "We solve any problem with the correction and creative ideas used for find solve the issue you have..",
      img: h4,
      color: "blue.300",
      btnColor: "blue.300",
      link: "creative_solution",
    },
  ];
  return (
    <>
      <Text textAlign={"center"} fontSize={30} mt={"10"}>
        Leave sooner, drive slower, live longer. ...
      </Text>
      {home1 &&
        home1.map((item) => (
          <Container key={item.id} maxW={"7xl"}>
            <Stack
              align={"center"}
              spacing={{ base: 8, md: 10 }}
              py={{ base: 20, md: 28 }}
              direction={{ base: "column", md: "row" }}
            >
              <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                <Text
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
                >
                  <Text color={item.color} as={"span"} position={"relative"}>
                    {item.title}
                  </Text>
                  <br />
                </Text>
                <Text color={"gray.500"}>{item.desc}</Text>
                <Stack
                  spacing={{ base: 4, sm: 6 }}
                  direction={{ base: "column", sm: "row" }}
                >
                  <Button
                    color={item.btnColor}
                    size={"lg"}
                    fontWeight={"normal"}
                    px={6}
                  >
                    <Link to={`/howitworks/${item.link}`}>How it Works</Link>
                  </Button>
                </Stack>
              </Stack>
              <Flex
                flex={1}
                justify={"center"}
                align={"center"}
                position={"relative"}
                w={"full"}
              >
                <Box
                  position={"relative"}
                  rounded={"2xl"}
                  boxShadow={"2xl"}
                  width={"full"}
                  overflow={"hidden"}
                >
                  <Image
                    alt={"Hero Image"}
                    fit={"cover"}
                    align={"center"}
                    w={"100%"}
                    h={"100%"}
                    src={item.img}
                  />
                </Box>
              </Flex>
            </Stack>
          </Container>
        ))}
    </>
  );
}
