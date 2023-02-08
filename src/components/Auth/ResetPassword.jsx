import {
  Button,
  Heading,
  VStack,
  Container,
  Input,
  Box,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { resetPassword } from "../../redux/actions/profile";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const params = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(resetPassword(params.token, password));
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
      navigate("/login");
    }
  }, [dispatch, message, error]);

  return (
    <Box
      background={
        "url(https://cdna.artstation.com/p/assets/images/images/056/660/386/large/games-artist-nikolay-andrianov-shot-4.jpg?1669800240)"
      }
    >
      <Container py={"16"} h="100vh">
        <form onSubmit={submitHandler}>
          <Heading
            children="Reset Password"
            my={16}
            textAlign={["center", "left"]}
          />
          <VStack spacing={8}>
            <Input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="New  Password"
              type={"password"}
              focusBorderColor="teal.500"
            />
            <Button
              isLoading={loading}
              type="submit"
              width={"full"}
              colorScheme="teal"
            >
              Reset Password
            </Button>
          </VStack>
        </form>
      </Container>
    </Box>
  );
};

export default ResetPassword;
