import React from "react";
import { chakra, Flex, Text, Img } from "@chakra-ui/react";
import imageUrl from "../../../public/assets/manja-vitolic-gKXKBY-C-Dk-unsplash.jpg"

const CardLayout = chakra(Flex, {
  baseStyle: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: "md",
    position: "relative",
    _hover: { filter: "brightness(75%)" },
  },
});

const InfoContainer = chakra(Flex, {
  baseStyle: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
    height: "6rem",
    backgroundColor: "transparent",
    color: "white",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    px: 1,
    zIndex: 10,
    padding: "5px",
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
      <Img
        width={"100%"}
        height={"100%"}
        objectFit={"cover"}
        objectPosition={"top center"}
        src={imageUrl}
        alt="My Image"
      />

      <InfoContainer>
        <Text fontWeight={"semibold"} casing={"capitalize"} fontSize={"35px"}>
          Title
        </Text>
        <TagContainer>
          <Text>info</Text> \<Text>info</Text> \ <Text>info</Text> 
        </TagContainer>
      </InfoContainer>
    </CardLayout>
  );
};

export default ContentCard;
