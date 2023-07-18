import React from "react";
import { Flex, chakra, Text } from "@chakra-ui/react";

const SideBarNavigation = chakra(Flex, {
  baseStyle: {
    height: "100vh",
    position: "sticky",
    left: 0,
    bottom: 0,
    borderColor: "black",
    borderRight: "1px",
  },
});

const NavContainer = chakra(Flex, {
  baseStyle: {
    width: "100%",
    height: "1.5rem",
    justifyContent: "start",
    alignItems: "center",
  },
});

const IconContainer = chakra(Flex, {
  baseStyle: {
    justifyContent: "center",
    alignItems: "center",
    flexGrow:1
  },
});

const NavTitle = chakra(Text,{
  baseStyle:{
    textTransform:"uppercase",
    flexGrow:4
  }
})

function Navigation() {
  return (
    <SideBarNavigation>
      <NavContainer>
        <Text>로고</Text>
      </NavContainer>
      <NavContainer>
        <IconContainer></IconContainer>

      </NavContainer>
      <NavContainer>
        <IconContainer></IconContainer>
      </NavContainer>
      <NavContainer>
        <IconContainer></IconContainer>
      </NavContainer>
      <NavContainer>
        <IconContainer></IconContainer>
      </NavContainer>
      <NavContainer>
        <IconContainer></IconContainer>
      </NavContainer>
      <NavContainer>
        <IconContainer></IconContainer>
      </NavContainer>
      <NavContainer>
        <IconContainer></IconContainer>
      </NavContainer>
    </SideBarNavigation>
  );
}

export default Navigation;
