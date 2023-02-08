import React from "react";
import { Box, Heading, Stack, Text, Image } from "@chakra-ui/react";

const services = [
  {
    id: 1,
    img: "https://cdna.artstation.com/p/assets/images/images/017/455/782/4k/covnik-camera009.jpg?1556055861",
    title: "Automotive Repair Garages.",
    desc: "MECHANICS WORK IN A VARIETY OF SETTINGS DEPENDING ON THE NATURE OF THEIR POSITIONS. MOST COMMONLY, MECHANICS WORK IN AUTOMOTIVE.",
  },
  {
    id: 2,
    img: "https://cdnb.artstation.com/p/assets/images/images/043/483/075/large/khalid-zeynalov-impala3.jpg?1637397715",
    title: "no matter where.",
    desc: "WE REPAIR EVERY TYPES OF CARS, WITH BETTER PRESENCE OF MIND. CARS IS REFER TO SPECIFICS WE SAW ANY PROBLEM AND SOLVE LIKE A CAR'S HEART.",
  },
  {
    id: 3,
    img: "https://cdnb.artstation.com/p/assets/images/images/015/472/153/large/john-wallin-liberto-japanesehousedone.jpg?1548458494 ",
    title: "home service & maintenance.",
    desc: "I AM GLAD I CHOSE THEM, QUICK FRIENDLY SERVICE. UPFRONT IMMEDIATELY ABOUT THE PRICE OF THE WORK DONE ON MY CAR AND DETAILED WHY.",
  },
  {
    id: 4,
    img: "https://cdnb.artstation.com/p/assets/images/images/025/126/433/large/ilya-avakov-bmw-spirit2.jpg?1584714941",
    title: "Denting & Painting.",
    desc: "WE SAW THE PROBLEM OF DENTING & PAINTING IN REGENABLE RATE. DENTING AND PAINTING IS OF TWO COMPONENTS: ONE IS REMOVING DENTS, SCRATCHES ON THE ",
  },
  {
    id: 5,
    img: "https://cdna.artstation.com/p/assets/images/images/016/108/710/large/majd-abdo-majd-carwash.jpg?1556960242",
    title: "Car Washing & Rubbing",
    desc: "WE WILL GIVE YOU THE BEST CAR WASH SERVICE IN BUDGET WHILE A SUCCESSFUL WASH REVITALIZES A VEHICLE'S APPEARANCE, A CAR WASH IS FIRST .",
  },
  {
    id: 6,
    img: "https://cdna.artstation.com/p/assets/images/images/040/284/082/large/miguel-sanchez-woodvine-truckwheelsrimstires-04.jpg?1628414907",
    title: "alignment & balancing",
    desc: "TIRE ALIGNMENT, ALSO KNOWN AS WHEEL ALIGNMENT, CAN HELP YOUR TIRES PERFORM PROPERLY AND HELP THEM LAST LONGER. IT FOR GETTING UP COORECT...",
  },
];

const Services = () => {
  return (
    <>
      <Box
        display={"flex"}
        alignItems="center"
        justifyContent={"center"}
        flexDirection="column"
      >
        <Text fontWeight={600} fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}>
          Services.
        </Text>
        <Text ml={"11px"} color={"orange.300"}>
          OUR SERVICES FOR CLIENTS
        </Text>
      </Box>
      <Box
        display={"flex"}
        alignItems="center"
        justifyContent={"center"}
        flexWrap="wrap"
      >
        {services &&
          services.map((item) => (
            <Box
              key={item.id}
              display={"flex"}
              alignItems="center"
              justifyContent={"center"}
              flexWrap="wrap"
              transition="all 0.5s ease-in-out"
              transitionDelay={1}
              _hover={{ transform: "rotate(4deg)" }}
              maxW={"445px"}
              maxH={"500px"}
              boxShadow={"2xl"}
              rounded={"md"}
              p={6}
              m={3}
            >
              <Image width={310} borderRadius={10} src={item.img} />
              <Stack>
                <Heading textTransform={"capitalize"} m={4} fontSize={"2xl"}>
                  {item.title}
                </Heading>
                <Text textTransform={"lowercase"} color={"gray.500"}>
                  {item.desc}
                </Text>
              </Stack>
            </Box>
          ))}
      </Box>
    </>
  );
};

export default Services;
