import { Grid, chakra } from "@chakra-ui/react";

const GridLayout = chakra(Grid, {
  baseStyle: {
    width: "90%",
    gridTemplateColumns: "repeat(auto-fill, minmax(20rem, 1fr))",
    justifyContent: "center",
    alignItems: "start",
    columnGap: "2rem",
    rowGap: "2rem",
  },
});
export default GridLayout;
