import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { courseRequest } from "../../redux/actions/others";
import toast from "react-hot-toast";
import { useEffect } from "react";

const SeeMore = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(courseRequest(email, name, course));
  };

  const {
    loading,
    error,
    message: stateMessage,
  } = useSelector((state) => state.other);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (stateMessage) {
      toast.success(stateMessage);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, stateMessage, error]);

  return (
    <Box
      pt={10}
      backgroundImage="url(https://cdnb.artstation.com/p/assets/images/images/025/477/283/large/joel-westman-tctd2-warlords-portfolio-joel-westman-open-world-15.jpg?1585917238)"
    >
      <Container h={"92vh"}>
        <VStack h="full" justifyContent={"center"} spacing={16}>
          <Heading fontFamily={"Cinzel"} children="Inform now" />{" "}
          <form onSubmit={submitHandler} style={{ width: "100%" }}>
            <Box marginY={4}>
              <FormLabel htmlFor="name" children="Name" />
              <Input
                required
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Name"
                type={"text"}
                focusBorderColor="teal.500"
              />
            </Box>
            <Box marginY={4}>
              <FormLabel htmlFor="email" children="Email address" />
              <Input
                requiredorange
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="abc@gmail.com"
                type={"email"}
                focusBorderColor="teal.500"
              />
            </Box>
            <Box marginY={4}>
              <FormLabel htmlFor="Message" children="Message" />
              <Textarea
                required
                id="course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                placeholder="Explain your problem in short...."
                focusBorderColor="teal.500"
              />
            </Box>

            <Button
              width={["200px", "520px"]}
              isLoading={loading}
              my={4}
              colorScheme={"teal"}
              type="submit"
            >
              Send Query
            </Button>
          </form>
        </VStack>
      </Container>
    </Box>
  );
};

export default SeeMore;
