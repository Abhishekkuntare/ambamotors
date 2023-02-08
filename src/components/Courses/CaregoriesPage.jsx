import { Badge, Box, Image } from "@chakra-ui/react";
import React from "react";

const CaregoriesPage = ({ img, name, key, setCategory }) => {
  return (
    <>
      <Box
        cursor={"pointer"}
        mt={2}
        ml={["0", "5"]}
        key={key}
        onClick={() => setCategory(name)}
      >
        <Image width={300} src={img} borderRadius={10} />
        <Badge
          textTransform={"capitalize"}
          fontSize={17}
          variant={"subtle"}
          m={"auto"}
          width={280}
          display="flex"
          aliit="center"
          justifyContent={"center"}
          pos={"relative"}
          bottom={35}
          borderRadius={7}
          fontFamily="Luxurious Roman"
        >
          {name}
        </Badge>
      </Box>
    </>
  );
};

export default CaregoriesPage;
