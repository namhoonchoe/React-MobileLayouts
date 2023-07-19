import React from "react";
import { Grid, GridItem, chakra } from "@chakra-ui/react";

const LeftSideBarGrid = chakra(Grid, {
  baseStyle: {
    width: "100%",
    maxWidth: "1520px",
    alignItems:"start",
    gridTemplateColumns: { base: "1fr", md: "repeat(6,1fr)" },
    gridTemplateAreas: {
      base: `
      "main-content main-content main-content"
      "main-content main-content main-content"
      "main-content main-content main-content"
      "main-content main-content main-content"
      "left-sidebar  left-sidebar left-sidebar"`,
      md: `"left-sidebar  main-content main-content main-content main-content main-content "
    "left-sidebar  main-content main-content main-content main-content  main-content "
    "left-sidebar  main-content main-content main-content main-content   main-content"`,
    },
  },
});

const MainContent = chakra(GridItem, {
  baseStyle: {
    backgroundColor: "#f97171",
    gridArea: "main-content",
    height: "200vh",
  },
});

const LSidebar = chakra(GridItem, {
  baseStyle: {
    backgroundColor: "#f5d55f",
    gridArea: "left-sidebar",
    height: { base: "5rem", md: "100dvh" },
    width:"100%",
    position: "sticky",
    top:0,
    left: 0,
    bottom: 0,
   },
});

interface ILeftSidebarProps {
  mainContent: React.ReactNode;
  lSidebar: React.ReactNode;
}

const SidebarLayout: React.FC<ILeftSidebarProps> = ({
  mainContent,
  lSidebar,
}) => {
  return (
    <LeftSideBarGrid>
      <MainContent>{mainContent}</MainContent>
      <LSidebar>{lSidebar}</LSidebar>
    </LeftSideBarGrid>
  );
};

export default SidebarLayout;
