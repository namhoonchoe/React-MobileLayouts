import React from "react";
import { Flex, Text, Link } from "@chakra-ui/react";

const HomePresenter: React.FC = () => {
  return (
    <Flex
      width={"100%"}
      height={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Text fontSize={"2rem"}>
        화면설계서를 보고 임의로 구성해 보았습니다. 레이아웃 위주로 봐 주세요<br/>
        디테일한 디자인? 참고자료는 다음 링크를 참조 해주세요  <br/> <br/>
        <Link color="white" href="https://bemypet.kr/" isExternal>
          비마이펫
        </Link>
      </Text>
    </Flex>
  );
};

export default HomePresenter;
