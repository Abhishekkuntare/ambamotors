import {
  Button,
  Heading,
  VStack,
  Container,
  Input,
  Box,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { forgetPassword } from "../../redux/actions/profile";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(forgetPassword(email));
  };

  const { loading, message, error } = useSelector((state) => state.profile);
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, message, error]);

  return (
    <Box
      background={
        "url(https://cdna.artstation.com/p/assets/images/images/056/660/386/large/games-artist-nikolay-andrianov-shot-4.jpg?1669800240)"
      }
    >
      <Container py={"100"} h="100vh">
        <form onSubmit={submitHandler}>
          <Heading
            fontFamily={"cinzel"}
            children="Forget Password"
            my={16}
            textAlign={["center", "left"]}
          />
          <VStack spacing={8}>
            <Input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="abc@gmail.com"
              type={"email"}
              focusBorderColor="teal.500"
            />
            <Button
              isLoading={loading}
              type="submit"
              width={"full"}
              colorScheme="teal"
            >
              Send Reset Link
            </Button>
          </VStack>
        </form>
      </Container>
    </Box>
  );
};

export default ForgotPassword;
