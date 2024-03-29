import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiDeleteBin7Fill } from "react-icons/ri";
import {
  removeFromPlaylist,
  updatePictureProfile,
} from "../../redux/actions/profile";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../../redux/actions/user";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

const Profile = ({ user }) => {
  const dispatch = useDispatch();
  const { isOpen, onClose, onOpen } = useDisclosure();

  const { loading, error, message } = useSelector((state) => state.course);
  const removeFromPlayListHandler = async (id) => {
    await dispatch(removeFromPlaylist(id));
    dispatch(loadUser());
  };

  const changeImageSubmitHandler = async (e, image) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append("file", image);
    await dispatch(updatePictureProfile(myForm));
    dispatch(loadUser());
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
      backgroundImage="url(https://cdn.dribbble.com/users/15687/screenshots/17302148/media/99c5a5ec1cc72f04e2fcaaf7fc07c31f.png?resize=1000x750&vertical=center)"
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}
    >
      <Container minH={"100vh"} maxW="container.lg" py={"20"}>
        <Heading fontFamily={"Cinzel"} children="Profile" m="8" />
        <Stack
          justifyContent={"flex-start"}
          direction={["column", "row"]}
          alignItems="center"
          spacing={["8", "16"]}
          padding="8"
        >
          <VStack>
            {" "}
            <Avatar boxSize={"48"} src={user.avatar.url} />
            <Button onClick={onOpen} colorScheme={"teal"} variant="ghost">
              Change Photo
            </Button>
          </VStack>
          <VStack spacing={4} alignItems={["center", "flex-start"]}>
            <HStack>
              <Text children="Name" fontWeight={"bold"} />
              <Text children={user.name} />
            </HStack>
            <HStack>
              <Text children="Email" fontWeight={"bold"} />
              <Text children={user.email} />
            </HStack>
            <HStack>
              <Text children="Created At" fontWeight={"bold"} />
              <Text children={user.createdAt.split("T")[0]} />
            </HStack>

            <Stack direction={["column", "row"]} alignItems="center">
              <Link to="/updateprofile">
                <Button>Update Profile</Button>
              </Link>
              <Link to="/changepassword">
                <Button>Change Password</Button>
              </Link>
            </Stack>
          </VStack>
        </Stack>

        <Heading
          fontFamily={"Cinzel"}
          children="Your Work"
          size={"md"}
          my="8"
        />
        {user.playlist.length > 0 && (
          <Stack
            direction={["column", "row"]}
            alignItems="center"
            p="4"
            flexWrap={"wrap"}
          >
            {user.playlist.map((element, index) => (
              <VStack w="48" m="3" key={element.course}>
                <Image
                  boxSize={"full"}
                  objectFit="contain"
                  src={element.poster}
                />
                <HStack>
                  <Button
                    isLoading={loading}
                    onClick={() => removeFromPlayListHandler(element.course)}
                  >
                    <RiDeleteBin7Fill />
                  </Button>
                </HStack>
              </VStack>
            ))}
          </Stack>
        )}

        <ChangePhotoBox
          changeImageSubmitHandler={changeImageSubmitHandler}
          isOpen={isOpen}
          onClose={onClose}
          onOpen={onOpen}
          loading={loading}
        />
      </Container>
    </Box>
  );
};

export default Profile;

export const fileUploadCss = {
  cursor: "pointer",
  marginLeft: "-5%",
  width: "110%",
  border: "none",
  height: "100%",
  color: "#ECC94B",
  backgroundColor: "white",
};

function ChangePhotoBox({
  isOpen,
  onClose,
  changeImageSubmitHandler,
  loading,
}) {
  const [image, setImage] = useState("");
  const [imagePrev, setImagePrev] = useState("");
  const changeImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  const closeHandler = () => {
    onClose();
    setImagePrev("");
    setImage("");
  };
  return (
    <Modal isOpen={isOpen} onClose={closeHandler}>
      <ModalOverlay backdropFilter={"blur(10px"} />
      <ModalContent>
        <ModalHeader>Change Photo</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Container>
            <form onSubmit={(e) => changeImageSubmitHandler(e, image)}>
              <VStack spacing="8">
                {imagePrev && <Avatar src={imagePrev} boxSize={48} />}
                <Input
                  type={"file"}
                  css={{ "&::file-selector-button": fileUploadCss }}
                  onChange={changeImage}
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
        </ModalBody>

        <ModalFooter>
          <Button mr={3} onClick={closeHandler}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
