import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "../../redux/actions/profile";
import { loadUser } from "../../redux/actions/user";

const UpdateProfile = ({ user }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { loading, message, error } = useSelector((state) => state.profile);

  const submitHandler = async (e) => {
    e.preventDefault();
    await dispatch(updateProfile(name, email));
    dispatch(loadUser());
    navigate("/profile");
  };

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
            "https://cdn.dribbble.com/userupload/4488419/file/original-b4ba3ed029641da816ebb281ec698ba9.mp4"
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
            Update Profile
          </Heading>
          <VStack spacing={8}>
            <Input
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Name"
              type={"text"}
              focusBorderColor="teal.500"
            />
            <Input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              placeholder="abc@gmail.com"
              type={"email"}
              focusBorderColor="teal.500"
            />

            <Button
              isLoading={loading}
              w={"full"}
              colorScheme="teal"
              type="submit"
            >
              Update
            </Button>
          </VStack>
        </form>
      </Container>
    </Box>
  );
};

export default UpdateProfile;
