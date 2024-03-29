import {
  Avatar,
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../../redux/actions/user";

export const fileUploadCss = {
  cursor: "pointer",
  marginLeft: "-5%",
  width: "110%",
  border: "none",
  height: "100%",
  color: "#ECC94B",
  backgroundColor: "white",
};
const fileUploadStyle = {
  "&::file-selector-button": fileUploadCss,
};

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [imagePrev, setImagePrev] = useState("");
  const [image, setImage] = useState("");

  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append("name", name);
    myForm.append("email", email);
    myForm.append("password", password);
    myForm.append("file", image);

    dispatch(register(myForm));
  };

  return (
    <Box
      background={
        "url(https://cdna.artstation.com/p/assets/images/images/025/887/234/large/pasquale-scionti-lastofuspart2a.jpg?1587237376)"
      }
    >
      <Container
        height={["133vh", "120vh"]}
        marginBottom="100px"
        paddingTop={["130px", "120px"]}
      >
        <VStack h={"full"} justifyContent="center" spacing={"16"}>
          <Heading fontFamily={"cinzel"} children={"Create an account"} />
          <form style={{ width: "100%" }} onSubmit={submitHandler}>
            <Box
              my={"4"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Avatar src={imagePrev} size={"2xl"} />
            </Box>

            <Box marginY={4}>
              <FormLabel htmlFor="name" children="Name" />
              <Input
                required
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                type={"text"}
                focusBorderColor="orange.500"
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
                focusBorderColor="orange.500"
              />
            </Box>

            <FormLabel htmlFor="password" children="Password" />
            <Box
              marginY={4}
              display="flex"
              alignItems={"center"}
              justifyContent="center"
            >
              <Input
                required
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="*********"
                type={"password"}
                focusBorderColor="orange.500"
              />
            </Box>

            <Box marginY={4}>
              <FormLabel htmlFor="chooseAvatar" children="Choose Avatar" />
              <Input
                accept="image/*"
                required
                id="chooseAvatar"
                type={"file"}
                focusBorderColor="orange.500"
                css={fileUploadStyle}
                onChange={changeImageHandler}
              />
            </Box>

            <Button my={4} colorScheme={"orange"} type="submit">
              Sign Up
            </Button>

            <Box my={"4"}>
              Already have an account?{" "}
              <Link to={"/login"}>
                <Button colorScheme={"orange"} variant="link">
                  {" "}
                  Sign in
                </Button>
              </Link>
            </Box>
          </form>
        </VStack>
      </Container>
    </Box>
  );
};

export default Register;
