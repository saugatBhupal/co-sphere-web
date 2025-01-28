import React from "react";
import styled from "styled-components";
import { Colors } from "../../../constants/Colors";
import { FontSize } from "../../../constants/FontSize";
import ProfileIcon from "../../icon/ProfileIcon";
import TypeChip from "../chip/TypeChip";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  margin: 10px 0px;
  align-items: center;
`;
const Left = styled.div``;
const Center = styled.div`
  margin: 10px 0px;
  margin-left: 10px;
`;
const Right = styled.div``;
const Column = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Flex = styled.div`
  display: flex;
`;
const Title = styled.div`
  font-size: ${FontSize.small};
  font-weight: 500;
  color: ${Colors.mainBlue};
`;
const SubTitle = styled.div`
  font-size: ${FontSize.small};
  font-weight: 300;
  color: ${Colors.subtitleBlack};
`;
const Tiny = styled.div`
  font-size: 11px;
  font-weight: 300;
  color: ${Colors.subtitleBlack};
  span {
    color: ${Colors.mainBlue};
  }
`;
function ExperienceCard() {
  return (
    <Wrapper>
      <Flex>
        <Left>
          <ProfileIcon height={"70px"} />
        </Left>
        <Center>
          <Column>
            <div>
              <Title>UI | UX Developer</Title>
              <SubTitle>Odama Studios</SubTitle>
            </div>

            <Tiny>
              2023 - 2024 <span>(1 Year)</span>
            </Tiny>
          </Column>
        </Center>
      </Flex>

      <Right>
        <TypeChip type={"Junior"} />
      </Right>
    </Wrapper>
  );
}

export default ExperienceCard;
