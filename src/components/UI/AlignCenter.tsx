import { chakra, Flex } from "@chakra-ui/react";

const AlignCenter = chakra(Flex, {
  baseStyle: {
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    width: "100%",
    minHeight: "100vh",
    left: "50%",
    position: "absolute",
    transform: "translateX(-50%)",
    margin: `0  `,
  },
});

export default AlignCenter;
