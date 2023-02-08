import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../../redux/actions/profile";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(changePassword(oldPassword, newPassword));
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
    <>
      <Box
        pt={10}
        backgroundImage="url(https://cdna.artstation.com/p/assets/images/images/048/877/850/large/james-o-brien-vadim-ignatiev-second-car-dealership-forarstation.jpg?1651152163)"
      >
        <Container py={"16"} minH="90vh">
          <form onSubmit={submitHandler}>
            <Heading
              fontFamily={"cinzel"}
              my={"16"}
              textAlign={["center", "left"]}
            >
              Change Password
            </Heading>
            <VStack spacing={8}>
              <Input
                required
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                placeholder=" Old Password"
                type={"password"}
                focusBorderColor="teal.500"
              />
              <Input
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder=" New  Password"
                type={"password"}
                focusBorderColor="teal.500"
              />

              <Button
                isLoading={loading}
                w={"full"}
                colorScheme="teal"
                type="submit"
              >
                Change
              </Button>
            </VStack>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default ChangePassword;
