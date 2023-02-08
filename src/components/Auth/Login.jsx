import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/user";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <Box
      background={
        "url(https://cdnb.artstation.com/p/assets/images/images/058/246/385/large/guillaume-berthoumieu-artstation-final01.jpg?1673718786)"
      }
    >
      <Container height={"100vh"}>
        <VStack h={"full"} justifyContent="center" spacing={"16"}>
          <Heading fontFamily={"cinzel"} children="Sign in" />
          <form style={{ width: "100%" }} onSubmit={submitHandler}>
            <Box marginY={4}>
              <FormLabel htmlFor="email" children="Email address" />
              <Input
                required
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="abc@gmail.com"
                type={"email"}
                focusBorderColor="yellow.500"
              />
            </Box>
            <Box marginY={4}>
              <FormLabel htmlFor="password" children="Password" />
              <Input
                required
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="*********"
                type={"password"}
                focusBorderColor="yellow.500"
              />
            </Box>
            <Box>
              <Link to="/forgetpassword">
                <Button fontSize={"sm"} variant="link">
                  Forgot Password
                </Button>
              </Link>
            </Box>
            <Button my={4} colorScheme={"yellow"} type="submit">
              Login
            </Button>
            <Box my={"4"}>
              New User?{" "}
              <Link to={"/register"}>
                <Button colorScheme={"yellow"} variant="link">
                  {" "}
                  Create an account
                </Button>
              </Link>
            </Box>
          </form>
        </VStack>
      </Container>
    </Box>
  );
};

export default Login;
