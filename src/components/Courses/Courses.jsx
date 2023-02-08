import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { ImShift } from "react-icons/im";
import { CgMouse } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../../redux/actions/course";
import toast from "react-hot-toast";
import { addToPlaylist } from "../../redux/actions/profile";
import { loadUser } from "../../redux/actions/user";
import Browse_Services from "../Browse_Services/Browse_Services";
import CaregoriesPage from "./CaregoriesPage";

const Course = ({
  views,
  title,
  imageSrc,
  id,
  addToPlayListHandler,
  creator,
  description,
  loading,
}) => {
  return (
    <>
      <Box
        transition={"all ease-in-out 0.4s"}
        _hover={{ transform: "scale(1.1)" }}
        p={["2", "6"]}
        borderRadius={10}
        border="2px solid teal"
      >
        <VStack className="course" alignItems={["center", "flex-start"]}>
          <Image src={imageSrc} boxSize="60" objectFit={"contain"} />
          <Heading
            size={"sm"}
            textAlign={["center", "left"]}
            maxW="200px"
            fontFamily={"sans-serif"}
            noOfLines={3}
            children={title}
          />
          <Text width={300} noOfLines={2} children={description} />
          <HStack>
            <Text fontWeight={"bold"} children={"Charges"} />
            <Text
              fontFamily={"M+PLUS+Rounded+1c"}
              textTransform="uppercase"
              children={creator}
              fontWeight="bold"
              fontSize={17}
            />
          </HStack>

          <Heading
            size="xs"
            children={`Views - ${views}`}
            textTransform="uppercase"
          />
          <Stack direction={["column", "row"]} alignItems="center">
            <Link to={"/see_more"}>
              <Button colorScheme={"teal"}>See More</Button>
            </Link>
            {/* <Link to={`/course/${id}`}>
              <Button colorScheme={"teal"}>See More</Button>
            </Link> */}
            <Button
              isLoading={loading}
              variant={"ghost"}
              colorScheme="teal"
              onClick={() => addToPlayListHandler(id)}
            >
              Add to Cart
            </Button>
          </Stack>
        </VStack>
      </Box>
    </>
  );
};

const Courses = () => {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState(" ");

  const dispatch = useDispatch();

  const addToPlayListHandler = async (courseId) => {
    await dispatch(addToPlaylist(courseId));
    dispatch(loadUser());
  };

  const categories = [
    {
      name: "Oil/oil filter changed",
      img: "https://cdna.artstation.com/p/assets/images/images/036/764/658/large/yash-m-bankar-lightning-ps.jpg?1618544042",
    },

    {
      name: "Wiper blades replacement",
      img: "https://cdnb.artstation.com/p/assets/images/images/004/989/535/large/wei-ning-ong-untitled-1.jpg?1487696976",
    },

    {
      name: "Replace air filter",
      img: "https://cdnb.artstation.com/p/assets/images/images/050/176/639/large/bianca-rawlings-rawlings-car-portfoliorender-main-v001-1.jpg?1654222772",
    },

    {
      name: "Scheduled maintenance",
      img: "https://cdnb.artstation.com/p/assets/images/images/002/784/227/large/juan-carlos-jimenez-vadillo-03-lowangle-francesco-preview.jpg?1465670824",
    },

    {
      name: "New tires",
      img: "https://cdna.artstation.com/p/assets/images/images/031/206/238/large/vaisakh-sabu-artflow-202010171300.jpg?1602920224",
    },

    {
      name: "Battery replacement",
      img: "https://cdnb.artstation.com/p/assets/images/images/057/011/179/large/tanmay-bhattacharya-studio-t2.jpg?1670598184",
    },
  ];

  const { loading, error, courses, message } = useSelector(
    (state) => state.course
  );
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  });

  useEffect(() => {
    dispatch(getAllCourses(category, keyword));
  }, [category, keyword, dispatch, error, message]);

  return (
    <>
      <Browse_Services />
      <Container mt={10} minH={"95vh"} maxW="container.lg">
        <Input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search a service..."
          type={"text"}
          focusBorderColor="teal.500"
        />
        <Text mt={5} color={"teal.600"} display={"flex"}>
          use (<ImShift /> + <CgMouse />) to scroll
        </Text>

        <HStack
          overflowX={"auto"}
          css={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
          paddingY="8"
        >
          {categories.map((item, index) => (
            <CaregoriesPage
              name={item.name}
              img={item.img}
              key={index}
              setCategory={setCategory}
            />
          ))}
        </HStack>

        <Stack
          direction={["column", "row"]}
          flexWrap="wrap"
          justifyContent={["flex-start", "space-evenly"]}
          alignItems={["center", "flex-start"]}
        >
          {courses.length > 0 ? (
            courses.map((item) => (
              <Course
                key={item._id}
                title={item.title}
                description={item.description}
                views={item.views}
                imageSrc={item.poster.url}
                id={item._id}
                creator={item.createdBy}
                lectureCount={item.noOfVideos}
                addToPlayListHandler={addToPlayListHandler}
                loading={loading}
              />
            ))
          ) : (
            <Heading mt={4} children="Service Not Found !" />
          )}
        </Stack>
      </Container>
    </>
  );
};

export default Courses;
