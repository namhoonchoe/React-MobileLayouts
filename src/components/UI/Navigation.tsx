import React from "react";
import { Flex, chakra, Text } from "@chakra-ui/react";
import HomeIcon from "./SvgIcons/HomeIcon";
import ExploreIcon from "./SvgIcons/ExploreIcon";
import NewThreadIcon from "./SvgIcons/NewThreadIcon";
import NotificationIcon from "./SvgIcons/NotificationIcon";
import ProfileIcon from "./SvgIcons/ProfileIcon";
import SettingIcon from "./SvgIcons/SettingIcon";
import { Link } from "react-router-dom";

const SideBarNavigation = chakra(Flex, {
  baseStyle: {
    height: "100vh",
    position: "relative",
    borderColor: "black",
    borderRight: "1px",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "start",
    paddingX: "0.25rem",
  },
});

const NavContainer = chakra(Flex, {
  baseStyle: {
    flexDirection: "row",
    padding: `0.5rem 1rem `,
    height: "4.5rem",
    justifyContent: "start",
    alignItems: "center",
    my: 3,
    _hover: { bg: "green.300" },
    borderRadius: "2rem",
  },
});

const IconContainer = chakra(Flex, {
  baseStyle: {
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
  },
});

const NavTitle = chakra(Text, {
  baseStyle: {
    textTransform: "uppercase",
    flexGrow: 4,
  },
});

function Navigation() {
  return (
    <SideBarNavigation>
      <Link to="/">
        <NavContainer>
          <Text>로고</Text>
        </NavContainer>
      </Link>
      <Link to="/">
        <NavContainer>
          <IconContainer>
            <HomeIcon />
          </IconContainer>
          <NavTitle>홈</NavTitle>
        </NavContainer>
      </Link>
      <Link to="/explore">
        <NavContainer>
          <IconContainer>
            <ExploreIcon />
          </IconContainer>
          <NavTitle>탐색 탭</NavTitle>
        </NavContainer>
      </Link>
      <Link to="/newThread">
        <NavContainer>
          <IconContainer>
            <NewThreadIcon />
          </IconContainer>
          <NavTitle>새 스레드</NavTitle>
        </NavContainer>
      </Link>
      <Link to="/notification">
        <NavContainer>
          <IconContainer>
            <NotificationIcon />
          </IconContainer>
          <NavTitle>알림</NavTitle>
        </NavContainer>
      </Link>
      <Link to="/profile">
        <NavContainer>
          <IconContainer>
            <ProfileIcon />
          </IconContainer>
          <NavTitle>프로필</NavTitle>
        </NavContainer>
      </Link>
        <NavContainer position={"absolute"} bottom={"2rem"} left={"1rem"}>
          <IconContainer>
            <SettingIcon />
          </IconContainer>
        </NavContainer>
    </SideBarNavigation>
  );
}

export default Navigation;
