import React from "react";
import styled from "styled-components";
import { Colors } from "../../../constants/Colors";
import { FontSize } from "../../../constants/FontSize";
import TickButtonRound from "../../buttons/TickButtonRound";
import ProfileIcon from "../../icon/ProfileIcon";

const Wrapper = styled.div`
  max-width: calc(100%);
  max-height: 80px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px solid ${Colors.greyOutlineShadow};
  padding: 20px;
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  gap: 5px;
  justify-content: space-between;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  b {
    font-size: ${FontSize.medium};
  }
  a {
    font-size: ${FontSize.extraSmall};
    color: ${Colors.greyOutline};
  }
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  span {
    color: ${Colors.greyOutline};
    font-size: ${FontSize.small};
  }
`;
function RejectedApplicantCard({ name, postedTime, onAccept }) {
  return (
    <Wrapper>
      <Container>
        <Flex>
          <ProfileIcon height={"50px"} />
          <Right>
            <b>{name}</b>
            <a>{postedTime}</a>
          </Right>
        </Flex>
        <Column>
          <TickButtonRound
            onClick={() => {
              onAccept();
            }}
          />
          <span>Tap to view profile</span>
        </Column>
      </Container>
    </Wrapper>
  );
}

export default RejectedApplicantCard;
