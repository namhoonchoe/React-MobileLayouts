import React from "react";
import { chakra, Flex, Text } from "@chakra-ui/react";

const CardLayout = chakra(Flex, {
  baseStyle: {
    flexDirection: "column",
    width: "100%",
    height: "20rem",
    alignItems: "center",
    justifyContent: "start",
  },
});

const InfoContainer = chakra(Flex, {
  baseStyle: {
    width: "100%",
    height: "8rem",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    px: 1,
  },
});

const UserInfo = chakra(Flex, {
  baseStyle: {
    justifyContent: "start",
    alignItems: "center",
    mt: 1,
    color: "gray.600",
  },
});

const TagContainer = chakra(Flex, {
  baseStyle: {
    justifyContent: "start",
    alignItems: "center",
    mt: 1,
  },
});

const ContentCard: React.FC = () => {
  return (
    <CardLayout>
      <InfoContainer>
        <Text color={"gray.600"} fontWeight={"semibold"} casing={"capitalize"}>
          Title
        </Text>
        <UserInfo></UserInfo>
        <TagContainer></TagContainer>
      </InfoContainer>
    </CardLayout>
  );
};

export default ContentCard;
