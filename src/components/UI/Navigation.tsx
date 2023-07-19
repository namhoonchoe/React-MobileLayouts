import { useState, useLayoutEffect, useEffect } from "react";
import { Flex, chakra, Text, useMediaQuery } from "@chakra-ui/react";
import HomeIcon from "./SvgIcons/HomeIcon";
import ExploreIcon from "./SvgIcons/ExploreIcon";
import NewThreadIcon from "./SvgIcons/NewThreadIcon";
import NotificationIcon from "./SvgIcons/NotificationIcon";
import ProfileIcon from "./SvgIcons/ProfileIcon";
import { Link } from "react-router-dom";

const SideBarNavigation = chakra(Flex, {
  baseStyle: {
    height: "100%",
    borderColor: "black",
    borderRight: "1px",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "start",
    paddingX: "0.25rem",
  },
});

const MobileNavigation = chakra(Flex, {
  baseStyle: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1em",
  },
});

const NavContainer = chakra(Flex, {
  baseStyle: {
    flexGrow: 1,
    padding: `0.5rem 1rem `,
    height: { sm: "3rem", md: "4.5rem" },
    justifyContent: "center",
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
    mr: "1em",
  },
});

const NavTitle = chakra(Text, {
  baseStyle: {
    flexGrow: 4,
    display: { base: "none", lg: "inline" },
  },
});

function Navigation() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  useEffect(() => {
    const checkSize = () => {
      if (!isLargerThan768) {
        setIsMobile(true);
      }

      if (isLargerThan768) {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", checkSize);

    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, [isMobile, isLargerThan768]);

  useLayoutEffect(() => {
    const checkInitialSize = () => {
      if (!isLargerThan768) {
        setIsMobile(true);
      }

      if (isLargerThan768) {
        setIsMobile(false);
      }
    };

    let mounted = true;

    if (mounted) {
      checkInitialSize();
    }

    return () => {
      mounted = false;
    };
  }, [isMobile, isLargerThan768]);

  if (isMobile) {
    return (
      <MobileNavigation>
        <Link to="/">
          <NavContainer>
            <IconContainer>
              <HomeIcon />
            </IconContainer>
          </NavContainer>
        </Link>
        <Link to="/explore">
          <NavContainer>
            <IconContainer>
              <ExploreIcon />
            </IconContainer>
          </NavContainer>
        </Link>
        <Link to="/newThread">
          <NavContainer>
            <IconContainer>
              <NewThreadIcon />
            </IconContainer>
          </NavContainer>
        </Link>
        <Link to="/notification">
          <NavContainer>
            <IconContainer>
              <NotificationIcon />
            </IconContainer>
          </NavContainer>
        </Link>
        <Link to="/profile">
          <NavContainer>
            <IconContainer>
              <ProfileIcon />
            </IconContainer>
          </NavContainer>
        </Link>
      </MobileNavigation>
    );
  } else {
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
      </SideBarNavigation>
    );
  }
}

export default Navigation;
