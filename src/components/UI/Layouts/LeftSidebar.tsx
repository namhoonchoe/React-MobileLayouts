import React from "react";
import { Grid, GridItem, chakra } from "@chakra-ui/react";

const LeftSideBarGrid = chakra(Grid, {
  baseStyle: {
    marginTop: "10vh",
    width: "90%",
    maxWidth: "1280px",
    height: "40vh",
    gap: "1",
    gridTemplateColumns: {
      md: `repeat(3,1fr)`,
    },
    gridTemplateAreas: {
      sm: `
      'header'
      'main-content'
      'left-sidebar'
      'footer';
      `,
      md: `
      'header header header'
      'left-sidebar main-content main-content'
      'footer footer footer'
      `,
    },
  },
});

const Header = chakra(GridItem, {
  baseStyle: {
    backgroundColor: "#f97171",
    gridArea: "header",
  },
});

const MainContent = chakra(GridItem, {
  baseStyle: {
    backgroundColor: "#fff",
    gridArea: "main-content",
  },
});

const LSidebar = chakra(GridItem, {
  baseStyle: {
    backgroundColor: "#f5d55f",
    gridArea: "left-sidebar",
  },
});

const Footer = chakra(GridItem, {
  baseStyle: {
    backgroundColor: "#72c2f1",
    gridArea: "footer",
  },
});

const LeftSidebar = () => {
  return (
    <LeftSideBarGrid>
      <Header>Header</Header>
      <MainContent>MainContent</MainContent>
      <LSidebar>LeftSidebar</LSidebar>
      <Footer>Footer</Footer>
    </LeftSideBarGrid>
  );
};

export default LeftSidebar;