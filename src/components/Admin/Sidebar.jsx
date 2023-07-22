import { Button, VStack } from "@chakra-ui/react";
import React from "react";
import {
  RiAddCircleFill,
  RiDashboardFill,
  RiEyeFill,
  RiUser3Fill,
} from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  return (
    <VStack
      spacing={8}
      padding={16}
      mt={100}
      boxShadow={"-2px 0 10px rgba(107,70,193,0.5)"}
    >
      <Link to={"/admin/dashboard"}>
        <Button
          fontSize={"larger"}
          variant="ghost"
          colorScheme={
            location.pathname === "/admin/dashboard" ? "purple" : "black"
          }
        >
          <RiDashboardFill style={{ marign: "4px" }} />
          Dashboard
        </Button>
      </Link>
      <Link to={`/admin/courses`}>
        <Button
          fontSize={"larger"}
          variant="ghost"
          colorScheme={
            location.pathname === "/admin/courses" ? "purple" : "black"
          }
        >
          <RiEyeFill style={{ marign: "4px" }} />
          Services
        </Button>
      </Link>
      <Link to={`/admin/users`}>
        <Button
          fontSize={"larger"}
          variant="ghost"
          colorScheme={
            location.pathname === "/admin/users" ? "purple" : "black"
          }
        >
          <RiUser3Fill style={{ marign: "4px" }} />
          Users
        </Button>
      </Link>
      <Link to={`/admin/createcourse`}>
        <Button
          fontSize={"larger"}
          variant="ghost"
          colorScheme={
            location.pathname === "/admin/createcourse" ? "purple" : "black"
          }
        >
          <RiAddCircleFill style={{ marign: "4px" }} />
          Create Service
        </Button>
      </Link>
    </VStack>
  );
};

export default Sidebar;
