import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Box, Text } from "@chakra-ui/react";

const imgStyle = {
  width: "70%",
  borderRadius: "20px",
};

const Slider = () => {
  return (
    <>
      <Box
        display={"flex"}
        alignItems="center"
        justifyContent={"center"}
        flexDirection="column"
      >
        <Text fontWeight={600} fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}>
          Gallery.
        </Text>
        <Text textTransform={"uppercase"} ml={"11px"} color={"orange.300"}>
          Prioritize the features. Make sure to mention upgrades.
        </Text>
      </Box>
      <Box
        maxW={"60%"}
        display="flex"
        alignItems={"center"}
        justifyContent="center"
        mt={20}
        ml={["1", "15", "20"]}
        mr={["1", "15", "20"]}
        mb={["1", "15", "20"]}
      >
        <Carousel width={"100%"} dynamicHeight="70%">
          <div>
            <img
              style={imgStyle}
              src={
                "https://cdna.artstation.com/p/assets/images/images/015/430/580/large/filippo-ubertino-teporaneo3low.jpg?1548297170"
              }
            />
          </div>
          <div>
            <img
              style={imgStyle}
              src={
                "https://cdnb.artstation.com/p/assets/images/images/028/044/371/large/lyes-hamrani-mercedes-maybach-pink-shop.jpg?1593340834"
              }
            />
          </div>
          <div>
            <img
              style={imgStyle}
              src={
                "https://cdnb.artstation.com/p/assets/images/images/051/717/923/large/mirco-burger-tbrender-main-camera-4-fullquality.jpg?1657998116"
              }
            />
          </div>
          <div>
            <img
              style={imgStyle}
              src={
                "https://cdnb.artstation.com/p/assets/images/images/041/562/599/large/nahid-mustafazade-3.jpg?1632064184"
              }
            />
          </div>
          <div>
            <img
              style={imgStyle}
              src={
                "https://cdnb.artstation.com/p/assets/images/images/006/239/167/large/mikhail-sharov-garage.jpg?1565887843"
              }
            />
          </div>
        </Carousel>
      </Box>
    </>
  );
};

export default Slider;
