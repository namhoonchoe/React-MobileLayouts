import React from "react";
import GridLayout from "@/components/UI/Layouts/GridLayout";
import ContentCard from "@/components/UI/ContentCard";
import { Flex, chakra } from "@chakra-ui/react";

const BasicLayout = chakra(Flex, {
  baseStyle: {
    width: "100%",
    flexDirection: "center",
    justifyContent: "center",
     paddingTop:"10rem"
  },
});

const ExplorePresenter: React.FC = () => {
  return (
    <BasicLayout>
      <GridLayout>
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
      </GridLayout>
    </BasicLayout>
  );
};

export default ExplorePresenter;
