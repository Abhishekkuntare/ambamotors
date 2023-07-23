import { Container, Stack, Text, Button, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Slider from "../layout/Slider";
import Testimoni from "../layout/Testimoni";
import Services from "../Services/Services";
import HomeCom1 from "./HomeCom1";

export default function Home({ params }) {
  return (
    <>
      <Box
        pt={10}
        // backgroundImage={[
        //   "https://cdna.artstation.com/p/assets/images/images/025/432/270/large/johann-goutard-vwconceptcombi-hd.jpg?1585768677",
        //   "url(https://cdnb.artstation.com/p/assets/images/images/033/126/257/large/rostislav-prokop-shel-694.jpg?1608499611)",
        // ]}
      >
        <Container mt={5} maxW={"5xl"}>
          <Stack
            textAlign={"center"}
            align={"center"}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
          >
            <Text
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
              lineHeight={"110%"}
              textTransform="uppercase"
            >
              Amba Motors,{" "}
              <Text
                as={"span"}
                bg="linear-gradient(transparent 50%, #83e9e7 50%)"
                color={"teal.400"}
              >
                CREATIVE WORKS
              </Text>
            </Text>
            <video
              className="home_video"
              style={{
                borderRadius: "4%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              width={"90%"}
              muted={true}
              loop={true}
              controls={false}
              autoPlay={true}
              src={
                "https://cdn.dribbble.com/userupload/4148384/file/large-bc635ba19408394971a54e56d6ad1194.mp4"
              }
            />
            <Text color={"gray.500"} maxW={"3xl"}>
              Inspecting vehicle engine and mechanical/electrical components to
              diagnose issues accurately. Inspecting vehicle computer and
              electronic systems to repair, maintain and upgrade.
            </Text>

            <Stack spacing={6} direction={"row"}>
              <Button
                px={6}
                colorScheme={"teal"}
                bg={"teal.400"}
                _hover={{ bg: "teal.500" }}
              >
                <Link to={"/explore_services"}> Get started</Link>
              </Button>
              <Button px={6}>
                <Link to={"/about"}>Learn more</Link>
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <HomeCom1 params={params} />
      <Services />
      <Slider />
      <Testimoni />
    </>
  );
}
