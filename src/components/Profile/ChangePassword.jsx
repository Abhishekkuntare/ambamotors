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
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-around"}
        flexDirection={["column", "row"]}
      >
        <Box mt={[20, 0]}>
          <video
            className="home_video"
            style={{
              borderRadius: "47% 53% 53% 47% / 48% 49% 51% 52%  ",
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
              "https://cdn.dribbble.com/userupload/4018102/file/original-1e433140fdc405d1fa77524987eddbb8.mp4"
            }
          />
        </Box>
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
