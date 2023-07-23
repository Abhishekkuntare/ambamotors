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
import React, { useEffect, useState } from "react";
import { BiLinkExternal } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { contactUs } from "../../redux/actions/others";
import toast from "react-hot-toast";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(contactUs(email, name, message));
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
    <>
      <Box
        pt={10}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-around"}
        flexDirection={["column", "row"]}
      >
        <Box mt={[20, 0]}>
          <video
            className="home_video"
            style={{
              borderRadius: "47% 53% 44% 56% / 54% 49% 51% 46%  ",
              display: "flex",

              alignItems: "center",
              justifyContent: "center",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            width={"70%"}
            muted={true}
            loop={true}
            controls={false}
            autoPlay={true}
            src={
              "https://cdn.dribbble.com/userupload/6843425/file/original-1f9ca91a949a273a8936662c59c34846.mp4"
            }
          />
        </Box>
        <Container h={"92vh"}>
          <VStack h="full" justifyContent={"center"} spacing={16}>
            <Heading fontFamily={"Cinzel"} children="Contact Us" />{" "}
            <form style={{ width: "100%" }} onSubmit={submitHandler}>
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
                  required
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="abc@gmail.com"
                  type={"email"}
                  focusBorderColor="teal.500"
                />
              </Box>
              <Box marginY={4}>
                <FormLabel htmlFor="message" children="Message" />
                <Textarea
                  required
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message...."
                  focusBorderColor="teal.500"
                />
              </Box>
              <Button
                width={["200px", "520px"]}
                my={4}
                colorScheme={"teal"}
                type="submit"
              >
                Send Mail
              </Button>
            </form>
          </VStack>
        </Container>
      </Box>
    </>
  );
};

export default Contact;
