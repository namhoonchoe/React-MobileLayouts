import React from "react";
import { Grid, GridItem, chakra } from "@chakra-ui/react";

const LeftSideBarGrid = chakra(Grid, {
  baseStyle: {
    width:"100%",
    maxWidth: "1520px",
    height: "100vh",
    gridTemplateColumns: "repeat(6,1fr)",
    gridTemplateAreas: `"left-sidebar  main-content main-content main-content main-content main-content "
    "left-sidebar  main-content main-content main-content main-content  main-content "
    "left-sidebar  main-content main-content main-content main-content   main-content"`
  },
});

const MainContent = chakra(GridItem, {
  baseStyle: {
    backgroundColor: "#f97171",
    gridArea: "main-content",
     
  },
});

const LSidebar = chakra(GridItem, {
  baseStyle: {
    backgroundColor: "#f5d55f",
    gridArea: "left-sidebar",
     
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
