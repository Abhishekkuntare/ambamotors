import {
  Box,
  Grid,
  Heading,
  HStack,
  Progress,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { RiArrowDownLine, RiArrowUpLine } from "react-icons/ri";
import Sidebar from "../Sidebar";
import { DoughnutChart, LineChart } from "./Chart";
import { useDispatch, useSelector } from "react-redux";
import { getDashboardStats } from "../../../redux/actions/admin";
import Loader from "../../layout/Loader";

const DataBox = ({ title, qty, qtyPercentage, profit }) => (
  <Box
    w={["full", "20%"]}
    boxShadow={"-2px 0 10px rgba(107,70,193,0.5)"}
    p="8"
    borderRadius={"lg"}
  >
    <Text children={title} />
    <HStack spacing={"6"}>
      <Text fontSize={"2xl"} fontWeight="bold">
        {qty}
      </Text>
      <HStack>
        <Text children={`${qtyPercentage}%`} />
        {profit ? (
          <RiArrowUpLine color="green" />
        ) : (
          <RiArrowDownLine color="red" />
        )}
      </HStack>
    </HStack>
    <Text opacity={0.6} children={"Since Last Month"} />
  </Box>
);

const Bar = ({ title, value, profit }) => (
  <Box py="4" px={["0", "20"]}>
    <Heading children={title} mb="2" size="m" />
    <HStack>
      <Text children={profit ? "0%" : `-${value}%`} />
      <Progress
        width={"full"}
        value={profit ? value : 0}
        colorScheme="purple"
      />
      <Text children={`${value > 100 ? value : 100}%`} />
    </HStack>
  </Box>
);

const Dashboard = () => {
  const {
    loading,
    stats,
    viewsCount,
    subscriptionCount,
    usersCount,
    subscriptionPercentage,
    usersPercentage,
    viewsPercentage,
    subscriptionProfit,
    userProfit,
    viewsProfit,
  } = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDashboardStats());
  }, [dispatch]);

  return (
    <Grid minH={"100vh"} templateColumns={["1fr", "5fr 1fr"]}>
      {loading || !stats ? (
        <Loader color="purple.500" />
      ) : (
        <Box boxSizing="border-box" py={"16"} px={["4", "0"]}>
          <Text
            children={`Last change was on ${
              String(new Date(stats[11].createdAt)).split("G")[0]
            }`}
            textAlign={"center"}
            opacity="0.5"
          />

          <Heading
            children="Dashboard"
            ml={["0", "16"]}
            mb={"16"}
            textAlign={["center", "left"]}
          />

          <Stack
            direction={["column", "row"]}
            minH="24"
            justifyContent={"space-evenly"}
          >
            <DataBox
              title="Views"
              qty={viewsCount}
              qtyPercentage={viewsPercentage}
              profit={viewsPercentage}
            />
            <DataBox
              title="Users"
              qty={usersCount}
              qtyPercentage={usersPercentage}
              profit={userProfit}
            />
            <DataBox
              title="Subscription"
              qty={subscriptionCount}
              qtyPercentage={subscriptionPercentage}
              profit={subscriptionProfit}
            />
          </Stack>

          <Box
            m={["0", "16"]}
            p={["0", "16"]}
            mt={["4", "16"]}
            borderRadius="lg"
            boxShadow={"-2px 0 10px rgba(107,70,193,0.5)"}
          >
            <Heading
              children={"Views Graph"}
              textAlign={["center", "left"]}
              size={"md"}
              pt={["8", "0"]}
              ml={["0", "16"]}
            />
          </Box>

          <LineChart views={stats.map((item) => item.views)} />

          <Grid templateColumns={["1fr", "2fr 1fr"]}>
            <Box p="4">
              <Heading
                textAlign={["center", "left"]}
                size="md"
                children="Progress Bar"
                my="8"
                ml={["0", 16]}
              />
              <Box>
                <Bar
                  profit={viewsProfit}
                  title={"Views"}
                  value={viewsPercentage}
                />
                <Bar
                  profit={userProfit}
                  title={"Users"}
                  value={usersPercentage}
                />
                <Bar
                  profit={subscriptionProfit}
                  title={"Subscription"}
                  value={subscriptionPercentage}
                />
              </Box>
            </Box>

            <Box p={["0", "16"]} boxSizing={"border-box"} py="4">
              <Heading textAlign={"center"} size="md" mb="4" children="Users" />
              <DoughnutChart
                users={[subscriptionCount, usersCount - subscriptionCount]}
              />
            </Box>
          </Grid>
        </Box>
      )}

      <Sidebar />
    </Grid>
  );
};

export default Dashboard;
